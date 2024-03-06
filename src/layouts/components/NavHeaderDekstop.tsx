import { Accordion, Box, HStack, Icon, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";

import { IconChevRight } from "@/assets/index";

import type { NavHeaderType } from "../types";
import NavHeaderMobile from "./NavHeaderMobile";

interface NavHeaderTypeComponent {
  name?: string;
  icon?: any;
  path?: string;
  variant?: string;
  child?: NavHeaderType[];
}

const NavHeaderDekstop: React.FC<NavHeaderTypeComponent> = ({ name, icon, child, variant }) => {
  return (
    <>
      <Menu closeOnSelect={false}>
        <MenuButton as={"div"} p={0} height="auto">
          <HStack gap={1}>
            {icon && (
              <Box
                css={{
                  " > svg > *": {
                    fill: variant === "light" ? "#fff" : "#26334D",
                  },
                  " > svg": {
                    height: "24px",
                    width: "24px",
                  },
                }}
              >
                <Icon as={icon} />
              </Box>
            )}
            {name && !icon && (
              <Text textStyle={"h4"} fontWeight={500} color={variant === "light" ? "white" : "gray.30"}>
                {name}
              </Text>
            )}
            {!icon && child && child.length !== 0 && (
              <Box transform={"rotate(90deg)"}>
                <IconChevRight color={variant === "light" ? "#fff" : "#26334D"} height={30} width={30} />
              </Box>
            )}
          </HStack>
        </MenuButton>
        {child && (
          <MenuList
            px={3}
            py={0}
            borderRadius={16}
            border="none"
            boxShadow={"0px 2px 15px 0px rgba(38, 51, 77, 0.10)"}
            zIndex={2}
          >
            {child.some(x => x.child) && (
              <Accordion allowToggle>
                {child?.map(x => {
                  return (
                    <Box key={x.name}>
                      {x.name && x.icon && x.child && child?.length !== 0 && (
                        <NavHeaderMobile name={x.name} icon={x.icon} child={x.child} path={x.path} />
                      )}
                    </Box>
                  );
                })}
              </Accordion>
            )}
            {!child.some(x => x.child) &&
              child.map(x => {
                return (
                  <MenuItem
                    py={3}
                    px={0}
                    _hover={{ background: "white" }}
                    _focus={{ background: "white" }}
                    as={Box}
                    key={x.name}
                  >
                    <HStack gap={2}>
                      {x.icon && (
                        <Box
                          css={{
                            " > svg > *": {
                              fill: "#26334D",
                            },
                            " > svg": {
                              height: "30px",
                              width: "30px",
                            },
                          }}
                        >
                          <Icon as={x.icon} />
                        </Box>
                      )}
                      <Text textStyle={"p"} fontWeight={500} color={"gray.30"}>
                        {x.name}
                      </Text>
                    </HStack>
                  </MenuItem>
                );
              })}
          </MenuList>
        )}
      </Menu>
      {name && !icon && (
        <Box borderRight={`1px solid ${variant === "light" ? "white" : "#00000033"}`} height="20px" mx={2} />
      )}
    </>
  );
};

export default NavHeaderDekstop;
