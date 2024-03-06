import type { BoxProps, FlexProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface SidebarProps extends BoxProps {
  open: boolean;
  onToggle: () => void;
}

export interface LinkItemProps {
  name: string;
  icon?: any;
  image?: any;
  header?: boolean;
  path?: string;
  activePath?: string;
  child?: LinkItemProps[];
}

export interface NavItemProps extends FlexProps {
  image?: any;
  icon?: any;
  children: ReactNode;
  header?: boolean;
  active?: boolean;
  path?: string;
  activePath?: string;
  child?: LinkItemProps[];
  open: boolean;
}

export interface NavHeaderType {
  name?: string;
  icon?: any;
  path?: string;
  child?: NavHeaderType[];
}
