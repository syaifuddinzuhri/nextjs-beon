import type { RoleAccess } from "../types/props";

export function verifyPath(routes: string[] | undefined, uri: string): boolean | undefined {
  return routes?.some(route => route === uri);
}

export function getAccessRoute(
  RBAC: RoleAccess<string[]> | undefined,
  userRole: string | undefined,
  accessRoute: string | undefined
): string {
  if (typeof accessRoute !== "undefined") return accessRoute;

  if (RBAC != null && userRole) return RBAC[userRole].accessRoute;

  return "/";
}
