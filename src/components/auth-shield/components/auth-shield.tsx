/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import type { ReactNode } from "react";
import React, { useEffect } from "react";

import { getAccessRoute, verifyPath } from "../libs/routes";
import type { AuthShieldProps } from "../types/props";

/**
 * 😉 The shield that every Next.js app needs
 *
 * @typeParam AuthShieldProps - {@link AuthShieldProps | see here}
 * @returns AuthShield Component
 *
 * @example
 * ```tsx
 * import { Loading } from '@/components/routes/Loading'
 * import { useAuth } from '@/hooks/auth'
 *
 * export default function MyApp({ Component, pageProps }: AppProps) {
 *  const { isAuth, isLoading } = useAuth()
 *  const router = useRouter()
 *
 *  return (
 *    <AuthShield
 *      isAuth={isAuth}
 *      isLoading={isLoading}
 *      router={router}
 *      privateRoutes={['/protected']}
 *      publicRoutes={['/']}
 *      hybridRoutes={['/products/[slug]']}
 *      LoadingComponent={<Loading />}
 *    >
 *      <Component {...pageProps} />
 *    </AuthShield>
 *   )
 * }
 *
 * ```
 * @packageDocumentation
 */

function AuthShield<PrivateRoutesList extends string[], PublicRoutesList extends string[]>({
  isAuth,
  isLoading,
  router: { pathname, replace },
  loginRoute,
  accessRoute,
  privateRoutes,
  publicRoutes,
  hybridRoutes,
  LoadingComponent,
  RBAC,
  userRole,
  children,
}: AuthShieldProps<PrivateRoutesList, PublicRoutesList> & {
  children: ReactNode;
}): JSX.Element {
  const pathIsPrivate = verifyPath(privateRoutes, pathname);
  const pathIsPublic = verifyPath(publicRoutes, pathname);
  const pathIsHybrid = verifyPath(hybridRoutes, pathname);
  const pathIsAuthorized = RBAC != null && userRole && verifyPath(RBAC[userRole].grantedRoutes, pathname);
  const access = getAccessRoute(RBAC, userRole, accessRoute);

  useEffect(() => {
    if (!pathIsHybrid) {
      if (!isAuth && !isLoading && pathIsPrivate) replace(loginRoute);
      if (isAuth && !isLoading && pathIsPublic) replace(access);
      if (!isAuth && !isLoading && !pathIsPrivate && !pathIsPublic) {
        replace(loginRoute);
      }
      if (isAuth && userRole && !isLoading && !pathIsHybrid && !pathIsAuthorized) {
        replace(access);
      }
    }
  }, [
    replace,
    userRole,
    access,
    isAuth,
    isLoading,
    loginRoute,
    pathIsPrivate,
    pathIsPublic,
    pathIsHybrid,
    pathIsAuthorized,
  ]);

  if (
    ((isLoading || !isAuth) && pathIsPrivate) ||
    ((isLoading || isAuth) && pathIsPublic) ||
    ((isLoading || userRole) && !pathIsAuthorized && !pathIsHybrid) ||
    (isLoading && pathIsHybrid) ||
    (isLoading && !isAuth && !pathIsPrivate && !pathIsPublic)
  ) {
    return <>{LoadingComponent}</>;
  }

  return <>{children}</>;
}

export default AuthShield;
