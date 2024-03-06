/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Drawer, DrawerContent, DrawerOverlay, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import React, { useEffect } from "react";

import { useProfileQuery } from "@/api/profile";
import { useSearchStore } from "@/stores/search";
import { useUserStore } from "@/stores/user";

import MobileNav from "./components/MobileNav";
import SidebarMenu from "./components/SidebarMenu";

interface IProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<IProps> = ({ children }) => {
  const { isOpen, onOpen, onToggle, onClose } = useDisclosure({ defaultIsOpen: true });
  const setUser = useUserStore(state => state.setUser);
  const { reset } = useSearchStore();
  const { data } = useProfileQuery();
  const router = useRouter();

  const [isBreakpoint] = useMediaQuery("(min-width: 48rem)");

  useEffect(() => {
    const handleRouteChange = () => {
      reset();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    !isBreakpoint ? onClose() : onOpen();
  }, [isBreakpoint]);

  useEffect(() => {
    setUser(data?.data);
  }, [data]);

  return (
    <Box minH="100vh">
      {isBreakpoint ? (
        <SidebarMenu
          onToggle={onToggle}
          w={{ base: "full", md: isOpen ? 60 : "100px" }}
          open={isOpen}
          display={{ base: "none", md: "block" }}
        />
      ) : (
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size={{ base: "xs", md: "md" }}
        >
          <DrawerOverlay />
          <DrawerContent>
            <SidebarMenu open={isOpen} onToggle={onToggle} />
          </DrawerContent>
        </Drawer>
      )}
      <MobileNav onOpen={onToggle} open={isOpen} />
      <Box
        background="url('/images/bg-verification.png')"
        minH={"100vh"}
        p={{ base: 3, md: 5 }}
        ml={{ base: 0, md: isOpen ? 60 : "100px" }}
        transition={"all 0.3s ease"}
      >
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
