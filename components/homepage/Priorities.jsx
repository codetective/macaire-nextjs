import React from "react";
import { Box, Text, Flex, Square, Container } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/layout";

const goals = [
  {
    title: "goal 1",
    description:
      "lorem    I have been privileged to call HOMETOWN home since 1965, and like many of you, I believe our future has become more uncertain than ever, as we all confront really tough issues and  circumstances that directly impact – and threaten – the quality  of our lives.",
  },
  {
    title: "goal 2",
    description:
      "lorem    I have been privileged to call HOMETOWN home since 1965, and like many of you, I believe our future has become more uncertain than ever, as we all confront really tough issues and  circumstances that directly impact – and threaten – the quality  of our lives.",
  },
  {
    title: "goal 3",
    description:
      "lorem    I have been privileged to call HOMETOWN home since 1965, and like many of you, I believe our future has become more uncertain than ever, as we all confront really tough issues and  circumstances that directly impact – and threaten – the quality  of our lives.",
  },
  {
    title: "goal 4",
    description:
      "lorem    I have been privileged to call HOMETOWN home since 1965, and like many of you, I believe our future has become more uncertain than ever, as we all confront really tough issues and  circumstances that directly impact – and threaten – the quality  of our lives.",
  },
  {
    title: "goal 5",
    description:
      "lorem    I have been privileged to call HOMETOWN home since 1965, and like many of you, I believe our future has become more uncertain than ever, as we all confront really tough issues and  circumstances that directly impact – and threaten – the quality  of our lives.",
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
                indx={idx}
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
