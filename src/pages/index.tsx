import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Container, Text, Button } from "@chakra-ui/react";
import { constants } from "@/libs/constants";
import Ticket from "@/components/Ticket";
import Info from "@/components/Info";
import { DownloadIcon } from "@chakra-ui/icons";
import html2canvas from "html2canvas";

export default function Home() {
  const [rsvId, setRsvId] = useState<string | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);

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
        setIsReady(true);
      } else {
        setRsvId(null);
        setIsReady(true);
      }
    }
  }, [router.isReady]);

  //todo
  if (!isReady) {
    return <></>;
  }

  return (
    <>
      <main>
        <Box
          bg="gray.100"
          w="100vw"
          minH="100vh"
          display="flex"
          flexDirection="column"
          alignItems="center"
          px={4}
          py={8}
        >
          <Container
            w="100%"
            maxW="container.sm"
            display="flex"
            flexDirection="column"
            gap={4}
          >
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
            {/*todo:ダウンロードした画像の精度を向上させる*/}
          </Container>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            gap={4}
            mt={4}
          >
            <Text fontSize="sm" color="gray.500">
              アプリバージョン {constants.app_version}
            </Text>
            {/*todo:プライバシーポリシー*/}
          </Box>
          <Text fontSize="sm" color="gray.500">
            © 2023 第7回けやき祭実行委員会IT管理部
          </Text>
        </Box>
      </main>
    </>
  );
}

//todo:エラー状態の表示（404の場合はバーコードの画面に「予約IDが見つかりませんでした」、500の場合は「サーバーエラーが発生しました」など）
//todo:予約IDが取得できない（localstorage,queryにない）場合の表示
//todo:Google Analyticsを導入
//todo:予約IDのチェックの際に「すでにチケットを開いたか」のフラグを立てる
//todo:オフライン時の処理（ローカルストレージに保存しておく）
//todo:PWA化
//todo:PWAのアプリダウンロードを促す
//todo:学校HP・文化祭HPへのリンク
