import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";
import "@fontsource/roboto/700.css";
import "../styles/carousel.css";
import 'react-datetime/css/react-datetime.css';

import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppContext } from "next/app";
import App from "next/app";
import { DefaultSeo } from "next-seo";
import type { ReactElement } from "react";
import React from "react";

import { theme } from "@/configs/themeConfiguration";
import { appHead } from "@/constants/app";
import type { NextAppProps } from "@/interfaces/next";
import AuthGuard from "@/modules/auth/AuthGuard";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const MyApp = ({ Component, pageProps }: NextAppProps): ReactElement => {
  const getLayout = Component?.layout ?? ((children: JSX.Element) => children);
  const page = getLayout(<Component {...pageProps} />);

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <DefaultSeo {...appHead} />
        <AuthGuard>{page}</AuthGuard>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
