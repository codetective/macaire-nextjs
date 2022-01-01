import React from "react";
import {
  Box,
  Text,
  Image,
  Center,
  Container,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import Lightbox from "react-image-lightbox";
import { useState } from "react";
import Link from "next/link";

const campaignImages = [
  {
    src: "/images/macairep2.jpg",
    caption:
      "Hon. Emmanuel Disburses N100m Business  Grants to Enterpreneurs under Macaire Enterprise Development Scheme",
  },
  {
    src: "/images/macairep6.jpg",
    caption:
      "Hon Emmanuel Ukpong & Beneficaries of Macaire Enterprise Development Scheme",
  },
  {
    src: "/images/macairep3.jpg",
    caption: "Hon Emmanuel with successfull MEDS Beneficiaries",
  },
  {
    src: "/images/pj1.jpg",
    caption: "completion and delivery of the market stalls",
  },
  {
    src: "/images/pj2.jpg",
    caption:
      "Macaire Enterprise Development Scheme Empowering businesses and individuals",
  },
  {
    src: "/images/pj3.jpg",
    caption:
      "Macaire Mother and Child Care Program’ is currently ongoing at General Hospital at Ibiaku Ntok Okpo",
  },
];

function Projects() {
  const [isOpen, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  return (
    <>
      <Box margin="auto" overflow="hidden" py="80px" bgColor={"#316d47"}>
        <Container maxW="container.xl" px={8}>
          <Text
            as="h1"
            textTransform={"capitalize"}
            fontWeight={"bolder"}
            className="mfont"
            color="#f0e9e1"
            fontSize={["4xl", "4xl", "5xl", "5xl"]}
            textAlign={"center"}
            pb="5"
          >
            A History of Service
          </Text>

          <Text
            as="p"
            fontSize="20px"
            pb="10"
            textAlign="center"
            className="ofont"
            color="gray.300"
          >
            This is a brief display of few of the numerous project carry out by
            Hon. Emmanuel Ukpong-udo of the Ikono-Ini Federal Constituency.
          </Text>
          <SimpleGrid columns={[1, 1, 2, 3]} spacing="8">
            {campaignImages.map((image, index) => {
              return (
                <Box
                  width="100%"
                  cursor={"pointer"}
                  key={index}
                  onClick={() => {
                    setOpen(true);
                    setPhotoIndex(index);
                  }}
                  shadow="sm"
                >
                  <Box className="item" pos="relative">
                    <Box className="img-bx">
                      <Image src={image.src} alt={image.caption} w="full" />
                    </Box>

                    <Box
                      pos="absolute"
                      bottom={0}
                      className="mfont"
                      textAlign="center"
                      fontWeight="bold"
                      bg={"rgba(0,0,0,0.7)"}
                      color="white"
                      fontSize="13px"
                      w="full"
                      minH="50px"
                      p="2"
                    >
                      {image.caption}
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </SimpleGrid>
          <Center mt="10">
            <Link href={"/projects"}>
              <Button
                display={"block"}
                fontWeight={"bold"}
                className="mfont"
                textTransform={"uppercase"}
                aria-controls="example-panel"
                m="auto"
                outline="outline"
                bg="white"
                outline="none"
                variant="flushed"
                _focus={{
                  boxShadow: "none",
                }}
                _hover={{
                  color: "#316d47",
                }}
                textAlign={"center"}
                color="#316d47"
              >
                <a>
                  <Text>View More Projects</Text>
                </a>
              </Button>
            </Link>
          </Center>
        </Container>
      </Box>
      {isOpen && (
        <Lightbox
          mainSrc={campaignImages[photoIndex].src}
          nextSrc={campaignImages[(photoIndex + 1) % campaignImages.length]}
          prevSrc={
            campaignImages[
              (photoIndex + campaignImages.length - 1) % campaignImages.length
            ]
          }
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + campaignImages.length - 1) % campaignImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex(
              (photoIndex + campaignImages.length + 1) % campaignImages.length
            )
          }
          imageCaption={
            <Box
              as="h5"
              w="90vw"
              fontSize="20px"
              py={4}
              textAlign="center"
              m="auto"
              className="ofont"
            >
              {campaignImages[photoIndex].caption}
            </Box>
          }
        />
      )}
    </>
  );
}

export default Projects;
