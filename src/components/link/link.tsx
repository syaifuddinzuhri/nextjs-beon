import { Text } from "@chakra-ui/react";
import NextLink from "next/link";
import type { UrlObject } from "url";

declare type Url = string | UrlObject;

interface IProps {
  href: Url;
  children: React.ReactNode;
  disabled?: boolean;
}

const Link: React.FC<IProps> = ({ href, children, disabled }) => {
  if (disabled) {
    return <Text opacity={0.5}>{children}</Text>;
  }

  return <NextLink href={href}>{children}</NextLink>;
};

export default Link;
