import type { StackProps } from "@chakra-ui/react";
import { Box, HStack, Stack, Text } from "@chakra-ui/react";

import { IconDiscount, IconHeart, IconHot, IconStar } from "@/assets/index";
import { currency } from "@/utils/formatter";

interface IProps extends StackProps {
  type?: string;
  title: string;
  rate: number;
  sold: number;
  price?: number;
  discount: number;
  favorite: number;
}

const CardProduct: React.FC<IProps> = ({ type, title, rate, sold, price, discount, favorite, ...rest }) => {
  let tmpType;
  switch (type) {
    case "new":
      tmpType = "NEW!";
      break;
    case "sale":
      tmpType = "TERLARIS!!";
      break;
    case "discount":
      tmpType = "DISKON!";
      break;
    case "hot":
      tmpType = "HOT!";
      break;
    case "best":
      tmpType = "BEST DEALS!";
      break;

    default:
      break;
  }

  return (
    <Stack gap={3} borderRadius={8} border="1px solid #EDEFF2" p={4} cursor="pointer" {...rest}>
      <Box>
        {type && (
          <Text
            as={"span"}
            color={{ base: "white", md: "white" }}
            textStyle={{ base: "p", md: "small" }}
            fontWeight={{ base: 700, md: 700 }}
            py={0.5}
            px={1}
            background="#4D74FF"
            borderRadius={12}
            textTransform="uppercase"
            display={"flex"}
            gap={1}
            width="fit-content"
            alignItems={"center"}
          >
            {type === "discount" && <IconDiscount width={20} height={20} color="white" />}
            {type === "hot" && <IconHot width={20} height={20} color="white" />}
            {tmpType}
          </Text>
        )}
        <Text textStyle={"h4"} fontWeight={700} mt={1}>
          {title}
        </Text>
        <HStack mt={1} gap={2}>
          <HStack gap={0.5}>
            {Array.from(Array(5).keys()).map((y, index) => {
              return <IconStar width={16} height={16} color={index + 1 <= rate ? "#FFCB33" : "#EDEDED"} key={y} />;
            })}
          </HStack>
          <Text textStyle={{ base: "h4", md: "p" }}>{`${sold} terjual`}</Text>
        </HStack>
      </Box>
      <HStack gap={2} mt={"auto"}>
        {price && (
          <Text color="#969696" textStyle={{ base: "h4", md: "p" }} textDecorationLine="line-through">
            {currency().format(price)}
          </Text>
        )}
        <Text textStyle={{ base: "h4", md: "p" }}> {currency().format(discount)}</Text>
        {price && (
          <Text
            as={"span"}
            color="white"
            textStyle={"small"}
            lineHeight={"16px"}
            fontWeight={600}
            py={0.5}
            px={1}
            background="#D60F27"
            borderRadius={4}
          >
            {(((price - discount) / price) * 100).toFixed(0)}%
          </Text>
        )}
        <Box ml={"auto"} cursor="pointer">
          <IconHeart color={favorite === 1 ? "#D60F27" : "#969696"} />
        </Box>
      </HStack>
    </Stack>
  );
};

export default CardProduct;
