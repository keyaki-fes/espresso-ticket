import { Box, Text, ListItem, UnorderedList, Link } from "@chakra-ui/react";

const Info = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        p={4}
        backgroundColor="white"
        borderRadius="lg"
      >
        <Text fontSize="md" color="gray.600">
          入場時にこのチケットをスタッフに提示してください。
          上記の予約人数まで入場することができます。
        </Text>
        <Text fontSize="md" color="gray.700" fontWeight={"bold"}>
          お願い
        </Text>
        <UnorderedList color="gray.600">
          <ListItem>
            バーコードを読み取りやすくするため、入場時はスマートフォンの画面の明るさを最大にしてお待ちください。
          </ListItem>
          <ListItem>
            このサイトはPWAに対応しています。
            <Link
              href="https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DAndroid&hl=ja"
              color="blue.600"
              isExternal
            >
              インストール
            </Link>
            するとオフライン環境時でもチケットを表示することができます。
          </ListItem>
        </UnorderedList>
      </Box>
    </>
  );
};

export default Info;
