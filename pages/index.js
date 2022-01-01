import Head from "next/head";
import Header from "../components/header/Header";
import IntroSection from "../components/homepage/IntroSection";
import { Box } from "@chakra-ui/react";
import Priorities from "../components/homepage/Priorities";
import About from "../components/homepage/About";
import Projects from "../components/homepage/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Macaire Campaign site! </title>
        <meta
          name="description"
          content="Macaire believes in popular participation. Get all details about him and information on how to participate directly on this site."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Box maxWidth="1366px" margin="auto" padding="0" overflow="hidden">
          <IntroSection />
        </Box>
        <Priorities />
        <About />
        <Projects />
      </main>
    </>
  );
}
