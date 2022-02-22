import "../styles/index.scss";

import { AppProps } from "next/app";
import { ThemeProvider } from "../modules/ThemeProvider";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
