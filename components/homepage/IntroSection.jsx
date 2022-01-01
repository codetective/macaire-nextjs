import React, { Component } from "react";
import AnimateHeight from "react-animate-height";
import { Box, Center, Container } from "@chakra-ui/react";
import { Button, Text } from "@chakra-ui/react";
import { BsChevronCompactUp, BsChevronCompactDown } from "react-icons/bs";

export default class Example extends Component {
  state = {
    height: 200,
  };

  toggle = () => {
    const { height } = this.state;

    this.setState({
      height: height === 200 ? "auto" : 200,
    });
  };

  render() {
    const { height } = this.state;

    return (
      <Container maxW="container.xl" px={8} py="20">
        <Text
          as="h1"
          textTransform={"capitalize"}
          fontWeight={"bolder"}
          className="mfont"
          color="#316d47"
          fontSize={["4xl", "4xl", "5xl", "5xl"]}
          textAlign={"center"}
          py="4"
        >
          The time to choose a great leader is now!
        </Text>
        <AnimateHeight id="example-panel" duration={500} height={height}>
          <Box className="ofont">
            <Text as="p" p="2">
              I’m Emmanuel, and I am running to become the office and
              constituency he is running for.
            </Text>
            <Text as="p" p="2">
              I have been privileged to call HOMETOWN home since 1965, and like
              many of you, I believe our future has become more uncertain than
              ever, as we all confront really tough issues and circumstances
              that directly impact – and threaten – the quality of our lives.
            </Text>
            <Text as="p" p="2">
              For some years now, I have impacted our community with several
              projects, but as time passes, the economy has affected many people
              greatly because the growing costs of living have simply become too
              much for them.
            </Text>
            <Text as="p" p="2">
              Now, we face the additional challenges of COVID-19, and years of
              work ahead to rebuild our local economy. These are tough times.
              And there are no easy answers.
            </Text>
            <Text as="p" p="2">
              I am committed to do everything possible to build a team of people
              capable of tackling the most difficult problems. We have to help
              our community not only get through these difficult times, but to
              come out better and stronger than before. We have never
              experienced anything like this, and we have to accept the fact
              there are no easy answers. However, with hard work and strong
              decision making we will have better days ahead.
            </Text>
            <Text as="p" p="2">
              Being your next OFFICE is an extraordinary leadership challenge. I
              believe my life’s work in media and business, in Hawai‘i and on
              the mainland, and in community service, has provided me a clear
              insight on many of the issues we must address.
            </Text>
            <Text as="p" p="2">
              I am ready and capable of accepting the responsibility for the
              welfare of our residents, but I know I cannot do it alone. I need
              your vote to help create the future we all want for our
              communities, our businesses, our families, our people. It’s about
              you.
            </Text>
            <Text as="p" p="2">
              …Emmanuel
            </Text>
          </Box>
        </AnimateHeight>

        <Button
          display={"block"}
          fontWeight={"light"}
          className="mfont"
          textTransform={"uppercase"}
          aria-expanded={height !== 0}
          aria-controls="example-panel"
          onClick={this.toggle}
          m="auto"
          outline="none"
          variant="flushed"
          _focus={{
            boxShadow: "none",
          }}
          textAlign={"center"}
          color="#316d47"
        >
          <Center>
            <Text>{height === 200 ? "Read More" : "Read Less"}</Text>
            <Box textAlign={"center"}>
              {height === 200 ? (
                <BsChevronCompactDown />
              ) : (
                <BsChevronCompactUp />
              )}
            </Box>
          </Center>
        </Button>
      </Container>
    );
  }
}
