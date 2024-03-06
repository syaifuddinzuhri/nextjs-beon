import React from "react";

import type {
  ComponentShieldAuthProps,
  ComponentShieldBaseProps,
  ComponentShieldProps,
  ComponentShieldRBACProps,
} from "../types/auth-shield.types";

/**
 * 🛡️ A Shield for your Components, it handles when a component shows or not based on the user's role or by a custom condition that you provide.
 *
 * @param ComponentShieldProps {@link ComponentShieldProps | see here}
 * @returns Children Components
 *
 *
 * @example
 * ```tsx
 *  // Basic Example
 *  <ComponentShield showIf={true}>
 *    <p>You are authorized</p>
 *  </ComponentShield>
 *
 *  // Fallback Example
 *  <ComponentShield showIf={false} fallback={<p>You are unauthorized</p>}>
 *    <p>You are authorized</p>
 *  </ComponentShield>
 *
 *  // RBAC Example
 *  <ComponentShield RBAC showForRole="ADMIN" userRole="ADMIN">
 *    <p>You are an ADMIN</p>
 *  </ComponentShield>
 * ```
 *
 * @packageDocumentation
 */

export function ComponentShield(props: ComponentShieldBaseProps): JSX.Element;
export function ComponentShield(props: ComponentShieldAuthProps): JSX.Element;
export function ComponentShield(props: ComponentShieldRBACProps): JSX.Element;
export function ComponentShield(props: ComponentShieldProps) {
  const { showForRole, showIf, fallback = null, RBAC, userRole, children } = props;

  if (RBAC) return <>{showForRole === userRole ? children : null}</>;
  if (showIf) return <>{children}</>;

  return <>{fallback}</>;
}
