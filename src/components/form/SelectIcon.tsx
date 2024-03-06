import { Box, HStack, Text } from "@chakra-ui/react";
import { chakraComponents } from "chakra-react-select";
import Image from "next/image";

const customComponents = {
  Option: ({ children, ...props }: any) => (
    <chakraComponents.Option {...props}>
      <HStack gap={1}>
        <Box p={1} background="rgba(255, 102, 51, 0.10)" borderRadius={8}>
          <Image src={props.data.image} alt={props.data.label} width={24} height={24} objectFit={"contain"} />
        </Box>
        <Text>{children}</Text>
      </HStack>
    </chakraComponents.Option>
  ),
};

export default customComponents;
