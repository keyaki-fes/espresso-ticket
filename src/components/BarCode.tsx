import Barcode from "react-barcode";
import { Box } from "@chakra-ui/react";

const BarCode = ({ rsvId }: { rsvId: string }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Barcode
        width={2.8}
        height={60}
        value={rsvId}
        displayValue={false}
        background="rgba(255,255,255,0)"
        lineColor="#000000"
      />
    </Box>
  );
};

export default BarCode;
