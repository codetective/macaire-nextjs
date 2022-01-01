import { IconButton, useDisclosure, Box, Image } from "@chakra-ui/react";
import Link from "next/link";

import { BiMenuAltLeft } from "react-icons/bi";
import NavSMDrawer from "./NavSMDrawer";
const navStyle = {
  margin: "0 5px",
};

function NavSM(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <NavSMDrawer isOpen={isOpen} onClose={onClose} />

      <Link href="/">
        <a style={{ display: "flex" }}>
          <Box overflow="hidden">
            <Image src={"/images/logo.png"} w="80%" />
          </Box>
        </a>
      </Link>
      <IconButton
        onClick={onOpen}
        bg="transparent"
        aria-label="Go to cart"
        _focus={{
          boxShadow: "0",
        }}
        icon={
          <span
            style={{
              fontSize: "1.8rem",
            }}
          >
            <BiMenuAltLeft />
          </span>
        }
      />
    </>
  );
}

export default NavSM;
