import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Box, Text } from "@chakra-ui/react";
import Ticket from "@/components/Ticket";
import Info from "@/components/Info";
import { DownloadIcon } from "@chakra-ui/icons";
import html2canvas from "html2canvas";
import axios from "axios";
import ErrorCard from "@/components/ErrorCard";
import Layout from "@/components/Layout";
import Twemoji from "react-twemoji";
import Image from "next/image";

export type Status =
  | "CONFIRMED"
  | "NOT_FOUND"
  | "SERVER_ERROR"
  | "NETWORK_ERROR"
  | "ID_NOT_ENTERED"
  | "TOO_MANY_REQUESTS"
  | "LOADING";

export default function Home() {
  const [rsvId, setRsvId] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("LOADING");

  const router = useRouter();

  const download = () => {
    const ticket = document.getElementById("ticket");
    if (ticket) {
      html2canvas(ticket).then((canvas) => {
        const a = document.createElement("a");
        a.href = canvas.toDataURL("image/png");
        a.download = "ticket.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });
    }
  };

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      if (id) {
        setRsvId(id as string);
      } else {
        setRsvId(null);
      }
    }
  }, [router.isReady]);

  useEffect(() => {
    if (rsvId) {
      axios
        .get(`/api/reservation`, {
          params: {
            id: rsvId,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setStatus("CONFIRMED");
          }
        })
        .catch((err) => {
          if (!err.request) {
            setStatus("NETWORK_ERROR");
          } else if (err.response.status === 404) {
            setStatus("NOT_FOUND");
          } else if (err.response.status === 429) {
            setStatus("TOO_MANY_REQUESTS");
          } else {
            setStatus("SERVER_ERROR");
          }
        });
    } else if (router.isReady) {
      setStatus("ID_NOT_ENTERED");
    }
  }, [rsvId]);

  if (status === "LOADING") {
    return (
      <>
        <Box
          w="100%"
          h="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg="gray.100"
        >
          <Image
            src="/logo.png"
            width={250}
            height={250}
            alt="けやき祭デジタルチケット"
          />
          <Text fontSize="lg" fontWeight="bold" color="gray.600" mt={4}>
            Powered By けやき祭実行委員会IT管理部
          </Text>
        </Box>
      </>
    );
  }

  if (status !== "CONFIRMED" || !rsvId) {
    return (
      <Layout>
        <ErrorCard status={status} />
      </Layout>
    );
  }

  return (
    <Layout>
      <div id="ticket">
        <Ticket rsvId={rsvId} />
      </div>
      <Info />
      <Button
        colorScheme="blue"
        size="sm"
        variant="outline"
        width="100%"
        backgroundColor="white"
        leftIcon={<DownloadIcon />}
        onClick={download}
      >
        チケットをダウンロード
      </Button>
    </Layout>
  );
}

//todo:Google Analyticsを導入
//todo:予約IDのチェックの際に「すでにチケットを開いたか」のフラグを立てる
//todo:オフライン時の処理（ローカルストレージに保存しておく）
//todo:PWA化
//todo:PWAのアプリダウンロードを促す
//todo:学校HP・文化祭HPへのリンク
//todo:エラーハンドリングの改善
//todo:eslintの設定
