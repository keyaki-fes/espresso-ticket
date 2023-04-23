import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import TicketCard from "@/components/TicketCard";
import BarCode from "@/components/BarCode";
import { getGuestType, guestColor } from "@/libs/constants";
import { parseRsvId } from "@/libs/utils";

const Ticket = ({ rsvId }: { rsvId: string }) => {
  const { type } = parseRsvId(rsvId);
  const guestType = getGuestType(type) || "そのほか";
  return (
    <>
      <Box boxShadow={"lg"} rounded="lg">
        <Box
          backgroundColor={`${guestColor(guestType)}.700`}
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
          <Box
            borderRadius="md"
            pb={4}
            px={8}
            width="75%"
            minWidth="350px"
            mx="auto"
            my={4}
          >
            <BarCode rsvId={rsvId} />
          </Box>
          <TicketCard rsvId={rsvId} />
        </Box>
      </Box>
    </>
  );
};

export default Ticket;
