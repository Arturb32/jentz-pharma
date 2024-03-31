import React from "react";
import { AppProps } from "next/app";

import "../styles/global.css";
import Menu from "../components/Menu";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
