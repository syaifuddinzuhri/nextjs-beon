import { Box, Modal, ModalBody, ModalContent, ModalOverlay, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

interface IProps {
  open: boolean;
  onClose: () => void;
}

const ModalWelcome: React.FC<IProps> = ({ open, onClose }) => {
  return (
    <Modal onClose={onClose} isOpen={open} isCentered size={"xl"}>
      <ModalOverlay />
      <ModalContent
        borderRadius={20}
        borderBottom="6px solid #FF6633"
        width={{ base: "calc(100% - 32px)", md: "full" }}
      >
        <ModalBody p={7}>
          <Stack gap={4} align="center">
            <Box width={{ base: 170, md: 200 }}>
              <Image src={"/images/welcome.png"} width={200} height={200} alt="Welcome" />
            </Box>
            <Box textAlign={"center"}>
              <Text textStyle={"h3"}>Hi!</Text>
              <Text textStyle={"h4"}>Selamat Datang di Beon</Text>
            </Box>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalWelcome;
