import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";

import type { NavHeaderType } from "../types";

const NavHeaderMobile: React.FC<NavHeaderType> = ({ name, icon, child }) => {
  return (
    <>
      <AccordionItem border={"none"}>
        <AccordionButton as="div" p={0} _hover={{ background: "white" }} _focus={{ background: "white" }}>
          <HStack py={3} gap={2} w={"full"}>
            {icon && (
              <Box
                css={{
                  " > svg > *": {
                    fill: "#26334D",
                  },
                  " > svg": {
                    height: "20px",
                    width: "20px",
                  },
                }}
              >
                <Icon as={icon} />
              </Box>
            )}
            <Text textStyle={"p"} fontWeight={500} color={"gray.30"} display="flex">
              {name}
              {/* <Text as={"span"} color={"primary.500"}>
                &nbsp;Indonesia
              </Text> */}
            </Text>
            {child && child?.length !== 0 && <AccordionIcon ml={"auto"} />}
          </HStack>
        </AccordionButton>
        {child && child?.length !== 0 && (
          <AccordionPanel p={0} px={3}>
            <Accordion allowToggle>
              {child?.map(x => {
                return (
                  <Box key={x.name}>
                    {x.name && x.icon && x.child && child?.length !== 0 && (
                      <NavHeaderMobile name={x.name} icon={x.icon} child={x.child} path={x.path} />
                    )}
                    {x.name && !x.icon && (
                      <HStack py={2} pl={3} w="full">
                        <Text textStyle={"p"} fontWeight={500} color={"primary.500"}>
                          {x.name}
                        </Text>
                      </HStack>
                    )}
                    {x.name && x.icon && !x.child && (
                      <HStack py={2} w="full">
                        {x.icon && (
                          <Box
                            css={{
                              " > svg > *": {
                                fill: "#26334D",
                              },
                              " > svg": {
                                height: "20px",
                                width: "20px",
                              },
                            }}
                          >
                            <Icon as={x.icon} />
                          </Box>
                        )}
                        <Text textStyle={"p"} fontWeight={500}>
                          {x.name}
                        </Text>
                      </HStack>
                    )}
                  </Box>
                );
              })}
            </Accordion>
          </AccordionPanel>
        )}
      </AccordionItem>
    </>
  );
};

export default NavHeaderMobile;
