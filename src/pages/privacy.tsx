import { Box, Text, Link } from "@chakra-ui/react";
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
        <Text fontSize="lg" fontWeight={"bold"}>
          アプリのインストールについて
        </Text>
        <Box h="1px" w="100%" bg="gray.400" />
        <Text fontSize="md" color="gray.600">
          電子チケットはPWAに対応しています。PWAとは、webサイトをスマートフォンのホーム画面に追加することで、スマホアプリのように使用できる技術です。
          <br />
          ホーム画面に追加することで、電子チケットをインターネットに接続していなくても表示することができるようになります。
          文化祭当日は通信環境が混雑したり、不安定になる可能性がありますので、事前にホーム画面への追加をおすすめします。
          <br />
          ホーム画面への追加方法は、以下のリンクを参照してください。
        </Text>
        <Link
          href="https://drive.google.com/file/d/14qCmFCZ5WknvGFiEcu2g6wpxamUMxhPy/view?usp=sharing"
          color="blue.500"
          target="_blank"
        >
          Androidの場合
        </Link>
        <Text as="span" color="gray.600" fontSize="sm">
          現在、こちらの手順はAndroidのみで実行可能です。
          また、この手順を踏まない場合でも、電子チケットを表示することは可能です。
        </Text>
      </Layout>
    </>
  );
};

export default Privacy;
