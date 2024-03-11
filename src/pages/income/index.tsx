import type { NextPage } from "next";
import dynamic from "next/dynamic";

import createNextPage from "@/utils/createNextPage";
import DashboardLayout from "@/layouts/DashboardLayout";

const Income = dynamic(async () => await import("@/modules/income/index"));

const IncomePage: NextPage = () => {
  return <Income />;
};

export default createNextPage(IncomePage, {
  layout: children => <DashboardLayout>{children}</DashboardLayout>,
});
