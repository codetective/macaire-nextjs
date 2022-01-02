import Link from "next/link";
import Head from "next/head";
import {
  Box,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
} from "@chakra-ui/layout";
import { Flex, Image, useMediaQuery } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { FaBullseye } from "react-icons/fa";

export default function Manifesto() {
  const [isLargerThan914] = useMediaQuery("(min-width: 914px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 601px");
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <Head>
        <title>Manifesto | Emmanuel Ukpong Campaign</title>
        <meta
          name="description"
          content="Emmanuel Ukpong manifesto for 2023 is all encompassing, incorporating every citizen in his plan for good governance."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box padding="2rem">
        <Heading
          id="about-page-header"
          py={4}
          pb={4}
          as="h2"
          sx={{
            fontFamily: "Montserrat",
            fontSize: isSmallerThan600 ? "30px" : "48px",
            display: "flex",
            flexWrap: "wrap",
          }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text mr={2} ml={2} color="green.500">
            Emmanuel's
          </Text>
          <Text> Manifesto</Text>
        </Heading>
        <Stack pt="8">
          <Flex
            justifyContent="space-between"
            flexDir={{ base: "column", md: "row" }}
            mb={5}
            height="fit-content"
            id="education"
          >
            <Box width={{ base: "100%", md: "40%" }} mb={3}>
              <Image
                mx="auto"
                src="/images/ed.jpg"
                width="100%"
                height="100%"
                maxH="450px"
                objectFit="cover"
                objectPosition="top"
              />
            </Box>
            <Box
              pl={{ base: "0", md: "1.5rem" }}
              width={{ base: "100%", md: "60%" }}
            >
              <Text fontSize="30px" fontWeight="semi-bold" className="mfont">
                Education
              </Text>
              <Text fontSize="18px" className="ofont about-page-content">
                Education builds a nation, therefore, it’s imperative to improve
                this sector. It would be insincerity to say the educational
                system in the state is okay. The curriculum is outdated and the
                infrastructures is nothing to write home about especially in
                government owned schools and institutions. Then there are
                thousands of children not in school even when education has been
                made free in Akwa-Ibom state.
              </Text>
              <br />
              <Text fontSize="18px" className="ofont about-page-content">
                The children are the leaders of tomorrow, if they are not
                trained well and right, will there be hope for the country?
                Possible solutions that can savage the educational sector that
                my government will work towards is to make sure funds are
                available and some basic needs like books, uniforms, etc, will
                be made available to support the children to go to school.
              </Text>
            </Box>
          </Flex>

          <Flex
            mb={5}
            justifyContent="space-between"
            flexDir={{ base: "column", md: "row-reverse" }}
            height="fit-content"
            id="povertyAlleviation"
          >
            <Box width={{ base: "100%", md: "40%" }} mb={3}>
              <Image
                mx="auto"
                src="/images/pa.jpg"
                width="100%"
                height="100%"
                maxHeight="450px"
                objectFit="cover"
                objectPosition="top"
              />
            </Box>

            <Box
              pr={{ base: "0", md: "1.5rem" }}
              width={{ base: "100%", md: "60%" }}
              className="mfont"
            >
              <Text fontSize="30px" fontWeight="semi-bold" className="mfont">
                Poverty Alleviation
              </Text>
              <Text fontSize="18px" className="ofont">
                One of the major reasons poverty is in the land is unemployment.
                Unemployment in the nation is very high. According to the
                National Bureau of Statistics as at 2020, data shows that about
                21.7 million Nigerians are unemployed of which 13.9 million are
                youth. An increase in youth unemployment in any nation will mean
                an increase in poverty which leads to insecurity and crime.
              </Text>

              <br />
              <Text fontSize="18px" className="ofont ">
                To curb this there has to be creation of more jobs. But looking
                critically at the issue of unemployment, you’ll find out that a
                lot of the unemployed citizens, especially the youth don’t have
                the necessary skills and education to hold a job. To solve this,
                while jobs are being created, people should be trained on some
                technical skills, vocational skills and the entrepreneurial
                skills. This way they are employable.
              </Text>
            </Box>
          </Flex>

          <Flex
            justifyContent="space-between"
            flexDir={{ base: "column", md: "row" }}
            mb={5}
            height="fit-content"
            id="electricity"
          >
            <Box width={{ base: "100%", md: "40%" }} mb={3}>
              <Image
                mx="auto"
                src="/images/e.jpg"
                width="100%"
                height="100%"
                maxH="450px"
                objectFit="cover"
                objectPosition="top"
              />
            </Box>
            <Box
              pl={{ base: "0", md: "1.5rem" }}
              width={{ base: "100%", md: "60%" }}
            >
              <Text fontSize="30px" fontWeight="semi-bold" className="mfont">
                Electricity
              </Text>
              <Text fontSize="18px" className="ofont about-page-content">
                Electricity is one of the basic needs a government should
                provide for its citizens but some communities can’t boast of
                steady light. While some areas have forgotten how it feels to
                have light in the community. It’s worst for business owners who
                now have to find alternatives to have light and run their
                businesses.
              </Text>
              <br />
              <Text fontSize="18px" className="ofont about-page-content">
                My administration will tackle this and solve this problem. Once
                solved business owners get to have more profit and the community
                get to enjoy steady light.
              </Text>
            </Box>
          </Flex>

          <Flex
            justifyContent="space-between"
            flexDir={{ base: "column", md: "row-reverse" }}
            mb={5}
            height="fit-content"
            id="womenParticipation"
          >
            <Box width={{ base: "100%", md: "40%" }} mb={3}>
              <Image
                mx="auto"
                src="/images/wp.jpg"
                width="100%"
                height="100%"
                maxH="450px"
                objectFit="cover"
                objectPosition="top"
              />
            </Box>
            <Box
              pr={{ base: "0", md: "1.5rem" }}
              width={{ base: "100%", md: "60%" }}
            >
              <Text fontSize="30px" fontWeight="semi-bold" className="mfont">
                Women Participation
              </Text>
              <Text fontSize="18px" className="ofont about-page-content">
                The role of women in community development cannot be overlooked.
                Starting from the homes, they play a great impact by being
                training the children who are the future of the community.
              </Text>
              <br />
              <Text fontSize="18px" className="ofont about-page-content">
                Women will be offered a platform to air their personal views on
                policies affecting them. o enjoy steady light.
              </Text>
            </Box>
          </Flex>

          <Flex
            justifyContent="space-between"
            flexDir={{ base: "column", md: "row" }}
            mb={5}
            height="fit-content"
            id="communalHealth"
          >
            <Box width={{ base: "100%", md: "40%" }} mb={3}>
              <Image
                mx="auto"
                src="/images/ch.jpg"
                width="100%"
                height="100%"
                maxH="450px"
                objectFit="cover"
                objectPosition="top"
              />
            </Box>
            <Box
              pl={{ base: "0", md: "1.5rem" }}
              width={{ base: "100%", md: "60%" }}
            >
              <Text fontSize="30px" fontWeight="semi-bold" className="mfont">
                Communal Health
              </Text>
              <Text fontSize="18px" className="ofont about-page-content">
                Everyone in the community is entitled to good healthcare. This
                we will do by identifying top public health concern, craft out a
                workable plan and make sure the community have access to medical
                services, even in emergency situation.
              </Text>
              <br />
              <Text fontSize="18px" className="ofont about-page-content">
                My administration will tackle this and solve this problem, no
                one should lose their life due to bad healthcare services.
              </Text>
            </Box>
          </Flex>

          <Flex
            justifyContent="space-between"
            flexDir={{ base: "column", md: "row-reverse" }}
            mb={5}
            height="fit-content"
            id="youthInvolvement"
          >
            <Box width={{ base: "100%", md: "40%" }} mb={3}>
              <Image
                mx="auto"
                src="/images/yt.jpg"
                width="100%"
                height="100%"
                maxH="450px"
                objectFit="cover"
                objectPosition="top"
              />
            </Box>
            <Box
              pr={{ base: "0", md: "1.5rem" }}
              width={{ base: "100%", md: "60%" }}
            >
              <Text fontSize="30px" fontWeight="semi-bold" className="mfont">
                Youth Involvement
              </Text>
              <Text fontSize="18px" className="ofont about-page-content">
                The youth are the future leaders of tomorrow. The youth are
                considered the engine room and life of the any community and it
                is important they are carried along in everything we will be
                doing which will provide them the opportunity to contribute to
                the community development.
              </Text>
              <br />
              <Text fontSize="18px" className="ofont about-page-content">
                {" "}
                Other opportunities like skill acquisition, personal development
                and taking leadership positions in the community will also be
                made available to them. It is the goal of this government to
                bring politics closer to the youths, our future leaders.
              </Text>
            </Box>
          </Flex>
        </Stack>
      </Box>
    </>
  );
}
