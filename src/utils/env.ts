/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import getConfig from "next/config";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export function getServerRuntimeEnv(key: string, defaultValue?: string): string {
  return serverRuntimeConfig[key] || defaultValue;
}

export default function getRuntimeEnv(key: string, defaultValue?: string): string {
  return publicRuntimeConfig[key] || defaultValue;
}
