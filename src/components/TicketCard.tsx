import { Box, Text, Button } from "@chakra-ui/react";
import { parseRsvId } from "@/libs/utils";
import { getGuestType, guestColor } from "@/libs/constants";

const Item = ({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) => {
  return (
    <Box display="flex" flexDirection="row" alignItems="center" gap={4}>
      <Box
        bg={`${color}.700`}
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
      <Text fontSize="lg" color="gray.700" fontWeight="bold">
        {value}
      </Text>
    </Box>
  );
};

const TicketCard = ({ rsvId }: { rsvId: string }) => {
  const { type, num } = parseRsvId(rsvId);
  const guestType = getGuestType(type) || "そのほか";

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Item label="予約ID" value={`${rsvId}`} color={guestColor(guestType)} />
      <Item
        label="登録区分"
        value={getGuestType(type) || "そのほか"}
        color={guestColor(guestType)}
      />
      <Item label="予約人数" value={`${num}名`} color={guestColor(guestType)} />
    </Box>
  );
};

export default TicketCard;
