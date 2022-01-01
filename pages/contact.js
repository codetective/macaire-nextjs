import Link from "next/link";
import Head from "next/head";
import {
  Box,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
} from "@chakra-ui/layout";
import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  Textarea,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { Text } from "@chakra-ui/react";
import { useState } from "react";

export default function About() {
  const [isLargerThan914] = useMediaQuery("(min-width: 914px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 601px");
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <Head>
        <title>Contact Emmanuel</title>
        <meta
          name="description"
          content="Emmanuel believes in popular participation. Send him a message"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box padding="2rem">
        <Heading
          id="about-page-header"
          py={2}
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
          <Text mr={2} color="green.500" classname="mfont">
            Get in
          </Text>
          <Text> Touch</Text>
        </Heading>
        <Text fontSize="20px" className="ofont">
          Get in touch with Emmanuel by filling this form or via social media
          links listed below
        </Text>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let data = {
              name: name,
              email: email,
              phoneNumber: phone,
              message: message,
            };
            console.log(data);
            let al =
              "Dear " +
              name.toLocaleUpperCase() +
              ", your message has been recorded successfully";
            alert(al);
            setEmail("");
            setMessage("");
            setPhone("");
            setName("");
          }}
        >
          <Flex
            className="qfont"
            width="100%"
            flexDir={{
              base: "column",
              md: "row",
            }}
            justifyContent="space-between"
          >
            <Box flexBasis="48%">
              <FormControl id="name" isRequired py={2}>
                <FormLabel>Full Name</FormLabel>
                <Input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  placeholder="Full Name"
                  height="50px"
                  borderColor="#bef0be"
                  border="1.5px solid"
                />
              </FormControl>

              <FormControl id="email" isRequired py={2}>
                <FormLabel>Email</FormLabel>
                <Input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  placeholder="Email"
                  height="50px"
                  borderColor="#bef0be"
                  border="1.5px solid"
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>
              <FormControl id="phone-number" isRequired py={2}>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  type="number"
                  placeholder="Phone number"
                  height="50px"
                  borderColor="#bef0be"
                  border="1.5px solid"
                />
                <FormHelperText>
                  We'll never share your phone number.
                </FormHelperText>
              </FormControl>
            </Box>
            <Box flexBasis="48%">
              <FormControl id="message" isRequired py={2}>
                <FormLabel>Message</FormLabel>
                <Textarea
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  resize="none"
                  placeholder="Write a message"
                  size="md"
                  minHeight="180px"
                  borderColor="#bef0be"
                  border="1.5px solid"
                />
              </FormControl>
              <Button type="submit" size="lg">
                Submit
              </Button>
            </Box>
          </Flex>
        </form>
        <Box width="fit-content" m="auto" mt={4}>
          <Text textAlign="center" fontSize="20px" className="ofont">
            Follow on Social Media:
          </Text>
          <Stack py={2} width="fit-content" m="auto">
            <List display="flex" alignItems="center">
              <a
                href="https://www.facebook.com/MacaireOfficial"
                target="_blank"
              >
                <ListItem px={4} className="qfont" cursor="pointer">
                  <ListIcon as={FaFacebookSquare} color="green.600" />
                  Facebook
                </ListItem>
              </a>
              <Divider orientation="vertical" height="25px" />
              <a href="https://twitter.com/MacaireOfficial" target="_blank">
                <ListItem px={4} className="qfont" cursor="pointer">
                  <ListIcon as={FaTwitterSquare} color="green.600" />
                  Twitter
                </ListItem>
              </a>
            </List>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
