import { MantineProvider } from "@mantine/core";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "src/utils/api";
import MyLayout from "./_layout";

import "src/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <MyLayout>
          <Component {...pageProps} />
        </MyLayout>
      </MantineProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
