import { Flex, Image, Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import NavLink from "./NavLink";

const navStyle = {
  margin: "0 5px",
  color: "darkgreen",
  fontSize: "1.2rem",
};

function NavMD(props) {
  return (
    <>
      <Link href="/">
        <a style={{ display: "flex" }}>
          <Box overflow="hidden">
            <Image src={"/images/logo.png"} w="80%" />
          </Box>
        </a>
      </Link>
      <Flex alignItems="center">
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
      </Flex>
    </>
  );
}

export default NavMD;
