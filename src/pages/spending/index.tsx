import type { NextPage } from "next";
import dynamic from "next/dynamic";

import createNextPage from "@/utils/createNextPage";
import DashboardLayout from "@/layouts/DashboardLayout";

const Spending = dynamic(async () => await import("@/modules/spending/index"));

const SpendingPage: NextPage = () => {
  return <Spending />;
};

export default createNextPage(SpendingPage, {
  layout: children => <DashboardLayout>{children}</DashboardLayout>,
});
