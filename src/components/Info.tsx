import {
  Box,
  Text,
  Button,
  ListItem,
  UnorderedList,
  Grid,
  GridItem,
} from "@chakra-ui/react";

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
            バーコードで読み取りやすくするため、スマートフォンの画面の明るさを最大にしてください
          </ListItem>
          <ListItem>
            文化祭当日はシステムの混雑が予想されるため、あらかじめチケットのダウンロードをお願いします
          </ListItem>
        </UnorderedList>
      </Box>
    </>
  );
};

export default Info;

//todo:入場の際にどの列に並ぶかを表示する
