import { Box, Text, Button } from "@chakra-ui/react";
import { parseRsvId } from "@/libs/utils";
import { typeList } from "@/libs/constants";

const Item = ({ label, value }: { label: string; value: string }) => {
  return (
    <Box display="flex" flexDirection="row" alignItems="center" gap={4}>
      <Box
        bg="blue.900"
        rounded={"md"}
        color="white"
        w={20}
        py={1.5}
        fontSize="sm"
        fontWeight="bold"
        textAlign={"center"}
        boxShadow="0px 0px 15px 1px rgba(255, 255, 255, 0.08)"
      >
        {label}
      </Box>
      <Text fontSize="lg" color="slate.50" fontWeight="bold">
        {value}
      </Text>
    </Box>
  );
};

const TicketCard = ({ rsvId }: { rsvId: string }) => {
  const { type } = parseRsvId(rsvId);

  return (
    <Box display="flex" flexDirection="column" gap={2} mt={4}>
      <Item label="予約ID" value={`R-${rsvId}`} />
      <Item label="登録区分" value={typeList[type] || "そのほか"} />
      <Item label="入場日時" value="2023/06/03 09:00-14:00" />
    </Box>
  );
};

export default TicketCard;
