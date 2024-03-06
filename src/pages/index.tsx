import type { NextPage } from "next";
import dynamic from "next/dynamic";

import createNextPage from "@/utils/createNextPage";
import { DashboardLayout } from "../layouts";

const Home = dynamic(async () => await import("@/modules/dashboard/Index"));

const HomePage: NextPage = () => {
  return <Home />;
};

export default createNextPage(HomePage, {
  layout: children => <DashboardLayout>{children}</DashboardLayout>,
});
