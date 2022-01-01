// import { Box, List, ListIcon, ListItem } from "@chakra-ui/layout";
// import { Flex } from "@chakra-ui/react";
// import { Text, Link as OLink } from "@chakra-ui/react";
// import Link from "next/link";
// import {
//   FaExternalLinkAlt,
//   FaFacebook,
//   FaFacebookF,
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaTwitterSquare,
// } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <Flex
//       flexDir="column"
//       justifyContent="space-between"
//       minHeight="320px"
//       bg="purple.800"
//     >
//       {/* top box */}
//       <Flex p='2rem' flexDir={{
//         base:'column', md:'row'
//       }}>
//         <Box width={{base:'100%', md:'50%'}}>
//           <Flex className="qfont" justifyContent={{
//             base:'center', md:'initial'
//           }}>
//             <Text fontWeight="semibold" className='caption-footer' color="green.500">
//               Nsikak
//             </Text>
//             <Text fontWeight="semibold" className='caption-footer' color="red.500">
//               Umoren
//             </Text>
//           </Flex>
//           <Text
//             as="small"
//             textTransform="uppercase"
//             className="afont"
//             display='block'
//             width='fit-content'
//             sx={{ marginTop: "-10px" }}
//             color="whiteAlpha.800"
//             m={{base:'auto', md:'initial'}}
//           >
//             For federal house of representatives
//           </Text>
//         </Box>

//         <Box id='footer-link-box' display='flex' mt={{base:'20px', md:'20px'}} justifyContent='space-between' width={{base:'100%', md:'50%'}} flexDir={{base:'row-reverse', md:'row'}}>
//         <List spacing={3} color="whiteAlpha.900" width='40%'>
//           <Text fontSize="20px" className="afont">
//             Follow Nsikak{" "}
//           </Text>

//           <a href="https://www.facebook.com/NsikakUton" target="_blank">
//             <ListItem className="qfont" cursor="pointer" mt="0.75rem">
//               <ListIcon as={FaFacebookSquare} color="green.600" />
//               Facebook
//             </ListItem>
//           </a>

//           {/* <a href="https://www.instagram.com" target="_blank">
//             <ListItem className="qfont" cursor="pointer" mt="0.75rem">
//               <ListIcon as={FaInstagramSquare} color="green.600" />
//               Instagram
//             </ListItem>
//           </a> */}

//           <a href="https://twitter.com/SykesMoren2023" target="_blank">
//             <ListItem className="qfont" cursor="pointer" mt="0.75rem">
//               <ListIcon as={FaTwitterSquare} color="green.600" />
//               Twitter
//             </ListItem>
//           </a>
//         </List>
//         {/* links */}
//         <List spacing={3} color="whiteAlpha.900" width='50%'>
//           <Text fontSize="20px" className="afont">
//             Quick Links
//           </Text>
//           <Link href="/about">
//             <ListItem className="qfont" cursor="pointer">
//               <ListIcon as={FaExternalLinkAlt} color="green.600" />
//               About Nsikak
//             </ListItem>
//           </Link>

//           <Link href="/manifesto">
//             <ListItem className="qfont" cursor="pointer">
//               <ListIcon as={FaExternalLinkAlt} color="green.600" />
//               Nsikak's Manifesto (2023)
//             </ListItem>
//           </Link>

//            <Link href="/events">
//             <ListItem className="qfont" cursor="pointer">
//               <ListIcon as={FaExternalLinkAlt} color="green.600" />
//               Campaign Events
//             </ListItem>
//           </Link>

//           <Link href="/support">
//             <ListItem className="qfont" cursor="pointer">
//               <ListIcon as={FaExternalLinkAlt} color="green.600" />
//               Support Groups
//             </ListItem>
//           </Link>
//           <Link href="/contact">
//             <ListItem className="qfont" cursor="pointer">
//               <ListIcon as={FaExternalLinkAlt} color="green.600" />
//               Send Feedback
//             </ListItem>
//           </Link>
//         </List>
//         </Box>
//       </Flex>

//       {/* bootm bar */}
//       <Flex
//         alignItems="center"
//         justifyContent="center"
//         padding="2rem"
//         minHeight="50px"
//         bg="rgba(0,0,0,0.6)"
//       >
//         <Text color="white" className="afont">
//           © Copyright 2021 Nsikak Umoren.
//         </Text>
//       </Flex>
//     </Flex>
//   );
// }

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Image,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

const Logo = (props) => {
  return (
    <Link href="/">
      <a style={{ display: "flex" }}>
        <Box overflow="hidden">
          <Image src={"/images/logo.png"} w="100%" />
        </Box>
      </a>
    </Link>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      rounded={"full"}
      // w={8}
      // h={8}
      fontSize={"60px"}
      cursor={"pointer"}
      as={"a"}
      color="#2e6847"
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        color: "#479442",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  return (
    <Box
      bg={"#f0e9e1"}
      color={useColorModeValue("gray.700", "gray.200")}
      py="60px"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={"4"}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"Twitter"}
            href={"https://twitter.com/MacaireOfficial"}
          >
            <FaTwitter />
          </SocialButton>
          <SocialButton
            label={"Facebook"}
            href={"https://www.facebook.com/MacaireOfficial"}
          >
            <FaFacebook />
          </SocialButton>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
          className="mfont"
        >
          <Text>© 2021 Macaire. All rights reserved</Text>
          <Text>Designed by Eddytech ICT.</Text>
        </Container>
      </Box>
    </Box>
  );
}
