import { Box, Button, HStack, Icon, Stack, Text } from "@chakra-ui/react";

import { IconDown, IconInformationCustom, IconNew, IconPrice, IconServiceOff, IconServiceOn } from "@/assets/index";

interface IProps {
  type: string;
  product: string;
  tag?: string;
  action?: string;
}

const CardInformation: React.FC<IProps> = ({ type, product, tag, action }) => {
  let bg;
  let color;
  let name;
  let icon;

  switch (type) {
    case "PRICE":
      bg = "rgba(230, 46, 46, 0.10)";
      color = "#E62E2E";
      name = "Turun Harga";
      icon = IconDown;
      break;
    case "service-info":
      bg = "rgba(51, 97, 255, 0.10)";
      color = "#4D74FF";
      name = "Info Penting Layanan";
      icon = IconInformationCustom;
      break;
    case "PRICE-NEW":
      bg = "rgba(51, 191, 255, 0.10)";
      color = "#17A5E6";
      name = "Harga Baru";
      icon = IconPrice;
      break;
    case "NEW":
      bg = "rgba(230, 46, 123, 0.10)";
      color = "#FF66A6";
      name = "Layanan Baru";
      icon = IconNew;
      break;
    case "ENABLE":
      bg = "rgba(41, 204, 57, 0.10)";
      color = "#13BF24";
      name = "Layanan ON";
      icon = IconServiceOn;
      break;
    case "DISABLE":
      bg = "rgba(0, 0, 0, 0.10)";
      color = "#000000E5";
      name = "Layanan OFF";
      icon = IconServiceOff;
      break;

    default:
      break;
  }
  return (
    <Stack gap={2} background={"gray.99"} p={{ base: 2, md: 3 }} borderRadius={8} border="1px solid #EDEFF2">
      <HStack gap={2}>
        {icon && (
          <Box
            p={1}
            background={bg}
            borderRadius={8}
            css={{ " > svg > *": { fill: color }, " > svg": { height: "24px", width: "24px" } }}
          >
            <Icon as={icon} />
          </Box>
        )}
        <Text color={color} textStyle={"h4"} fontWeight={700}>
          {name}
        </Text>
      </HStack>
      <Box borderBottom={"1px dashed rgba(0, 0, 0, 0.10)"} />
      <HStack flexWrap={"wrap"} rowGap={1} columnGap={3}>
        <Text textStyle={"p"} dangerouslySetInnerHTML={{ __html: product }} />
        {tag && (
          <Text px={1} borderRadius={4} color={"white"} textStyle={"p"} fontWeight={700} background="red.500">
            {tag}
          </Text>
        )}
      </HStack>
      {action && (
        <Button py={2} px={4} height="auto" alignSelf={"end"} mt={1}>
          Beli Sekarang
        </Button>
      )}
    </Stack>
  );
};

export default CardInformation;
