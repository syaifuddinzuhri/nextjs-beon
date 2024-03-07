import type { NextPage } from "next";
import dynamic from "next/dynamic";

import createNextPage from "@/utils/createNextPage";
import DashboardLayout from "@/layouts/DashboardLayout";

const Resident = dynamic(async () => await import("@/modules/resident/index"));

const ResidentPage: NextPage = () => {
  return <Resident />;
};

export default createNextPage(ResidentPage, {
  layout: children => <DashboardLayout>{children}</DashboardLayout>,
});
