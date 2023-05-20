import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { Button, Box, Text } from "@chakra-ui/react";
import Ticket from "@/components/Ticket";
import Info from "@/components/Info";
import { DownloadIcon } from "@chakra-ui/icons";
import axios from "axios";
import ErrorCard from "@/components/ErrorCard";
import Layout from "@/components/Layout";
import html2canvas from "html2canvas";
import { useRef } from "react";

export type Status =
  | "CONFIRMED"
  | "NOT_FOUND"
  | "SERVER_ERROR"
  | "NETWORK_ERROR"
  | "OFFLINE"
  | "ID_NOT_ENTERED"
  | "TOO_MANY_REQUESTS"
  | "LOADING";

export default function Home() {
  const [rsvId, setRsvId] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("LOADING");
  const ref = useRef(null);

  const router = useRouter();

  const download = useCallback(() => {
    if (ref.current === null) return;

    html2canvas(ref.current, {
      backgroundColor: null,
      scale: 2,
    }).then((canvas) => {
      const a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      a.download = "ticket.png";
      a.click();
    });
  }, [ref]);

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
    const rsvIdFromLocalStorage = window.localStorage.getItem("rsvId");
    if (rsvId) {
      if (rsvIdFromLocalStorage === rsvId) {
        setStatus("CONFIRMED");
        return;
      } else {
        window.localStorage.removeItem("rsvId");
      }
      if (!window.navigator.onLine) {
        setStatus("OFFLINE");
        return;
      }
      axios
        .get(`/api/reservation`, {
          params: {
            id: rsvId,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setStatus("CONFIRMED");
            window.localStorage.setItem("rsvId", rsvId);
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
      if (rsvIdFromLocalStorage && rsvId === null) {
        setRsvId(rsvIdFromLocalStorage);
        setStatus("CONFIRMED");
        return;
      }
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
          <Text fontSize="lg" fontWeight="bold" color="gray.600" mt={4}>
            チケットを読み込んでいます...
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
      <div ref={ref}>
        <Ticket rsvId={rsvId} />
      </div>
      <Info />
      <Button
        colorScheme="blue"
        overflow="wrap"
        variant="outline"
        whiteSpace="normal"
        width="100%"
        backgroundColor="white"
        leftIcon={<DownloadIcon />}
        onClick={download}
      >
        チケットをダウンロード
        <wbr />
        （PNG画像、約60KB）
      </Button>
    </Layout>
  );
}
