import React from "react";
import { AppProps } from "next/app";

import "../styles/global.css";
import Menu from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Menu />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
