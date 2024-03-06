import type { FlexProps } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

interface IProps extends FlexProps {}

const ErrorMessage: React.FC<IProps> = ({ ...rest }) => {
  return (
    <Input
      type={"text"}
      width={{ base: 8, md: 10 }}
      height={{ base: 10, md: 12 }}
      borderRadius={4}
      boxShadow={"0px 2px 5px 0px rgba(38, 51, 77, 0.15)"}
      border="none"
      px={{ base: 3, md: 4 }}
      py={3}
      textAlign="center"
      fontSize={12}
      fontWeight={500}
      lineHeight="20px"
      _hover={{ border: "1px solid #FF8D66" }}
      _focus={{ border: "1px solid #FF8D66" }}
      _focusVisible={{ border: "1px solid #FF8D66" }}
      {...rest}
    />
  );
};

export default ErrorMessage;
