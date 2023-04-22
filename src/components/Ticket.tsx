import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import TicketCard from "@/components/TicketCard";
import BarCode from "@/components/BarCode";

type Status = "CONFIRMED" | "NOT_FOUND" | "SERVER_ERROR" | "LOADING";

const Ticket = ({ rsvId }: { rsvId: string | null }) => {
  const [status, setStatus] = useState<Status>("LOADING");

  if (!rsvId) {
    return <></>;
  }

  return (
    <>
      <Box
        backgroundImage="linear-gradient(0deg, #2b4fe0, #1d4ed8);"
        borderRadius="lg"
        p={4}
        display="flex"
        flexDirection="column"
        gap={4}
      >
        <Text fontSize="lg" fontWeight="bold" color="white" textAlign="center">
          けやき祭デジタルチケット
        </Text>
        <Box
          borderRadius="md"
          pt={2}
          pb={4}
          px={8}
          backgroundColor="gray.50"
          width="75%"
          minWidth="350px"
          boxShadow="0px 0px 15px 4px rgba(0, 0, 0, 0.15)"
          mx="auto"
        >
          <BarCode rsvId={rsvId} />
        </Box>
        <TicketCard rsvId={rsvId} />
      </Box>
    </>
  );
};

export default Ticket;
