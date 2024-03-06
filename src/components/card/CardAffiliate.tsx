import type { StackProps } from "@chakra-ui/react";
import { Button, HStack, Stack, Text } from "@chakra-ui/react";

interface IProps extends StackProps {
  title: string;
  data: string;
  button1?: string;
  button2?: string;
  onClick1?: () => void;
  onClick2?: () => void;
}

const CardAffiliate: React.FC<IProps> = ({ title, data, button1, button2, onClick1, onClick2, ...rest }) => {
  return (
    <Stack
      p={{ base: 3, md: 4 }}
      gap={{ base: 3, md: 4 }}
      borderRadius={12}
      background="linear-gradient(180deg, rgba(81, 120, 255, 0.40) -128.44%, rgba(223, 230, 255, 0.10) 91.71%)"
      {...rest}
    >
      <Text textStyle={{ base: "h4", md: "p" }} fontWeight={{ base: 500, md: 500 }}>
        {title}
      </Text>
      <Text
        textStyle={{ base: "h3", md: "h4" }}
        py={4}
        width="full"
        background={"white"}
        borderRadius={12}
        fontWeight={700}
        textAlign="center"
      >
        {data}
      </Text>
      <HStack justifyContent={"center"} gap={2}>
        {button1 && (
          <Button
            variant={"outline"}
            py={{ base: 1, md: 2 }}
            px={{ base: 3, md: 4 }}
            borderRadius={8}
            color="#6688FF"
            onClick={onClick1}
          >
            {button1}
          </Button>
        )}
        {button2 && (
          <Button
            py={{ base: 1, md: 2 }}
            px={7}
            borderRadius={8}
            background="#6688FF"
            _focus={{ background: "#6688FF" }}
            _hover={{ background: "#6688FF" }}
            onClick={onClick2}
          >
            {button2}
          </Button>
        )}
      </HStack>
    </Stack>
  );
};

export default CardAffiliate;
