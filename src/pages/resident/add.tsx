import type { NextPage } from "next";
import dynamic from "next/dynamic";

import createNextPage from "@/utils/createNextPage";
import DashboardLayout from "@/layouts/DashboardLayout";

const ResidentFormAdd = dynamic(async () => await import("@/modules/resident/form"));

const ResidentAddFormPage: NextPage = () => {
  return <ResidentFormAdd />;
};

export default createNextPage(ResidentAddFormPage, {
  layout: children => <DashboardLayout>{children}</DashboardLayout>,
});
