import { deleteCookie, getCookie, setCookie } from "cookies-next";
import jwt from "jsonwebtoken";
import router from "next/router";

import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants/auth";

import type { UserInterface } from "../auth-types";

const getDomainNameSharedCookies = () => {
  const { host } = window.location;
  const [, ...domain] = host.split(".");
  return `.${domain.join(".")}`;
};

const cookiesOptions = () => {
  const domain = getDomainNameSharedCookies();
  if (process.env.NODE_ENV === "production") {
    return { domain };
  }
  return {};
};

export function onLogin(accessToken: string, refreshToken: string): void {
  setCookie(ACCESS_TOKEN, accessToken, { ...cookiesOptions() });
  setCookie(REFRESH_TOKEN, refreshToken, { ...cookiesOptions() });
  router.push("/");
}

export function onLogout(): void {
  deleteCookie(ACCESS_TOKEN, { ...cookiesOptions() });
  deleteCookie(REFRESH_TOKEN, { ...cookiesOptions() });
  router.replace("/login");
}

export function getUser(): UserInterface | null {
  if (getCookie(ACCESS_TOKEN)) {
    const token = getCookie(ACCESS_TOKEN)?.toString() ?? "";
    return jwt.decode(token, { json: true });
  }
  return null;
}

export const getAccessToken = (): string => getCookie(ACCESS_TOKEN)?.toString() ?? "";

export const getRefreshToken = (): string => getCookie(REFRESH_TOKEN)?.toString() ?? "";
