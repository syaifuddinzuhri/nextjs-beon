import type { NextPage } from "next";
import dynamic from "next/dynamic";

import createNextPage from "@/utils/createNextPage";
import DashboardLayout from "@/layouts/DashboardLayout";

const House = dynamic(async () => await import("@/modules/house/index"));

const HousePage: NextPage = () => {
  return <House />;
};

export default createNextPage(HousePage, {
  layout: children => <DashboardLayout>{children}</DashboardLayout>,
});
