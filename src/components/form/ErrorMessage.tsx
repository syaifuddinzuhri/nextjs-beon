import { FormErrorMessage } from "@chakra-ui/react";

interface IProps {
  text: string | undefined;
}

const ErrorMessage: React.FC<IProps> = ({ text }) => {
  return (
    <FormErrorMessage color="red.500" textStyle={"small"} fontWeight={500} mt={1}>
      {text}
    </FormErrorMessage>
  );
};

export default ErrorMessage;
