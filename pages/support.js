import Link from "next/link";
import Head from "next/head";
import { Box, Heading } from "@chakra-ui/layout";
import { Flex, Image, useMediaQuery } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import css from "../styles/support.module.css";

export default function About() {
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <Head>
        <title>Supporters of Emmanuel Ukpong</title>
        <meta
          name="description"
          content="Emmanuel Ukpong believes in popular participation. Get all details about him and information on how to participate directly on this site."
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
          <Text mr={2} color="green.500">
            Support
          </Text>
          <Text> Groups</Text>
        </Heading>

        <Text fontSize="22px" className="ofont">
          Emmanuel Ukpong has garnered the support of various groups and well
          meaning citizen of his community
        </Text>

        <Text fontSize="22px" className="ofont">
          These include the following:
        </Text>

        <div className={css.container}>
          <div className={css.list}>
            <div className={css.num}>
              <h3>
                Nka Iban Ikot Obio Awan : " We the women of Ikot Obio Awan
                standstrongly behind Emmanuel Ukpong. There’s no one more suited
                to represent us than him."
              </h3>
            </div>
            <div className={css.num}>
              <h3>
                Nigeria Automobile Technician (NATA): "Whenever we
                thinkleadership, Emmanuel Ukpong comes to mind. 2023 Ahead!
                Ahead!!"
              </h3>
            </div>
            <div className={css.num}>
              <h3>
                Nka Iban Ikot Ikpe: "Emmanuel Ukpong is the man who understands
                the people very well. We are in full support of this mandate."
              </h3>
            </div>
            <div className={css.num}>
              <h3>
                Nka Ekpeme women association (AKEWA): "Come 2023, one man
                willtake the Federal House of Representatives. His name is
                Emmanuel Ukpong."
              </h3>
            </div>
            <div className={css.num}>
              <h3>
                Nka Iban Ikot Okure: "Emmanuel Ukpong has what it takes to
                represent us at the Federal House of Rep."
              </h3>
            </div>
            <div className={css.num}>
              <h3>
                Etip Ediene Women Organization (EEWO): "A visionary leader is
                one who has a vision and knows how to go about it to achieve his
                visions. Emmanuel Ukpong is a visionary leader."
              </h3>
            </div>
            <div className={css.num}>
              <h3>
                Nka Iban Ikot Obong Edong: "Carry go! We dey behind you. Come
                2023 na you we dey vote for."
              </h3>
            </div>
            <div className={css.num}>
              <h3>
                Presbyterial Young People Association of Nigeria (PYPAN):
                "Emmanuel Ukpong is a leader to emulate. He has consistently
                shown his leadership qualities over the years and by this we
                know we have the right candidate."
              </h3>
            </div>
            <div className={css.num}>
              <h3>
                Men Christian Association (MCA) : "We stand in full support of
                Emmanuel Ukpong’s bid in the Federal House of Representative."
              </h3>
            </div>
            <div className={css.num}>
              <h3>
                Women Guide Association (WCA): "We throw our allegiance to
                Emmanuel Ukpong." :
              </h3>
            </div>
            <div className={css.num}>
              <h3>
                Ikot Udota Youth & Sports Association: "Emmanuel Ukpong is the
                man of the people. We support this mandate."
              </h3>
            </div>

            <div className={css.num}>
              <h3>
                National association of computer science student (NACOSS): "You
                have our full support Mr. Umoren, let’s go there."
              </h3>
            </div>
            <div className={css.num}>
              <h3>
                Ata Essien for the Nation: "Who else to represent us than a man
                who has shown consistency and has a great track record."
              </h3>
            </div>
            <div className={css.num}>
              <h3>
                One Mind Association of Nigeria: "We come together with one mind
                to say Emmanuel Ukpong is the man we want."
              </h3>
            </div>
            <div className={css.num}>
              <h3>
                The Voice of the People: "We don’t just want a leader, but a
                leader who will serve while leading. Emmanuel Ukpong is that
                leader. "
              </h3>
            </div>
            <div className={css.num}>
              <h3>
                Ini for Emmanuel Ukpong Group: "We stand behind our very own.
                Come 2023 Emmanuel Ukpong will be a Federal House Member."
              </h3>
            </div>
            <div className={css.num}>
              <h3>
                Cordial Express Association: "For Federal House of
                Representative, Emmanuel Ukpong is our candidate."
              </h3>
            </div>
            <div className={css.num}>
              <h3>
                Good Makers Association Obot Akara: "There is no body who will
                represent us better at the Federal House better than Emmanuel
                Ukpong."
              </h3>
            </div>
            <div className={css.num}>
              <h3>
                Ikono Youth Congress (IYC): "The youth of ikono are solidly
                behind you. Go and win for us."
              </h3>
            </div>
            <div className={css.num}>
              <h3>
                Ikot Ekpene Federal Constituency Students Assembly (IFCONSA):
                "Emmanuel Ukpong for Federal House of representative. We are
                with you on this journey."
              </h3>
            </div>
            <div className={css.num}>
              <h3>
                Ikot Abia One Voice Group: "In one loud voice we pledge our
                support for you. Emmanuel Ukpong for Federal House of
                Reprsentative."
              </h3>
            </div>
          </div>
        </div>
        <h5 className={css.message}>Hover Over List Items</h5>
      </Box>
    </>
  );
}
