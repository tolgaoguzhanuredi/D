import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>D-O-G-G HUB</title>
        <meta
          name="description"
          content="D-O-G-G HUB"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
