import { Accordion, Box, Button, Container, HStack, Menu, MenuButton, MenuList, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import { IconBurger, IconWallet } from "@/assets/index";
import { NavHeaderData } from "@/constants/menu";
import { useUserStore } from "@/stores/user";
import { currency } from "@/utils/formatter";

import NavHeaderDekstop from "./NavHeaderDekstop";
import NavHeaderMobile from "./NavHeaderMobile";

interface IProps {
  type?: string;
  variant?: string;
  children?: React.ReactNode;
  background?: string;
  isLogin?: boolean;
}

const Header: React.FC<IProps> = ({ type, variant, background, isLogin = false }) => {
  const { user } = useUserStore();

  const position: any = type || "absolute";

  return (
    <Stack bg={background || "transparent"}>
      <Container maxW={"container.xl"} py={{ base: 3, md: 5 }} position={position} left={0} right={0} zIndex="2">
        <HStack w={"full"}>
          {!isLogin && (
            <>
              <HStack
                spacing={2}
                alignItems="center"
                justifyContent={"end"}
                ml="auto"
                display={{ base: "none", md: "flex" }}
              >
                {NavHeaderData.map(x => {
                  return (
                    <NavHeaderDekstop
                      name={x.name}
                      icon={x.icon}
                      child={x.child}
                      path={x.path}
                      key={x.name}
                      variant={variant}
                    />
                  );
                })}
              </HStack>
              <Box display={{ base: "block", md: "none" }}>
                <Menu closeOnSelect={false}>
                  <MenuButton as={"div"} p={0} height="auto">
                    <Box>
                      <IconBurger color={variant === "light" ? "#fff" : "#26334D"} />
                    </Box>
                  </MenuButton>
                  <MenuList
                    px={3}
                    py={0}
                    borderRadius={16}
                    border="none"
                    boxShadow={"0px 2px 15px 0px rgba(38, 51, 77, 0.10)"}
                    zIndex={2}
                  >
                    <Accordion allowToggle>
                      {NavHeaderData.map(x => {
                        return (
                          <NavHeaderMobile name={x.name} icon={x.icon} child={x.child} path={x.path} key={x.name} />
                        );
                      })}
                    </Accordion>
                  </MenuList>
                </Menu>
              </Box>
            </>
          )}
        </HStack>
      </Container>
    </Stack>
  );
};

export default Header;
