import { Flex, useBreakpointValue } from "@chakra-ui/react";
import NavMD from "./NavMD";
import NavSM from "./NavSM";

export default function Navbar() {
  const navScreens = useBreakpointValue({ base: <NavSM />, md: <NavMD /> });

  return (
    <Flex
      height="75px"
      boxShadow="md"
      alignItems="center"
      justifyContent="center"
      position="sticky"
      top="0"
      zIndex="10"
      backgroundColor="white"
      className="navbar"
      px="2rem"
      m="auto"
    >
      <Flex
        width="full"
        alignItems="center"
        justifyContent="space-between"
        maxWidth="1366px"
      >
        {navScreens}
      </Flex>
    </Flex>
  );
}
