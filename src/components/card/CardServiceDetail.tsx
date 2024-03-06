import type { FlexProps } from "@chakra-ui/react";
import { Box, Card, CardBody, HStack, Stack, Text } from "@chakra-ui/react";

import { IconRating, IconServiceDetail, IconStar } from "@/assets/index";
import type { Product } from "@/interfaces/product";

interface IProps extends FlexProps {
  icon?: boolean;
  data: Product;
  onOpen?: (value?: boolean) => void;
}

const CardServiceDetail: React.FC<IProps> = ({ icon = true, data, onOpen, ...rest }) => {
  return (
    <Card boxShadow={"none"} borderRadius={{ base: 8, md: 12 }} border="1px solid #EDEFF2" {...rest}>
      <CardBody p={{ base: 2, md: 3 }}>
        <Stack gap={3}>
          <HStack>
            {icon && <IconServiceDetail />}
            <Text color={"gray.10"} textStyle={"h4"} fontWeight={700}>
              Detail Layanan
            </Text>
          </HStack>
          <Box borderBottom={"1px dashed rgba(0, 0, 0, 0.10)"} />
          <Text color={"#26334D"} textStyle={"p"} fontWeight={700}>
            {data.name}
          </Text>
          <Box>
            <Text textStyle={"small"} dangerouslySetInnerHTML={{ __html: data.description }} />
            {/* <Text color={"blue"} textStyle={"small"} fontWeight={700} p={1}>
              Show More
            </Text> */}
          </Box>
          <Box borderBottom={"1px dashed rgba(0, 0, 0, 0.10)"} />
          <HStack alignItems={"start"} onClick={() => onOpen && onOpen(true)}>
            <Box borderRadius={8} background="rgba(255, 102, 51, 0.10)" p={"2px"}>
              <IconRating />
            </Box>
            <Stack>
              <Text textStyle={"p"} fontWeight={700}>
                Rating
              </Text>
              <HStack mb={1} gap={"2px"}>
                {Array.from(Array(5).keys()).map((y, index) => {
                  return (
                    <IconStar
                      width={16}
                      height={16}
                      color={index + 1 <= (data.product_month?.rating || 0) ? "#FFCB33" : "#EDEDED"}
                      key={y}
                    />
                  );
                })}
              </HStack>
              <Text textStyle={"p"}>{data.product_month?.sales}x terjual</Text>
            </Stack>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CardServiceDetail;
