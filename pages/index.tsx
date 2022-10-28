import type { NextPage } from "next";
import Head from "next/head";

import Home from "../components/pages/Home/Home";

const Homepage: NextPage = () => {
  return (
    <>
      <Head>
        <title>DON TELMO WEB INVASION EXP.</title>
        <meta
          name="description"
          content="don telmo's web invasion experience"
        />
        <link rel="icon" href="/icon.png" />
      </Head>

      <Home />
    </>
  );
};

export default Homepage;
