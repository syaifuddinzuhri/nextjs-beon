import type { LinkItemProps, NavHeaderType } from "@/layouts/types";
import {
  IconAffiliation,
  IconCoin,
  IconDollar,
  IconHistory,
  IconHistoryTime,
  IconHot,
  IconInformationSquare,
  IconListNumber,
  IconMutation,
  IconOrder,
  IconPayment,
  IconPhone,
  IconQuestion,
  IconService,
  IconSetting,
  IconShare,
  IconTranslate,
  IconTutorial,
  IconUser,
  IconWallet,
  IconWhatsApp,
} from "../assets";

export const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: IconHistoryTime, activePath: "/", path: "/" },
  { name: "Penghuni", icon: IconUser, activePath: "/penghuni", path: "/penghuni" },
  { name: "Rumah", icon: IconHot, activePath: "/rumah", path: "/rumah" },
  { name: "Jenis Pembayaran", icon: IconPayment, activePath: "/payment-type", path: "/payment-type" },
  { name: "Report", icon: IconService, activePath: "/report", path: "/report" },
];

export const LinkItemsSecond: Array<LinkItemProps> = [
  { name: "FAQ", icon: IconQuestion, activePath: "/faq", path: "/faq" },
  { name: "Tutorial", icon: IconTutorial, activePath: "/tutorial", path: "/tutorial" },
  {
    name: "Media Sosial",
    icon: IconShare,
    activePath: "/medsos",
    path: "#",
    child: [
      { name: "YouTube", image: "/images/social/youtube.png", activePath: "/youtube", path: "/youtube" },
      { name: "Instagram", image: "/images/social/instagram.png", activePath: "/instagram", path: "/instagram" },
    ],
  },
];

export const NavHeaderData: Array<NavHeaderType> = [
  {
    name: "Contact Us",
    child: [{ name: "WhatsApp", icon: IconWhatsApp }],
  },
  {
    name: "FAQ",
    icon: IconQuestion,
    child: [],
  },
  {
    name: "Setting",
    icon: IconSetting,
    child: [
      {
        name: "Bahasa : ",
        icon: IconTranslate,
        child: [{ name: "Indonesia" }, { name: "Inggris" }],
      },
      {
        name: "Kurs : ",
        icon: IconDollar,
        child: [{ name: "USD" }, { name: "Rupiah" }],
      },
    ],
  },
];
