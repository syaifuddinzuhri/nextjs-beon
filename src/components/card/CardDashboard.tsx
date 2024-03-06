import type { StackProps } from "@chakra-ui/react";
import { Box, Button, Card, CardBody, HStack, Stack, Text } from "@chakra-ui/react";

import { IconArrowRightCircle } from "@/assets/index";

interface IProps extends StackProps {
  bgColor: string;
  boxShadow: string;
  title: string;
  description: string | number;
  iconDescription?: any;
  leftIcon: any;
  rightIcon?: any;
  button?: string;
  buttonLoading?: boolean;
  onClick?: () => void;
}

const CardDashboard: React.FC<IProps> = ({
  bgColor,
  boxShadow,
  title,
  description,
  iconDescription,
  leftIcon,
  rightIcon,
  button,
  buttonLoading = false,
  onClick,
  ...rest
}) => {
  return (
    <Card borderRadius={{ base: 4, md: 12 }} background={bgColor} boxShadow={boxShadow}>
      <CardBody px={2} pt={2} pb={{ base: 2, md: 4 }}>
        <Stack gap={{ base: 3, md: 4 }} {...rest}>
          <HStack gap={2} alignItems={"center"}>
            {leftIcon && (
              <Box
                borderRadius={{ base: 8, md: 12 }}
                p={{ base: 0.5, md: 1 }}
                background="rgba(255, 255, 255, 0.20)"
                flex={"none"}
              >
                {leftIcon}
              </Box>
            )}
            <Text color={"white"} textStyle={"p"} fontWeight={500}>
              {title}
            </Text>
            {rightIcon && <Box ml={-1}>{rightIcon}</Box>}
            {button && (
              <Box onClick={onClick} cursor={"pointer"} ml="auto" transform={"rotate(-45deg)"} alignSelf="start">
                <IconArrowRightCircle color="white" width={20} height={20} />
              </Box>
            )}
          </HStack>
          <HStack gap={3} alignSelf="center">
            {iconDescription}
            <Text
              color={"white"}
              fontSize={{ base: "12px", md: "20px" }}
              lineHeight={{ base: "20px", md: "30px" }}
              fontWeight={700}
              textAlign={"center"}
            >
              {description}
            </Text>
          </HStack>
          {button && (
            <Button
              onClick={onClick}
              bg="rgba(255, 255, 255, 0.30)"
              py={2}
              px={6}
              _hover={{ bg: "rgba(255, 255, 255, 0.30)" }}
              isLoading={buttonLoading}
            >
              <Box whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                {button}
              </Box>
            </Button>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CardDashboard;
