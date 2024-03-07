import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import React from "react";

interface IProps {
  open: boolean;
  size?: string;
  title: string;
  onClose: () => void;
  children?: React.ReactNode;
}

const ModalData: React.FC<IProps> = ({ open, onClose, title, size = "md", children }) => {
  return (
    <Modal onClose={onClose} isOpen={open} size={size}>
      <ModalOverlay />
      <ModalContent borderRadius={{ base: 16, md: 20 }}>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody p={{ base: 3, md: 7 }}>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalData;
