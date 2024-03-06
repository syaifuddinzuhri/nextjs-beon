import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";
import React from "react";

interface IProps {
  children: ReactNode;
}

const PublicLayout: React.FC<IProps> = ({ children }) => {
  return (
    <Box minH="100vh" background="url('/images/bg-verification.png')">
      {children}
    </Box>
  );
};

export default PublicLayout;
