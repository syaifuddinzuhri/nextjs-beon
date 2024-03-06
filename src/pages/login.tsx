import type { NextPage } from "next";
import dynamic from "next/dynamic";

import createNextPage from "@/utils/createNextPage";
import { PublicLayout } from "../layouts";

const LoginPage = dynamic(async () => await import("@/modules/auth/Login"));

const Login: NextPage = () => {
  return <LoginPage />;
};

export default createNextPage(Login, {
  layout: children => <PublicLayout>{children}</PublicLayout>,
});
