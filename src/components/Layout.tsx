import { Box, Container } from "@chakra-ui/react";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
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
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
