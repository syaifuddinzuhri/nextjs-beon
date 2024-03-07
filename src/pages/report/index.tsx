import type { NextPage } from "next";
import dynamic from "next/dynamic";

import createNextPage from "@/utils/createNextPage";
import DashboardLayout from "@/layouts/DashboardLayout";

const Report = dynamic(async () => await import("@/modules/report/index"));

const ReportPage: NextPage = () => {
  return <Report />;
};

export default createNextPage(ReportPage, {
  layout: children => <DashboardLayout>{children}</DashboardLayout>,
});
