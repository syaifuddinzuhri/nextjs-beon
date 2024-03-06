import { Box, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

interface IProps {
  title: string;
  image: string;
  active?: boolean;
  onClick?: () => void;
}

const CardService: React.FC<IProps> = ({ title, image, active = false, onClick }) => {
  return (
    <Stack
      border={{ base: "none", md: active ? "1px solid #FF46AA" : "1px solid #F7F8FA" }}
      background={{ base: "white", md: active ? "rgba(255, 102, 51, 0.05)" : "#F7F8FA" }}
      direction={{ base: "column", md: "row" }}
      borderRadius={8}
      gap={{ base: 2, md: 3 }}
      px={3}
      py={{ base: 0, md: 4 }}
      _hover={{
        border: "1px solid #FF46AA",
        background: "rgba(255, 102, 51, 0.05)",
      }}
      onClick={onClick}
      align={{ base: "center", md: "center" }}
      cursor={"pointer"}
    >
      {image && (
        <Box
          p={{ base: 2, md: 0 }}
          mx={{ base: "auto", md: 0 }}
          background={{
            base: "linear-gradient(180deg, rgba(81, 120, 255, 0.40) -128.44%, rgba(223, 230, 255, 0.10) 91.71%)",
            md: "transparent",
          }}
          borderRadius={{ base: 100, md: 0 }}
        >
          <Image src={image} alt="Promo" width={24} height={24} />
        </Box>
      )}
      <Text color={"gray.30"} textStyle={"p"} fontWeight={500} textAlign={{ base: "center", md: "left" }}>
        {title}
      </Text>
    </Stack>
  );
};

export default CardService;
