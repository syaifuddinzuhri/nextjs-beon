import type { FlexboxProps } from "@chakra-ui/react";
import {
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";

import { useSearchStore } from "@/stores/search";

interface IProps extends FlexboxProps {
  value: number;
  min?: number;
  max?: number;
}

const ShowData: React.FC<IProps> = ({ value, min = 11, max = 100, ...rest }) => {
  const { pagination, setPagination } = useSearchStore();

  return (
    <HStack gap={3} {...rest}>
      <Text textStyle="p" fontWeight={500}>
        Show
      </Text>
      <NumberInput
        value={value}
        min={min}
        max={max}
        p={0}
        borderRadius={4}
        height="auto"
        maxW={16}
        onChange={(valueAsString: string, valueAsNumber: number) => setPagination(valueAsNumber, pagination?.page || 0)}
      >
        <NumberInputField pl={1} pr={3} py={1} />
        <NumberInputStepper py={1}>
          <NumberIncrementStepper border="none" />
          <NumberDecrementStepper border="none" />
        </NumberInputStepper>
      </NumberInput>
    </HStack>
  );
};

export default ShowData;
