import type { NextPage } from "next";
import dynamic from "next/dynamic";

import createNextPage from "@/utils/createNextPage";
import DashboardLayout from "@/layouts/DashboardLayout";

const PaymentType = dynamic(async () => await import("@/modules/payment-type/index"));

const PaymentTypePage: NextPage = () => {
  return <PaymentType />;
};

export default createNextPage(PaymentTypePage, {
  layout: children => <DashboardLayout>{children}</DashboardLayout>,
});
