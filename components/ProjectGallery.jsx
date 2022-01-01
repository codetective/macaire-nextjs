import {
  Box,
  Flex,
  Text,
  Image,
  useMediaQuery,
  Divider,
  useBreakpointValue,
  Badge,
} from "@chakra-ui/react";
import Link from 'next/link'
import { Heading } from '@chakra-ui/layout';

const agenda = [
  {
    title: "Education",
    body:
      "Education builds a nation, therefore its imperative to improve this sector",
    icon: '/icons/edu.svg',
    ref:'education'
  },
  {
    title: "Poverty Alleviation",
    body:
      "Youth empowerment and encouragement to imbibe entrepreneural skills will be emphasized",
    icon: '/icons/rich.svg',
    ref:'povertyAlleviation'

  },
  {
    title: "Electricity",
    body:
      "Many business run on Electricity, solving the problem of power failures will increase profit",
    icon: '/icons/lightning.svg',
    ref:'electricity'

  },
  {
    title: "Women Participation",
    body:
      "Women will be offerred a platform to air their personal views on policies directly affecting them",
      icon: '/icons/woman.svg',
      ref:'womenParticipation'


  },
  {
    title: "Communal Health",
    body:
      "Cheap and affordable healthcare services will be invested in and made available to every member of the community",
    icon: '/icons/healthcare.svg',
    ref:'communalHealth'

  },
  {
    title: "Youth Involvement",
    body:
      "It is the goal of this government to bring politics closer to the youths, our futures leaders",
      icon: '/icons/youth.svg',
      ref:'youthInvolvement'

  },
];
function Card({ title, body, icon, anim, reference }) {
  const [isLargerThan914] = useMediaQuery("(min-width: 914px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 601px");
  return (
    <>
    <Link href={'/manifesto#'+reference}>

      <Box as='a'
      cursor='pointer'
        data-aos={anim}
        data-aos-easing="ease-in-sine"
        className="project-cards"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        p="4rem"
        textAlign="center"
        boxShadow="lg"
        height="370px"
      >
              <Box
        minWidth="100px"
        maxW="100px"
        height="100px"
        borderRadius="50%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        mb={isLargerThan600 ? "20px" : 0}
      >
        <Image src={icon} width="100%" />
      </Box>

        <Text
          className="qfont project-card-title"
          fontSize="1.5rem"
          fontWeight="light"
        >
          {title}
        </Text>
        <Text className="afont" fontSize="1rem" fontWeight="light">
          {body}
        </Text>
      </Box>
      </Link>

    </>
  );
}

export default function ProjectGallery() {
  const [isLargerThan914] = useMediaQuery("(min-width: 914px)");
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  const aboutFlexDir = useBreakpointValue({ base: "column", md: "row" });

  return (
    <Flex
      flexDir="column"
      boxShadow="lg"
      borderRadius="0 0 20px 20px"
      pt="2rem"
      height="fit-content"
      ml={0}
      id="projects-section"
    >
      <Heading
      py={2}
      px='1.6rem'
            className='caption'
             data-aos='fade-right'
             data-aos-easing="ease-in-sine"
              as="h2"
              sx={{
                fontFamily: "Quicksand",
                display: "flex",
              }}
            >
        <Text mr={2} ml={2} color="green.500">
          Nsikak's
        </Text>
        <Text> Agenda</Text>
            </Heading>

      <Flex
        alignItems="center"
        width="100%"
        flexDir={aboutFlexDir}
        justifyContent="space-between"
      >
        <Card
          anim="zoom-in-right"
          title={agenda[0].title}
          body={agenda[0].body}
          icon={agenda[0].icon}
          reference={agenda[0].ref}
        />

        <Card
          anim="zoom-in-left"
          title={agenda[1].title}
          body={agenda[1].body}
          icon={agenda[1].icon}
          reference={agenda[1].ref}
        />
      </Flex>

      <Flex
        alignItems="center"
        width="100%"
        flexDir={aboutFlexDir}
        justifyContent="space-between"
      >
        <Card
          anim="zoom-in-right"
          title={agenda[2].title}
          body={agenda[2].body}
          icon={agenda[2].icon}
          reference={agenda[2].ref}

        />
        <Card
          anim="zoom-in-left"
          title={agenda[3].title}
          body={agenda[3].body}
          icon={agenda[3].icon}
          reference={agenda[3].ref}

        />
      </Flex>

      <Flex
        alignItems="center"
        width="100%"
        flexDir={aboutFlexDir}
        justifyContent="space-between"
      >
        <Card
          anim="zoom-in-right"
          title={agenda[4].title}
          body={agenda[4].body}
          icon={agenda[4].icon}
          reference={agenda[4].ref}

        />

        <Card
          anim="zoom-in-left"
          title={agenda[5].title}
          body={agenda[5].body}
          icon={agenda[5].icon}
          reference={agenda[5].ref}

        />
      </Flex>
    </Flex>
  );
}
