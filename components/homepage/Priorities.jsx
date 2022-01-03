import React from "react";
import { Box, Text, Flex, Square, Container } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/layout";

const goals = [
  {
    title: "Focus on Education",
    description:
      "The children are the leaders of tomorrow, if they are not trained well and right, will there be hope for the country? Possible solutions that can savage the educational sector that my government will work towards is to make sure funds are available and some basic needs like books, uniforms, etc, will be made available to support the children to go to school.",
  },
  {
    title: "Alleviation of Poverty",
    description:
      "Looking critically at the issue of unemployment, you’ll find out that a lot of the unemployed citizens, especially the youth don’t have the necessary skills and education to hold a job. To solve this, while jobs are being created, people should be trained on some technical skills, vocational skills and the entrepreneurial skills.",
  },
  {
    title: "Electricity Supply",
    description:
      "Electricity is one of the basic needs a government should provide for its citizens but some communities can’t boast of steady light. While some areas have forgotten how it feels to have light in the community. It’s worst for business owners who now have to find alternatives to have light and run their businesses.",
  },
  {
    title: "Women Participation",
    description:
      "The role of women in community development cannot be overlooked. Starting from the homes, they play a great impact by being training the children who are the future of the community.      Women will be offered a platform to air their personal views on policies affecting them.",
  },
  {
    title: "Communal Health",
    description:
      "Everyone in the community is entitled to good healthcare. This we will do by identifying top public health concern, craft out a workable plan and make sure the community have access to medical services, even in emergency situation.",
  },
  {
    title: "Youth Involvement",
    description:
      "The youth are the future leaders of tomorrow. The youth are considered the engine room and life of the any community and it is important they are carried along in everything we will be doing which will provide them the opportunity to contribute to the community development.",
  },
];

function Priorities() {
  return (
    <Box margin="auto" overflow="hidden" py="80px" bgColor={"#f0e9e1"}>
      <Container maxW="container.xl" px={8}>
        <Text
          as="h1"
          textTransform={"capitalize"}
          fontWeight={"bolder"}
          className="mfont"
          color="#316d47"
          fontSize={["4xl", "4xl", "5xl", "5xl"]}
          textAlign={"center"}
          pb="10"
        >
          My Priorities & Policies
        </Text>
        <Stack className="ofont" spacing="8">
          {goals.map((g, idx) => {
            return (
              <PriorityCard
                key={idx}
                indx={idx + 1}
                title={g.title}
                description={g.description}
              />
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}

export default Priorities;

function PriorityCard({ title, description, indx }) {
  return (
    <Flex>
      <Square
        size="50px"
        bg="#316d47"
        fontSize={"1.5rem"}
        fontWeight="bold"
        color="white"
        mr="5"
      >
        {indx}
      </Square>
      <Stack spacing="2">
        <Box>
          <Text
            as="h3"
            textTransform={"capitalize"}
            fontWeight={"bold"}
            className="mfont"
            color="gray.600"
            fontSize={["xl", "xl", "2xl", "2xl"]}
          >
            {title}
          </Text>
        </Box>
        <Text as="p" fontSize="20px" className="ofont">
          {description}
        </Text>
      </Stack>
    </Flex>
  );
}
