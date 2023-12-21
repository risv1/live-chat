import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ModalProvider } from "@/components/recent-section/ModalContext";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </SessionProvider>
  );
}
