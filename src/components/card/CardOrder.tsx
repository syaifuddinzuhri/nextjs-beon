import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

import { IconDiscount, IconDiscountSquare } from "@/assets/index";
import { CartData } from "@/constants/dummy";

interface IProps {}

const CardOrder: React.FC<IProps> = () => {
  return (
    <Accordion gap={2} as={Stack} allowToggle>
      {CartData.map(x => {
        return (
          <AccordionItem key={x.id} borderRadius={8} border="1px solid #EDEFF2" _focus={{ borderRadius: 8 }}>
            <AccordionButton
              _hover={{ background: "white", borderRadius: 8 }}
              _focus={{ background: "white" }}
              px={3}
              py={4}
              _expanded={{ pt: 3, pb: 2 }}
            >
              <HStack justify={"space-between"} gap={2}>
                <Checkbox />
                <Box p={1} borderRadius={8} background="rgba(255, 102, 51, 0.10)">
                  <Image src={"/images/social/instagram.png"} width={20} height={20} alt="" />
                </Box>
                <Text
                  color={"gray.40"}
                  fontSize={"13px"}
                  lineHeight={"25px"}
                  fontWeight={700}
                  textAlign="left"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  width={"200px"}
                >
                  {x.name}
                </Text>
                <AccordionIcon width={4} height={4} ml={"auto"} />
              </HStack>
            </AccordionButton>
            <AccordionPanel
              p={0}
              pt={0}
              pb={3}
              pl={5}
              fontSize={"11px"}
              lineHeight={"20px"}
              color={"gray.40"}
              fontWeight={500}
            >
              <Stack gap={1}>
                <HStack gap={2} align="center">
                  <Text w={20} flex="none">
                    Target
                  </Text>
                  <Text>:</Text>
                  <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" width={40}>
                    {x.target}
                  </Text>
                </HStack>
                <HStack gap={2} align="center">
                  <Text w={20} flex="none">
                    Jumlah Order
                  </Text>
                  <Text>:</Text>
                  <Text>{x.qty}</Text>
                </HStack>
                <HStack gap={2} align="center">
                  <Text w={20} flex="none">
                    Harga
                  </Text>
                  <Text>:</Text>
                  <Text>{x.price}</Text>
                </HStack>
                <HStack gap={2} align="center">
                  <Text w={20} flex="none">
                    Diskon
                  </Text>
                  <Text>:</Text>
                  {!x.voucher && x.discount && <Text>{x.discount}</Text>}
                  {!x.voucher && !x.discount && (
                    <HStack
                      px={2}
                      py={1}
                      gap={2}
                      background={"rgba(51, 97, 255, 0.10)"}
                      borderRadius={8}
                      width="fit-content"
                    >
                      <IconDiscountSquare width={16} height={16} color="#4D74FF" />
                      <Text color={"#4D74FF"} textStyle={"small"} lineHeight={"24px"} fontWeight={700}>
                        Add Voucher
                      </Text>
                    </HStack>
                  )}
                  {x.voucher && x.discount && (
                    <HStack
                      alignItems={"center"}
                      justifyContent="space-between"
                      px={2}
                      py={1}
                      position="relative"
                      background={"rgba(255, 102, 51, 0.05)"}
                      border="1px solid rgba(255, 102, 51, 0.20)"
                      borderRadius={8}
                      width="fit-content"
                      _before={{
                        position: "absolute",
                        content: '""',
                        width: 1,
                        height: 2,
                        top: "50%",
                        transform: "translateY(-50%)",
                        left: "-1px",
                        background: "white",
                        border: "1px solid rgba(255, 102, 51, 0.20)",
                        borderRadius: "0 8px 8px 0",
                        borderLeftColor: "white",
                      }}
                      _after={{
                        position: "absolute",
                        content: '""',
                        width: 1,
                        height: 2,
                        top: "50%",
                        transform: "translateY(-50%)",
                        right: "-1px",
                        background: "white",
                        border: "1px solid rgba(255, 102, 51, 0.20)",
                        borderRadius: "8px 0 0 8px",
                        borderRightColor: "white",
                      }}
                    >
                      <Box>
                        <HStack align={"center"} gap={2}>
                          <IconDiscount />
                          <Text textStyle={"p"} fontWeight={700} color={"primary.500"}>
                            {x.voucher}
                          </Text>
                        </HStack>
                        <Text textStyle={"small"} fontWeight={500} color={"primary.500"}>
                          Diskon yang didapat {x.discount.replace("-", "")}
                        </Text>
                      </Box>
                    </HStack>
                  )}
                </HStack>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default CardOrder;
