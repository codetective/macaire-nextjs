import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import NavLink from "./NavLink";
const navStyle = {
  margin: "5px 0",
  padding: "10px 1.5rem",
  display: "block",
  fontSize: "1.2rem",
};
function NavSMDrawer(props) {
  return (
    <Drawer placement="left" onClose={props.onClose} isOpen={props.isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className="rfont" borderBottomWidth="1px">
            Menu
          </DrawerHeader>
          <DrawerBody padding={0}>
            <NavLink href="/" style={navStyle} linkClass="link-md">
              <Text className="afont">Home</Text>
            </NavLink>

            <NavLink href="/about" style={navStyle} linkClass="link-md">
              <Text className="afont" display="block">
                About
              </Text>
            </NavLink>
            <NavLink href="/projects" style={navStyle} linkClass="link-md">
              <Text className="afont">Projects</Text>
            </NavLink>

            <NavLink href="/contact" style={navStyle} linkClass="link-md">
              <Text className="afont">Contact</Text>
            </NavLink>
          </DrawerBody>
          <DrawerFooter>
            <Link
              href="/"
              style={{ display: "block", width: "100%", textAlign: "center" }}
              href="/"
            >
              <a style={{ display: "block", width: "100%" }}>
                <Flex width="100%" textAlign="center" justifyContent="center">
                  <Box overflow="hidden">
                    <Image src={"/images/logo.png"} w="79%" />
                  </Box>
                </Flex>
              </a>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}

export default NavSMDrawer;
