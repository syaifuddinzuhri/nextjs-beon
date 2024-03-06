import { Box, Button, Modal, ModalBody, ModalContent, ModalOverlay, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import { IconClose } from "@/assets/index";

interface IProps {
  open: boolean;
  image?: string;
  title: string;
  description?: string;
  button1?: string;
  button2?: string;
  children?: React.ReactNode;
  close?: boolean;
  type?: string;
  onClose: () => void;
  onClick1?: () => void;
  onClick2?: () => void;
}

const ModalMessage: React.FC<IProps> = ({
  open,
  image,
  title,
  description,
  button1,
  button2,
  children,
  close = false,
  type = "",
  onClose,
  onClick1,
  onClick2,
}) => {
  return (
    <Modal onClose={onClose} isOpen={open} isCentered>
      <ModalOverlay />
      <ModalContent borderRadius={{ base: 16, md: 20 }} width={{ base: "calc(100% - 24px)", md: "full" }}>
        <ModalBody p={{ base: 3, md: 7 }}>
          <Stack gap={{ base: 3, md: 4 }} alignItems="center">
            {close && (
              <Box ml="auto" cursor={"pointer"} onClick={onClose}>
                <IconClose />
              </Box>
            )}
            {image && (
              <Box width={{ base: 116, md: 200 }}>
                <Image src={image} width={200} height={200} alt={title} style={{ margin: "auto" }} />
              </Box>
            )}
            <Box textAlign={"center"}>
              <Text textStyle={"h3"} mb={1}>
                {title}
              </Text>
              {description && (
                <Text textStyle={{ base: "p", md: "h4" }} dangerouslySetInnerHTML={{ __html: description }} />
              )}
            </Box>
            {(button1 || button2) && (
              <Stack
                gap={3}
                mt={1}
                width="full"
                direction={{ base: type === "row" ? "row" : "column", md: "row" }}
                justify={"center"}
              >
                {button1 && (
                  <Button
                    variant={"outline"}
                    minW={"130px"}
                    width={{ base: "full", md: "fit-content" }}
                    onClick={onClick1}
                  >
                    {button1}
                  </Button>
                )}
                {button2 && (
                  <Button minW={"130px"} width={{ base: "full", md: "fit-content" }} onClick={onClick2}>
                    {button2}
                  </Button>
                )}
              </Stack>
            )}
            {children}
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalMessage;
