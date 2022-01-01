import Link from "next/link";
import Head from "next/head";
import {
  Box,
  SimpleGrid,
  List,
  ListIcon,
  ListItem,
  Stack,
} from "@chakra-ui/layout";
import { Flex, Image, useMediaQuery } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { FaBullseye } from "react-icons/fa";

export default function About() {
  const [isLargerThan914] = useMediaQuery("(min-width: 914px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 601px");
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <Head>
        <title>About Emmanuel Ukpong</title>
        <meta
          name="description"
          content=" Emmanuel believes in popular participation. Get all details about him and information on how to participate directly on this site."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box pt="2rem">
        <Text
          as="h1"
          textTransform={"capitalize"}
          fontWeight={"bolder"}
          className="mfont"
          color="#316d47"
          fontSize={["4xl", "4xl", "5xl", "5xl"]}
          textAlign={"center"}
          pt="10"
        >
          HON. EMMANUEL UKPONG-UDO
        </Text>
        <Text
          as="h6"
          textTransform={"capitalize"}
          fontWeight={"bold"}
          className="mfont"
          color="#499d44"
          fontSize={["md", "md", "lg", "lg"]}
          textAlign={"center"}
          pb="10"
        >
          Ikono/ Ini Federal Constituency
        </Text>
        <Stack spacing="0">
          <Flex
            justify="space-between"
            flexDir={["column", "column", "row", "row"]}
            align="center"
          >
            <Box w={["100%", "100%", "50%", "50%"]}>
              <Image
                mx="auto"
                src="/images/macairepic.jpg"
                width="100%"
                height="100%"
                maxH="450px"
                objectFit="cover"
                objectPosition="top"
              />
            </Box>
            <Box px={10} w={["100%", "100%", "50%", "50%"]} pb={[10, 10, 0, 0]}>
              <Text
                as="h1"
                textTransform={"capitalize"}
                fontWeight={"bolder"}
                className="mfont"
                color="#499d44"
                fontSize={["4xl", "4xl", "5xl", "5xl"]}
                textAlign={"left"}
                pt="10"
              >
                Previous offices
              </Text>
              <List className="ofont" fontSize="18px" pt={2}>
                <ListItem mb="5">
                  <ListIcon color="green.500" fontSize="25px">
                    <FaBullseye />
                  </ListIcon>
                  Senior Special Assistant (SSA) to Honourable Minister of
                  Lands, Housing and Urban Development.
                  <br /> <i>2014 - May 2015</i>
                </ListItem>
                {/*  */}
                <ListItem mb="5">
                  <ListIcon color="green.500" fontSize="25px">
                    <FaBullseye />
                  </ListIcon>
                  Political Leader of Ikono L.G.A, AkwaIbom State.
                  <br /> <i>2015 to date</i>
                </ListItem>
              </List>
              <Text fontSize="18px" className="ofont" color="gray.600">
                {" "}
                Being a leader is beyond titles, it's more about possessing
                qualities to lead, qualities that Emmanuel Ukpong-Udo has
                displayed while serving in these positions. He has won many
                awards for his exemplary service.
              </Text>
            </Box>
          </Flex>
          {/*  */}

          <Flex
            justify="space-between"
            flexDir={["column-reverse", "column-reverse", "row", "row"]}
            align="center"
          >
            <Box w={["100%", "100%", "50%", "50%"]} px="10" pb={[10, 10, 0, 0]}>
              <Text
                as="h1"
                textTransform={"capitalize"}
                fontWeight={"bolder"}
                className="mfont"
                color="#499d44"
                fontSize={["4xl", "4xl", "5xl", "5xl"]}
                textAlign={"left"}
                pt="10"
              >
                Awards & Honors
              </Text>
              <List className="ofont" fontSize="18px" pt={2}>
                <ListItem mb="5">
                  <ListIcon color="green.500" fontSize="25px">
                    <FaBullseye />
                  </ListIcon>
                  Chartered Member, Chartered Quality Institute (CQI), United
                  Kingdom
                </ListItem>
                {/*  */}
                <ListItem mb="5">
                  <ListIcon color="green.500" fontSize="25px">
                    <FaBullseye />
                  </ListIcon>
                  Fellow, International Institute of Risk and Safety Management
                  (IIRSM), United Kingdom
                </ListItem>
                <ListItem mb="5">
                  <ListIcon color="green.500" fontSize="25px">
                    <FaBullseye />
                  </ListIcon>
                  IRCA Certificated Lead QMS Auditor, United Kingdom
                </ListItem>
                <ListItem mb="5">
                  <ListIcon color="green.500" fontSize="25px">
                    <FaBullseye />
                  </ListIcon>
                  IOSH Certified Trainer (Managing and Working Safely), United
                  Kingdom
                </ListItem>
                <ListItem mb="5">
                  <ListIcon color="green.500" fontSize="25px">
                    <FaBullseye />
                  </ListIcon>
                  Best HSE Manager Nigerian Safety Award for Excellence Hall of
                  Fame (9jaSAFE Award) 2017
                </ListItem>
              </List>
            </Box>
            <Box w={["100%", "100%", "50%", "50%"]}>
              <Image
                mx="auto"
                src="/images/macairepeople.jpg"
                width="100%"
                height="100%"
                maxH="450px"
                objectFit="cover"
                objectPosition="top"
              />
            </Box>
          </Flex>
          {/*  */}

          <Flex
            justify="space-between"
            flexDir={["column", "column", "row", "row"]}
            align="center"
          >
            {" "}
            <Box w={["100%", "100%", "50%", "50%"]}>
              <Image
                mx="auto"
                src="/images/philantropist.jpg"
                width="100%"
                height="100%"
                maxH="450px"
                objectFit="cover"
                objectPosition="top"
              />
            </Box>
            <Box w={["100%", "100%", "50%", "50%"]} px="10" pb={[10, 10, 0, 0]}>
              <Text
                as="h1"
                textTransform={"capitalize"}
                fontWeight={"bolder"}
                className="mfont"
                color="#499d44"
                fontSize={["4xl", "4xl", "5xl", "5xl"]}
                textAlign={"left"}
                pt="10"
                pb={2}
              >
                Lifestyle & Philantropy
              </Text>

              <Text fontSize="18px" className="ofont" color="gray.600">
                {" "}
                Emmanuel Ukpong-Udo is a philantropist at heart and finds
                fulfilment in sharing in the joys of people of his constituency
                at his ancestral home, Ikot Akpa Edet Ndiya in Ikono Local
                Government Area.
              </Text>
              <br />
              <Text fontSize="18px" className="ofont" color="gray.600">
                {" "}
                Emmanuel Ukpong-Udo has initiated and completed a number of
                philanthropic and social welfare projects in Ikono L.G.A. and
                Akwa Ibom State.
              </Text>
            </Box>
          </Flex>
        </Stack>
      </Box>
    </>
  );
}
