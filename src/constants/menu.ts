import type { LinkItemProps } from "@/layouts/types";
import { IconHistoryTime, IconHot, IconPayment, IconService, IconServiceDetail, IconUser } from "../assets";

export const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: IconServiceDetail, activePath: "/", path: "/" },
  { name: "Penghuni", icon: IconUser, activePath: "/resident", path: "/resident" },
  { name: "Rumah", icon: IconHot, activePath: "/house", path: "/house" },
  { name: "Jenis Pembayaran", icon: IconPayment, activePath: "/payment-type", path: "/payment-type" },
  { name: "Pemasukan", icon: IconPayment, activePath: "/income", path: "/income" },
  { name: "Pengeluaran", icon: IconPayment, activePath: "/spending", path: "/spending" },
  { name: "Report", icon: IconService, activePath: "/report", path: "/report" },
];
