import type { NextPage, NextPageProps } from "@/interfaces/next";

/**
 * Helper function to create next pages.
 */
export default function createNextPage<P extends NextPage>(page: P, opts: NextPageProps = {}): P & NextPageProps {
  return Object.assign(page, opts);
}
