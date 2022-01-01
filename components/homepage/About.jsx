import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Text,
  Button,
  Center,
  Stack,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";

export default function About() {
  return (
    <Box bg="#c6c5ae">
      <Container maxW={"container.xl"} py={"80px"} px={8}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={"/images/emmanuellaugh.jpg"}
              objectFit={"cover"}
            />
          </Flex>
          <Stack spacing={4}>
            <Text
              as="h2"
              textTransform={"capitalize"}
              fontWeight={"bolder"}
              className="mfont"
              color="#316d47"
              fontSize={["4xl", "4xl", "5xl", "5xl"]}
              textAlign={"center"}
            >
              Meet Emmanuel
            </Text>
            <Text color={"gray.700"} fontSize={"lg"} className="ofont">
              Honourable Emmanuel Ukpong is a political leader in Ikono L.G.A,
              and currently serving in the Federal House of Representatives as a
              represntative of Ikono/ Ini Federal Constituency.
            </Text>
            <Text color={"gray.700"} fontSize={"lg"} className="ofont">
              Born with a gift to raise others, Emmanuel has dedicated his life
              to serving the prople of his community, his passionate leadership
              has brought out the best in people over the years. An inspiring
              and highly effective leader, his passion is infectious to everyone
              he engages. His ability to drive positive change by bringing out
              the best in people has been made possible through years of
              experience and recommendable achievements.
            </Text>
            <Center>
              <Link href={"/about"}>
                <Button
                  display={"block"}
                  fontWeight={"bold"}
                  className="mfont"
                  textTransform={"uppercase"}
                  aria-controls="example-panel"
                  m="auto"
                  outline="none"
                  variant="flushed"
                  _focus={{
                    boxShadow: "none",
                  }}
                  _hover={{
                    color: "white",
                  }}
                  textAlign={"center"}
                  color="#316d47"
                >
                  <a>
                    <Text>View Profile</Text>
                  </a>
                </Button>
              </Link>
            </Center>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
