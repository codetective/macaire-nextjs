import {
  Box,
  Flex,
  Text,
  Image,
  useMediaQuery,
  Divider,
  Stack,
} from "@chakra-ui/react";
import SectionWrap from "./SectionWrap";

const cardContent = [
  {
    title: "Community Care.",
    content:
      "The impact of a community centered agenda will be felt by every citizen",
  },
  {
    title: "Inclusive Governance.",
    content:
      "As a sailor cannot abandon his crew, Nsiskak's agenda takes every citizen into account",
  },
  {
    title: "Create a state we love.",
    content:
      "The outcome of your collective contribution will shape the state into one we disired",
  },
];
const icons = ["/icons/care.svg", "/icons/place.svg", "/icons/teamwork.svg"];

const FeatureCard = ({
  isLargerThan600,
  isLargerThan914,
  title,
  content,
  image,
  delay
}) => {
  return (
    <Flex
    id='campaign-feature-card'
      p={1}
      justifyContent="center"
      alignItems="center"
      my={5}
      data-aos='flip-down'
      data-aos-delay={delay}
    >
      <Box
        minWidth="90px"
        maxW="90px"
        height="90px"
        borderRadius="50%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        backgroundColor="#f9f9f9"
        boxShadow="-5px -5px 15px #ef272724, 5px 5px 15px #6cd46a38"
        mb={isLargerThan600 ? "20px" : 0}
      >
        <Image src={image} width="60%" />
      </Box>

      <Box
        ml={isLargerThan914 ? "25px" : isLargerThan600 ? 0 : "25px"}
        width={isLargerThan600 ? "100%" : "70%"}
      >
        <Text
        id='campaign-feature-card-title'
          color="blue.500"
          fontWeight="bold"
          className="qfont"
          fontSize="20px"
        >
          {title}
        </Text>

        <Text className="qfont" fontSize="15px">
          {content}
        </Text>
      </Box>
    </Flex>
  );
};

export default function CampaignFeat() {
  const [isLargerThan914] = useMediaQuery("(min-width: 914px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 601px");
  // const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  return (
    <SectionWrap>
      <Flex
        justifyContent="center"
        height="100px"
        alignItems="center"
        bg="#4844440a"
        mb={2}
        py={2}
      >
        <Text
          color="white"
          px={1}
          width="fit-content"
          color="green.500"
          fontSize="26px"
          className="afont"
          fontWeight="bold"
        >
          Nsikak
        </Text>
        <Text
          color="#7a7a7a"
          px={1}
          width="fit-content"
          fontSize="26px"
          className="afont"
          fontWeight="bold"
        >
          Abasi
        </Text>
        <Text
          color="white"
          px={1}
          width="fit-content"
          color="red.500"
          fontSize="26px"
          className="afont"
          fontWeight="bold"
        >
          2023
        </Text>
      </Flex>

      <Flex
      id='campaign-feature-container'
        alignItems="center"
        padding="2rem"
      >
        {cardContent.map((c, i) => {
          return (
            <FeatureCard
            key={i}
              isLargerThan600={isLargerThan600}
              isLargerThan914={isLargerThan914}
              title={c.title}
              content={c.content}
              image={icons[i]}
              delay={i == 0?'0':i==1?'300': 500}

            />
          );
        })}
      </Flex>
    </SectionWrap>
  );
}
