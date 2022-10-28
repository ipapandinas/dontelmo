import "../styles/fonts.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";

import Clock from "../components/base/Clock/Clock";
import Footer from "../components/base/Footer/Footer";
import Header from "../components/base/Header/Header";
import SideMenu from "../components/base/SideMenu/SideMenu";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SideMenu />
      <Clock />

      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
