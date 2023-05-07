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
      <Box boxShadow={"lg"} rounded="lg">
        <Box
          backgroundColor={`blue.700`}
          px={4}
          py={2}
          display="flex"
          flexDirection="column"
          gap={4}
          borderTopRightRadius="lg"
          borderTopLeftRadius="lg"
        >
          <Text
            fontSize="lg"
            fontWeight="bold"
            color="white"
            textAlign="center"
          >
            けやき祭デジタルチケット
          </Text>
        </Box>
        <Box
          backgroundColor="white"
          p={4}
          borderBottomLeftRadius="lg"
          borderBottomRightRadius="lg"
        >
          <Box display="flex" alignItems="center" gap={4} mb={4}>
            <Text fontSize="3xl" fontWeight="bold" color="gray.700">
              {message[status].title}
            </Text>
            {message[status].description && (
              <Text fontSize="xl" color="gray.600" fontWeight={"bold"}>
                {message[status].description}
              </Text>
            )}
          </Box>
          <Text fontSize="md" color="gray.600">
            {message[status].message}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default ErrorCard;
