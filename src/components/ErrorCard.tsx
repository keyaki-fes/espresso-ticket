import { Box, Text } from "@chakra-ui/react";
import type { Status } from "@/pages";
import { Image } from "@chakra-ui/react";
import { messaging } from "firebase-admin";

const message: {
  [key: string]: {
    title: string;
    description?: string;
    message: string;
  };
} = {
  NOT_FOUND: {
    title: "404",
    description: "Not found",
    message:
      "予約IDが見つかりません。送信されたメールに記載されているURLをクリックしてください。",
  },
  SERVER_ERROR: {
    title: "500",
    description: "Internal Server Error",
    message: "サーバーでエラーが発生しました。",
  },
  NETWORK_ERROR: {
    title: "Network Error",
    message: "ネットワークエラーが発生しました。",
  },
  ID_NOT_ENTERED: {
    title: "IDが入力されていません",
    message: "送信されたメールに記載されているURLをクリックしてください。",
  },
  TOO_MANY_REQUESTS: {
    title: "Too Many Requests",
    message:
      "1分間のリクエスト回数の上限を超えました。時間をおいて再度お試しください。",
  },
  OFFLINE: {
    title: "オフラインです",
    message: "ネットワークに接続されていません。",
  },
};

const ErrorCard = ({ status }: { status: Status }) => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        backgroundColor="white"
        borderRadius="lg"
        p={4}
        justifyContent="center"
        alignItems="center"
        gap={4}
      >
        <Text fontSize="2xl" fontWeight="bold" color="gray.700">
          {message[status].title}
        </Text>
        <Box w={56} h={56}>
          <Image src="/error.png" alt="error" />
        </Box>
        {message[status].description && (
          <Text fontSize="lg" color="gray.600" fontWeight={"bold"}>
            {message[status].description}
          </Text>
        )}
        <Text fontSize="md" color="gray.600">
          {message[status].message}
        </Text>
      </Box>
    </>
  );
};

export default ErrorCard;
