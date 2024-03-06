import { Spinner } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import type { FC, ReactNode } from "react";
import { useMemo } from "react";

import type { AuthShieldProps } from "@/components/auth-shield";
import { getAccessToken } from "@/utils/auth/helpers";

interface AuthGuardProps {
  children?: ReactNode;
}

const AuthShield = dynamic(
  async () => {
    const Component = await import("@/components/auth-shield");
    return Component.AuthShield;
  },
  {
    ssr: false,
  }
);

const AuthGuard: FC<AuthGuardProps> = ({ children }) => {
  const router = useRouter();
  const loginRoutes = "/login";
  const publicRoutes = [loginRoutes];
  const privateRoutes = ["/"];

  const accessToken = getAccessToken();
  const isLoggedIn = useMemo(() => !!accessToken, [accessToken]);

  const shieldConfig: AuthShieldProps<string[], string[]> = {
    router,
    isAuth: isLoggedIn,
    isLoading: false,
    LoadingComponent: <Spinner />,
    loginRoute: loginRoutes,
    publicRoutes,
    accessRoute: privateRoutes[0],
    privateRoutes,
  };

  return <AuthShield {...shieldConfig}>{children}</AuthShield>;
};

AuthGuard.defaultProps = {
  children: undefined,
};

export default AuthGuard;
