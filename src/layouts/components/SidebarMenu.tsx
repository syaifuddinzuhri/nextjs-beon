import { Box, HStack, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import type { CSSObject } from "@emotion/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

import { IconClose, IconCloseSidebar, IconLogout } from "@/assets/index";
import { LinkItems, LinkItemsSecond } from "@/constants/menu";

import type { SidebarProps } from "../types";
import NavItem from "./NavItem";
import NavItemSecond from "./NavItemSecond";
import ModalMessage from "@/components/modal/ModalMessage";
import { removeAccessToken } from "@/utils/auth/helpers";

const SidebarMenu = ({ onToggle, open, ...rest }: SidebarProps) => {
  const router = useRouter();
  const [confirm, setConfirm] = useState<boolean>(false);
  const [isBreakpoint] = useMediaQuery("(min-width: 48rem)");

  const scrollMenuStyle: CSSObject = {
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  };

  const logout = () => {
    removeAccessToken();
    router.push("/login");
  };

  return (
    <Box
      transition="0.3s ease"
      bg={"white"}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      flexDir={"column"}
      {...rest}
    >
      <HStack gap={0} h="20" alignItems="center" p={4} justifyContent="space-between">
        <HStack align="center" gap={1} py={2}>
          {open && (
            <Text fontWeight={700} fontSize={"20px"} lineHeight="20px" color={"primary.500"}>
              Beon App
            </Text>
          )}
        </HStack>
        <Box
          onClick={onToggle}
          cursor={"pointer"}
          transform={open ? "rotate(0deg)" : "rotate(180deg)"}
          transition="0.3s ease"
        >
          {isBreakpoint && <IconCloseSidebar />}
          {!isBreakpoint && <IconClose width={24} height={24} />}
        </Box>
      </HStack>
      <Box borderTop={"1px solid #000000"} opacity="0.05" mx={4} />
      <Box overflowY={"auto"} maxH={"calc(100% - 80px)"} px={4}>
        <Stack flex={1} css={scrollMenuStyle} py={4} gap={3} borderBottom={"1px solid #0000000D"}>
          {LinkItems.map(link => (
            <NavItem
              fontSize={"sm"}
              key={link.name}
              icon={link.icon}
              image={link.image}
              header={link.header}
              activePath={link.activePath}
              path={link.path}
              child={link.child}
              justifyContent={open ? "normal" : "center"}
              open={open}
            >
              {open && <Box dangerouslySetInnerHTML={{ __html: link.name }} />}
            </NavItem>
          ))}
          <NavItem
            fontSize={"sm"}
            icon={IconLogout}
            onClick={() => setConfirm(true)}
            mt={1}
            justifyContent={open ? "normal" : "center"}
            open={open}
          >
            {open && "Log Out"}
          </NavItem>
        </Stack>
      </Box>

      <ModalMessage
        image="/images/notification/logout.png"
        title="Wait!"
        description="Apakah kamu ingin Keluar?"
        button1="Ya"
        button2="Tidak"
        open={confirm}
        type="row"
        onClose={() => setConfirm(false)}
        onClick1={logout}
        onClick2={() => setConfirm(false)}
      />
    </Box>
  );
};

export default SidebarMenu;
