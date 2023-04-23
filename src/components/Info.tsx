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
          スマートフォンで表示するか、印刷してお持ちください。
        </Text>
        <Text fontSize="md" color="gray.700" fontWeight={"bold"}>
          お願い
        </Text>
        <UnorderedList color="gray.600">
          <ListItem>
            バーコードで読み取りやすくするため、スマートフォンの画面の明るさを最大にしてください
          </ListItem>
        </UnorderedList>
      </Box>
    </>
  );
};

export default Info;

//todo:入場の際にどの列に並ぶかを表示する
