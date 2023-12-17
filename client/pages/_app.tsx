import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ModalProvider } from "@/components/recent-section/ModalContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  );
}
