import { Box, Flex, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box h="650px" id="header-home">
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        height="100%"
        flexDir={"column"}
      >
        <Box className="intro" mt="20">
          <Text
            as="h1"
            textTransform={"uppercase"}
            fontWeight={"bold"}
            className="mfont"
            color="white"
            fontSize={["lg", "2xl", "3xl", "3xl"]}
            textAlign={"center"}
          >
            hey! i'm{" "}
            <Box as="span" color="#489c43" className="name">
              Emmanuel
            </Box>
          </Text>
        </Box>
        <Box
          as="hr"
          maxW="60px"
          w="full"
          border="1px solid"
          borderColor={"#316d47"}
          my="5"
        />{" "}
        <Text
          as="h1"
          textTransform={"uppercase"}
          fontWeight={"bold"}
          className="mfont"
          color="white"
          fontSize={["xl", "3xl", "4xl", "4xl"]}
          textAlign={"center"}
        >
          Creating a future for every citizen
        </Text>
      </Flex>
    </Box>
  );
}
