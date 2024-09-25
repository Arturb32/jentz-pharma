import { AppProps } from "next/app";

import "../styles/global.css";
import Menu from "../components/Menu";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Menu />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
