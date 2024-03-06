import { Box, HStack, Input, Text } from "@chakra-ui/react";

import IconChevLeft from "@/assets/IconChevLeft";
import IconChevRight from "@/assets/IconChevRight";
import { useSearchStore } from "@/stores/search";

interface IProps {
  current: number;
  total: number;
}

const Pagination: React.FC<IProps> = ({ current, total }) => {
  const { pagination, setPagination } = useSearchStore();

  return (
    <HStack justifyContent={"center"} gap={2} alignItems="center">
      <Box
        mr={1}
        opacity={current === 1 ? "0.5" : "1"}
        cursor={current > 1 ? "pointer" : "default"}
        onClick={() => {
          if (current > 1) {
            setPagination(pagination?.perPage || 0, current - 1);
          }
        }}
      >
        <IconChevLeft />
      </Box>
      <Input
        type={"number"}
        maxW={10}
        borderRadius={3}
        px={2}
        py={1}
        height="auto"
        textAlign={"right"}
        border="1px solid #DADEE6"
        value={current}
        textStyle={"p"}
        isReadOnly
        fontWeight={500}
      />
      <Text color="#6B7A99" textStyle={"small"} fontWeight={500}>
        of
      </Text>
      <Text color="#334466" textStyle={"p"} fontWeight={500}>
        {total}
      </Text>
      <Box
        ml={1}
        opacity={current === total ? "0.5" : "1"}
        cursor={current < total ? "pointer" : "default"}
        onClick={() => {
          if (current < total) {
            setPagination(pagination?.perPage || 0, current + 1);
          }
        }}
      >
        <IconChevRight />
      </Box>
    </HStack>
  );
};

export default Pagination;
