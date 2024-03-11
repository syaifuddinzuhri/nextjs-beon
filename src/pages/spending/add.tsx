import type { NextPage } from "next";
import dynamic from "next/dynamic";

import createNextPage from "@/utils/createNextPage";
import DashboardLayout from "@/layouts/DashboardLayout";

const SpendingForm = dynamic(async () => await import("@/modules/spending/form"));

const SpendingAddFormPage: NextPage = () => {
  return <SpendingForm />;
};

export default createNextPage(SpendingAddFormPage, {
  layout: children => <DashboardLayout>{children}</DashboardLayout>,
});
