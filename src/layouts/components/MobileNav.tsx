import type { FlexProps } from "@chakra-ui/react";
import { Avatar, Box, Button, Flex, HStack, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

import { useUserStore } from "@/stores/user";
import { removeAccessToken } from "@/utils/auth/helpers";
import { IconBurger, IconNews, IconNotification, IconPremium } from "@/assets/index";

interface MobileProps extends FlexProps {
  open: boolean;
  onOpen: () => void;
}

const MobileNav: React.FC<MobileProps> = ({ onOpen, open, ...rest }) => {
  const router = useRouter();
  const user = useUserStore(state => state.user);

  const [news, setNews] = useState<boolean>(false);
  const [notification, setNotification] = useState<boolean>(false);

  return (
    <Flex
      ml={{ base: 0, md: !open ? "100px" : 60 }}
      px={{ base: 4, md: 5 }}
      py={{ base: 3, md: 4 }}
      alignItems="center"
      bg={"white"}
      borderBottomWidth="1px"
      borderBottomColor={"gray.95"}
      justifyContent={{ base: "space-between" }}
      position={"sticky"}
      top={0}
      zIndex={"1000"}
      {...rest}
    >
      <Box display={{ base: "block", md: "none" }} cursor={"pointer"} onClick={onOpen}>
        <IconBurger width={24} height={24} color="#26334D" />
      </Box>
      <HStack alignItems={"center"} gap={{ base: 2, md: 4 }} ml="auto">
        <Menu>
          <MenuButton transition="all 0.3s" _focus={{ boxShadow: "none" }}>
            <HStack gap={2}>
              <Avatar
                size={"sm"}
                name={user?.email}
                width={{ base: 10, md: 14 }}
                height={{ base: 10, md: 14 }}
                textStyle={{ base: "xs", md: "p" }}
                fontWeight={{ base: 900, md: 900 }}
                background="rgba(51, 97, 255, 0.10)"
                color={{ base: "blue", md: "blue" }}
                src={""}
              />
              <Text color="#4D5E80" textStyle={"h4"} fontWeight={500} display={{ base: "none", md: "block" }}>
                Hello,&nbsp;
                <Text as="span" color="#3361FF" fontWeight={700}>
                  {user?.name}
                </Text>
              </Text>
            </HStack>
          </MenuButton>
          <MenuList
            p={0}
            borderRadius={16}
            boxShadow="0px 2px 10px 0px rgba(38, 51, 77, 0.15)"
            border={"none"}
            textStyle="p"
            fontWeight={500}
          >
            <MenuItem
              p={3}
              borderBottom={"none"}
              borderBottomRadius={16}
              borderTopRadius={0}
              onClick={() => {
                removeAccessToken();
                router.push("/login");
              }}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};

export default MobileNav;
