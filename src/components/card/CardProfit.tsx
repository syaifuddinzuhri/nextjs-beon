import type { StackProps } from "@chakra-ui/react";
import { Stack, Text } from "@chakra-ui/react";

interface IProps extends StackProps {
  title: string;
  number: string;
  description: string;
}

const CardProfit: React.FC<IProps> = ({ title, number, description, ...rest }) => {
  return (
    <Stack p={4} gap={1} {...rest}>
      <Text fontSize={48} lineHeight={"70px"} fontWeight={900} color="#DADEE6">
        {number}
      </Text>
      <Text textStyle={"h3"} fontSize={{ base: "14px", md: "20px" }}>
        {title}
      </Text>
      <Text textStyle={"p"} mt="auto">
        {description}
      </Text>
    </Stack>
  );
};

export default CardProfit;
