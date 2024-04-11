import { AppProps } from "next/app";

import "../styles/global.css";
import Menu from "../components/Menu";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen">
      <Menu />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
