import "../styles/globals.css";
import "../styles/notfound.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-image-lightbox/style.css";

import { Box, ChakraProvider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Navbar from "../components/nav/Navbar";
import { useEffect } from "react";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      mirror: false,
    });
    let routeChangeStart = () => NProgress.start();
    let routeChangeComplete = () => NProgress.done();

    router.events.on("routeChangeStart", routeChangeStart);
    router.events.on("routeChangeComplete", routeChangeComplete);
    router.events.on("routeChangeError", routeChangeComplete);
    return () => {
      router.events.off("routeChangeStart", routeChangeStart);
      router.events.off("routeChangeComplete", routeChangeComplete);
      router.events.off("routeChangeError", routeChangeComplete);
    };
  }, []);
  return (
    <motion.div
      key={router.route}
      initial="pageInit"
      animate="pageAnim"
      variants={{
        pageInit: {
          opacity: 0,
        },
        pageAnim: {
          opacity: 1,
        },
      }}
    >
      <ChakraProvider>
        <Navbar />
        <Box margin="auto" padding="0" overflow={"hidden"}>
          <Component {...pageProps} />
        </Box>
        <Footer />
      </ChakraProvider>
    </motion.div>
  );
}

export default MyApp;
