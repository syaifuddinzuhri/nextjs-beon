import type { NextPage } from "next";
import dynamic from "next/dynamic";

import createNextPage from "@/utils/createNextPage";
import DashboardLayout from "@/layouts/DashboardLayout";

const ResidentFormEdit = dynamic(async () => await import("@/modules/resident/form"));

const ResidentFormEditPage: NextPage = () => {
  return <ResidentFormEdit />;
};

export default createNextPage(ResidentFormEditPage, {
  layout: children => <DashboardLayout>{children}</DashboardLayout>,
});
