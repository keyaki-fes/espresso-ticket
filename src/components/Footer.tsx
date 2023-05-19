import { Text, Box, Link } from "@chakra-ui/react";
import { constants } from "@/libs/constants";

const Footer = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        mt={4}
        gap={4}
      >
        <Text fontSize="sm" color="gray.500">
          アプリバージョン {constants.app_version}
        </Text>
        <Link
          fontSize="sm"
          color="gray.500"
          href="/privacy"
          textDecoration={"underline"}
        >
          このアプリについて
        </Link>
      </Box>
      <Text fontSize="sm" color="gray.500">
        © 2023 第7回けやき祭実行委員会IT管理部
      </Text>
    </>
  );
};

export default Footer;
