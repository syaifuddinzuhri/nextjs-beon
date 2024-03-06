import { Avatar, HStack, Stack, Tag, Text } from "@chakra-ui/react";

import { IconStar } from "@/assets/index";

interface IProps {
  image: string;
  name: string;
  date: string;
  rate: number;
  tagline: string[];
  comment: string;
}

const CardTestimonial: React.FC<IProps> = ({ image, name, date, rate, tagline, comment }) => {
  return (
    <Stack gap={3} borderRadius={8} border="1px solid #EDEFF2" p={3}>
      <HStack gap={3}>
        <Avatar
          size={"sm"}
          name={name}
          width={10}
          height={10}
          color="#3361FF"
          fontSize={"10px"}
          lineHeight="14px"
          fontWeight={900}
          background={"rgba(51, 97, 255, 0.10)"}
          src={image}
        />
        <Stack gap={1} width="full">
          <HStack gap={0} align="start" justify={"space-between"}>
            <Text textStyle={"h4"} fontWeight={700}>
              {name}
            </Text>
            <Text color="rgba(0, 0, 0, 0.50)" fontSize={"10px"} lineHeight="16px">
              {date}
            </Text>
          </HStack>
          <HStack gap={0.5}>
            {Array.from(Array(5).keys()).map((y, index) => {
              return <IconStar width={16} height={16} color={index + 1 <= rate ? "#FFCB33" : "#EDEDED"} key={y} />;
            })}
          </HStack>
        </Stack>
      </HStack>

      <HStack flexWrap={"wrap"} gap={2}>
        {tagline.map((x, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <Tag variant={"primary"} p="4px 8px" key={index} fontSize={"10px"} lineHeight={"16px"}>
              {x}
            </Tag>
          );
        })}
      </HStack>

      <Stack borderRadius={8} border="1px solid #EDEFF2" background={"gray.99"} p={2} minH={14}>
        <Text textStyle={"p"}>{comment}</Text>
      </Stack>
    </Stack>
  );
};

export default CardTestimonial;
