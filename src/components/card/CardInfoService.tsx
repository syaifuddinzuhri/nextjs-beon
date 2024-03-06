import { Box, HStack, Stack, Text } from "@chakra-ui/react";

import { IconAlarm, IconMax, IconMin, IconPrice, IconShop } from "@/assets/index";
import { useOrderStore } from "@/stores/order";
import { currency, secondsToTime } from "@/utils/formatter";

interface IProps {}

const CardInfoService: React.FC<IProps> = () => {
  const { product } = useOrderStore();

  return (
    <Stack
      rowGap={4}
      columnGap={0}
      px={3}
      width="full"
      direction={"row"}
      flexWrap="wrap"
      justifyContent={"space-between"}
    >
      <HStack gap={2} align="start">
        <Box p={0.5} borderRadius={8} background="rgba(255, 102, 51, 0.10)" position={"relative"}>
          <IconShop color="#FF6633" width={20} height={20} />
          <Box position={"absolute"} right={0} bottom={0}>
            <IconMin width={12} height={12} />
          </Box>
        </Box>
        <Box gap={0}>
          <Text textStyle={"p"} fontWeight={700}>
            Min.
          </Text>
          <Text color={"#6B7A99"} textStyle={"p"}>
            {product?.min_order}
          </Text>
        </Box>
      </HStack>
      <HStack gap={2} align="start">
        <Box p={0.5} borderRadius={8} background="rgba(255, 102, 51, 0.10)" position={"relative"}>
          <IconShop color="#FF6633" width={20} height={20} />
          <Box position={"absolute"} right={0} bottom={0}>
            <IconMax width={12} height={12} />
          </Box>
        </Box>
        <Box gap={0}>
          <Text textStyle={"p"} fontWeight={700}>
            Max.
          </Text>
          <Text color={"#6B7A99"} textStyle={"p"}>
            {product?.max_order}
          </Text>
        </Box>
      </HStack>
      <HStack gap={2} align="start">
        <Box p={0.5} borderRadius={8} background="rgba(255, 102, 51, 0.10)" position={"relative"}>
          <IconPrice color="#FF6633" width={20} height={20} />
        </Box>
        <Box gap={0}>
          <Text textStyle={"p"} fontWeight={700}>
            Harga/K
          </Text>
          <Text color={"#6B7A99"} textStyle={"p"}>
            {currency().format(product?.price_sell || 0)}
          </Text>
        </Box>
      </HStack>
      <HStack gap={2} align="start">
        <Box p={0.5} borderRadius={8} background="rgba(255, 102, 51, 0.10)" position={"relative"}>
          <IconAlarm color="#FF6633" width={20} height={20} />
        </Box>
        <Box gap={0}>
          <Text textStyle={"p"} fontWeight={700}>
            Rata-Rata Selesai
          </Text>
          <Text color={"#6B7A99"} textStyle={"p"}>
            {secondsToTime(product?.product_month?.speed || 0)}
          </Text>
        </Box>
      </HStack>
    </Stack>
  );
};

export default CardInfoService;
