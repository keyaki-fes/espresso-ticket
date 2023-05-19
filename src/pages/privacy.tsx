import { Box, Text } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import Head from "next/head";

const Privacy = () => {
  return (
    <>
      <Head>
        <title>このアプリについて | 第7回けやき祭 電子チケット</title>
      </Head>
      <Layout>
        <Text fontSize="lg" fontWeight={"bold"}>
          このアプリについて
        </Text>
        <Box h="1px" w="100%" bg="gray.400" />
        <Text fontSize="md" color="gray.600">
          本webサイトでは、利用者のアクセス状況を把握するために、Google社の提供するアクセス解析ツール「Googleアナリティクス」を利用しています。
          Googleアナリティクスは、Cookieを使用して利用者のアクセス情報を収集します。
          収集した情報は、Google社のプライバシーポリシーに基づいて管理されます。
        </Text>
      </Layout>
    </>
  );
};

export default Privacy;
