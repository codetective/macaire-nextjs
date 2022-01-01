import { Box, Heading } from "@chakra-ui/layout";
import {
  Flex,
  Button,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaTag, FaCalendarWeek } from "react-icons/fa";
import Link from 'next/link'

export default function CampaignTours() {
  const [isLargerThan914] = useMediaQuery("(min-width: 914px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 601px");
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <Box p="2rem">
        <Flex justifyContent="space-between" alignItems="center" py={6}>
          <Stack>
            <Heading
            className='caption'
             data-aos='fade-right'
             data-aos-easing="ease-in-sine"
              as="h2"
              sx={{
                fontFamily: "Quicksand",
                display: "flex",
              }}
            >
              <Text mr={2} color="green.500">
                Campaign
              </Text>
              <Text> Events</Text>
            </Heading>
          </Stack>
          <Link href='/events'>
          <Button className="qfont" size="xs">
            All Events
          </Button>
          </Link>
        </Flex>

        <Flex justifyContent="space-between">
          <Stack
            height="fit-content"
            width={{
              base: "100%",
              md: "45%",
            }}
          >
             <Flex mb="auto" height="200px" boxShadow="md" mb={5} display={{base:'flex', md:'none'}}>
              <Box overflow="hidden" width="50%" boxShadow="md">
                <Image src="/images/ytmeeting.jpg" width="100%" height='100%' objectFit='cover'/>
              </Box>

              <Box width="50%" p="3" className="qfont">
                <Flex alignItems="center">
                  <Box as="span" color="green.600">
                    <FaTag />
                  </Box>
                  <Text px={1} as="small" color="green.500">
                    Passed
                  </Text>
                </Flex>
                <Text
                  fontSize="25px"
                  lineHeight="23px"
                  className="afont"
                  py={2}
                >
                First Obot Akara Youth Summit
                </Text>
                <Flex alignItems="center">
                  <Box as="span" color="red.600">
                    <FaCalendarWeek />
                  </Box>
                  <Text px={1} as="small" fontWeight="bold">
                    12<sup>th</sup> March
                  </Text>
                </Flex>
              </Box>
            </Flex>
           

           <Flex mb="auto" height="200px" boxShadow="md" mb={5}>
              <Box overflow="hidden" width="50%" boxShadow="md">
                <Image src="/images/youth.jpg" width="100%" height='100%' objectFit='cover'/>
              </Box>

              <Box width="50%" p="3" className="qfont">
                <Flex alignItems="center">
                  <Box as="span" color="green.600">
                    <FaTag />
                  </Box>
                  <Text px={1} as="small" color="green.500">
                    Upcoming
                  </Text>
                </Flex>
                <Text
                  fontSize="25px"
                  lineHeight="23px"
                  className="afont"
                  py={2}
                >
                  Meeting with the Youths in Ikot Ekpene{" "}
                </Text>
                <Flex alignItems="center">
                  <Box as="span" color="red.600">
                    <FaCalendarWeek />
                  </Box>
                  <Text px={1} as="small" fontWeight="bold">
                    2<sup>nd</sup>April
                  </Text>
                </Flex>
              </Box>
            </Flex>
            <Flex mb="auto" height="200px" boxShadow="md">
              <Box overflow="hidden" width="50%" boxShadow="md">
                <Image src="/images/evt1.jpg" width="100%" height='100%' objectFit='cover'/>
              </Box>

              <Box width="50%" p="3" className="qfont">
                <Flex alignItems="center">
                  <Box as="span" color="green.600">
                    <FaTag />
                  </Box>
                  <Text px={1} as="small" color="green.500">
                    Upcoming
                  </Text>
                </Flex>
                <Text
                  fontSize="25px"
                  lineHeight="23px"
                  className="afont"
                  py={2}
                >
                  Meeting with elders in Essien Udim{" "}
                </Text>
                <Flex alignItems="center">
                  <Box as="span" color="red.600">
                    <FaCalendarWeek />
                  </Box>
                  <Text px={1} as="small" fontWeight="bold">
                    7<sup>th</sup> April
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Stack>

          <Stack
            bg="url('/images/women-meet.jpg')"
            bgColor="rgba(0,0,0,0.7)"
            bgBlendMode="darken"
            bgSize="cover"
            bgRepeat="no-repeat"
            bgPosition="center"
            width="52%"
            height="420px"
            display={{ base: "none", md: "flex" }}
            flexDir="column"
            justifyContent="flex-end"
          >
            <Box width="80%" p="3" className="qfont">
              <Flex alignItems="center">
                <Box as="span" color="green.600">
                  <FaTag />
                </Box>
                <Text px={1} as="small" color="green.500">
                  Upcoming
                </Text>
              </Flex>
              <Text
                fontSize="25px"
                lineHeight="23px"
                className="afont"
                py={2}
                color="white"
              >
                Meeting with Obot Akara Women{" "}
              </Text>
              <Flex alignItems="center">
                <Box as="span" color="red.600">
                  <FaCalendarWeek />
                </Box>
                <Text px={1} as="small" color="red.500" fontWeight="bold">
                  21<sup>st</sup> April
                </Text>
              </Flex>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}
