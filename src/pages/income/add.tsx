import type { NextPage } from "next";
import dynamic from "next/dynamic";

import createNextPage from "@/utils/createNextPage";
import DashboardLayout from "@/layouts/DashboardLayout";

const IncomeForm = dynamic(async () => await import("@/modules/income/form"));

const IncomeFormPage: NextPage = () => {
  return <IncomeForm />;
};

export default createNextPage(IncomeFormPage, {
  layout: children => <DashboardLayout>{children}</DashboardLayout>,
});
