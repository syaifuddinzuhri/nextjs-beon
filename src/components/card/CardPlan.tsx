import type { FlexProps } from "@chakra-ui/react";
import { Box, Button, Card, CardBody, Heading, Link, List, ListItem, Stack, Text } from "@chakra-ui/react";

import IconCheckmark from "@/assets/IconCheckmark";
import type { PlanPublic } from "@/interfaces/plan";
import { currency } from "@/utils/formatter";

interface IProps extends FlexProps {
  idPlan: number;
  title: string;
  price: number;
  tag?: string;
  feature: string;
  background: string;
  link?: (value: PlanPublic) => void;
}

const CardPlan: React.FC<IProps> = ({ title, price, idPlan, tag, feature, background, link, ...rest }) => {
  return (
    <Card
      borderRadius={8}
      border="none"
      boxShadow={"0px 2px 10px 0px rgba(38, 51, 77, 0.15)"}
      {...rest}
      minWidth={"320px"}
    >
      <CardBody p={6}>
        <Stack gap={5} height="100%" alignItems="center">
          <Box textAlign="center">
            <Text textStyle={"h3"} mb={1} background={background} backgroundClip="text">
              {title}
            </Text>
            <Heading fontSize={"48px"} lineHeight="70px" position={"relative"} display="flex" alignItems={"center"}>
              <Text as="span" textStyle={"h3"} color={"primary.500"} fontFamily={`'Roboto'`}>
                Rp
              </Text>
              {currency().format(price).replace("Rp", "")}
              {tag && (
                <Text
                  position="absolute"
                  top="4px"
                  right={0}
                  background="#F24949"
                  padding="4px 12px"
                  borderRadius="15px"
                  fontSize="8px"
                  fontWeight={900}
                  lineHeight="12px"
                  color="white"
                >
                  {tag}
                </Text>
              )}
            </Heading>
          </Box>
          <List spacing={1} textStyle="p" alignSelf="normal">
            {JSON.parse(feature).map((x: string, index: number) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <ListItem display="flex" alignItems="center" gap={2} key={index}>
                  <>
                    <IconCheckmark />
                    {x}
                    {/* {!x.checked && <IconClose width={24} height={24} color={"#E62E2E"} />} */}
                    {/* {x.information && (
                    <Box ml={-1}>
                      <IconInformationCircleOutline width={20} height={20} />
                    </Box>
                  )} */}
                  </>
                </ListItem>
              );
            })}
          </List>
          {link && (
            <Button
              alignSelf={"center"}
              width="full"
              as={Link}
              onClick={() => link({ benefits: feature, id_plan: idPlan, name: title, price })}
              marginTop="auto"
            >
              Pilih Plan
            </Button>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CardPlan;
