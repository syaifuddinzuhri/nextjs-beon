import type { LinkItemProps } from "@/layouts/types";
import { IconHistoryTime, IconHot, IconPayment, IconService, IconUser } from "../assets";

export const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: IconHistoryTime, activePath: "/", path: "/" },
  { name: "Penghuni", icon: IconUser, activePath: "/resident", path: "/resident" },
  { name: "Rumah", icon: IconHot, activePath: "/house", path: "/house" },
  { name: "Jenis Pembayaran", icon: IconPayment, activePath: "/payment-type", path: "/payment-type" },
  { name: "Report", icon: IconService, activePath: "/report", path: "/report" },
];
