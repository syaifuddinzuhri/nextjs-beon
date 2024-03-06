import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import Lottie from "lottie-react";
import animationLoader from "./Loader.json";

interface IProps {
  open: boolean;
  onClose: () => void;
}

const Loader: React.FC<IProps> = ({ open, onClose }) => {
  return (
    <Modal onClose={onClose} isOpen={open} isCentered closeOnEsc={false} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent background={"transparent"} width={100} height={100} boxShadow="none">
        <Lottie animationData={animationLoader} loop />
      </ModalContent>
    </Modal>
  );
};

export default Loader;
