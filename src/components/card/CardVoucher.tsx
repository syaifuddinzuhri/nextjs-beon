import { Box, Button, Heading, HStack, Stack, Text } from "@chakra-ui/react";

import { IconDiscount } from "@/assets/index";

interface IProps {
  type: string;
  voucher: string;
  description: string;
  disabled?: boolean;
  onClick?: () => void;
}

const CardVoucher: React.FC<IProps> = ({ type, voucher, description, disabled = false, onClick }) => {
  return (
    <Stack
      py={{ base: 3, md: 4 }}
      px={{ base: 4, md: 6 }}
      gap={2}
      borderRadius={8}
      border="1px solid #EDEFF2"
      position={"relative"}
      background={disabled ? "#F7F8FA" : "#FFF"}
      pointerEvents={disabled ? "none" : "auto"}
      _before={{
        position: "absolute",
        content: '""',
        width: 3,
        height: 6,
        top: "50%",
        transform: "translateY(-50%)",
        left: "-1px",
        background: "white",
        border: "1px solid #EDEFF2",
        borderRadius: "0 24px 24px 0",
        borderLeftColor: "white",
      }}
      _after={{
        position: "absolute",
        content: '""',
        width: 3,
        height: 6,
        top: "50%",
        transform: "translateY(-50%)",
        right: "-1px",
        background: "white",
        border: "1px solid #EDEFF2",
        borderRadius: "24px 0 0 24px",
        borderRightColor: "white",
      }}
    >
      <Text color={disabled ? "#ADB8CC" : "#334466"} textStyle={"h4"} fontWeight={700}>
        {type}
      </Text>
      <Box border={"1px dashed rgba(0, 0, 0, 0.10)"} />
      <HStack gap={2}>
        <IconDiscount width={"24px"} height={"24px"} color={disabled ? "#ADB8CC" : "#FF6633"} />
        <Heading color={disabled ? "#ADB8CC" : "#FF6633"} fontSize={"18px"} lineHeight={"30px"}>
          {voucher}
        </Heading>
      </HStack>
      <Text
        color={disabled ? "#ADB8CC" : "#334466"}
        textStyle={"p"}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <Button
        size={"xs"}
        width="fit-content"
        ml={"auto"}
        background={disabled ? "#ADB8CC" : "#FF6633"}
        onClick={onClick}
      >
        Gunakan
      </Button>
    </Stack>
  );
};

export default CardVoucher;
