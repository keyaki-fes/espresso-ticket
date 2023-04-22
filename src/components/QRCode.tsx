import { useQRCode } from "next-qrcode";
import { Box } from "@chakra-ui/react";

const QRCode = ({ rsvId }: { rsvId: string }) => {
  const { SVG } = useQRCode();

  return (
    <Box display="flex" justifyContent="center">
      <Box
        objectFit={"contain"}
        border="1px"
        borderStyle="dashed"
        borderColor="gray.300"
      >
        <SVG text={rsvId} options={{ width: 100, margin: 2 }} />
      </Box>
    </Box>
  );
};

export default QRCode;
