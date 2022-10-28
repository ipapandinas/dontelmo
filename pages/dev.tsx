import type { NextPage } from "next";
import Head from "next/head";

import Dev from "../components/pages/Dev/Dev";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>DEV | DON TELMO</title>
        <meta name="description" content="dontelmo's dev work" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <Dev />
    </div>
  );
};

export default Home;
