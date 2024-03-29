import { Box, Button, Flex, Text } from "@chakra-ui/core";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import Draggable from "react-draggable";
import ReactGA from "react-ga";
import { AiFillLinkedin } from "react-icons/ai";
import {
  SiCss3,
  SiFirebase,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNodeDotJs,
  SiPostgresql,
  SiRails,
  SiReact,
  SiTypescript,
  SiFlutter,
  SiGraphql,
} from "react-icons/si";
import NoSSR from "react-no-ssr";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { Icon } from "../components/Icon";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const index: React.FC = ({}) => {
  useEffect(() => {
    ReactGA.pageview("index");
  }, []);

  const startingNumOfCards = !isMobile ? 5 : 1;
  const [numOfCards, setNumOfCards] = useState(startingNumOfCards);
  const [cardsTaken, setCardsTaken] = useState(startingNumOfCards - 1);

  const [showAlex, setShowAlex] = useState(false);

  const handler = (e: KeyboardEvent) => {
    if (e.key === "|" && e.ctrlKey) {
      console.log("here");
      setShowAlex(!showAlex);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handler, false);

    return () => window.removeEventListener("keydown", handler, false);
  }, [showAlex]);

  return (
    <>
      <Head>
        <title>Sam Jones | Full-Stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Sam Jones is a Full-Stack Developer from Canada. His skills include TypeScript, React, Node, Ruby on Rails, and more."
        />
        <meta
          name="keywords"
          content="Sam, Jones, Web, Developer, TypeScript, React, Native, Node, Ruby, Ruby on Rails, HTML, CSS, Programmer, Canada, Software"
        />
      </Head>
      {cardsTaken > startingNumOfCards && (
        <Box
          position="absolute"
          top="16px"
          right="16px"
          className={styles.card}
          zIndex={100000}
        >
          <Text fontSize="3xl">{`Business Cards Taken: ${cardsTaken}`}</Text>
          <>
            <Text fontSize="lg">Know someone who could use my card?</Text>
            <Flex mt={1} justify="space-between" width="80%">
              <EmailShareButton
                subject="Check out jonessam.com!"
                body="Sam Jones is a Web developer, and this is his personal site."
                url="https://jonessam.com"
              >
                <EmailIcon round size={32} />
              </EmailShareButton>
              <FacebookShareButton url="https://jonessam.com">
                <FacebookIcon round size={32} />
              </FacebookShareButton>
              <LinkedinShareButton url="https://jonessam.com">
                <LinkedinIcon round size={32} />
              </LinkedinShareButton>
              <TwitterShareButton url="https://jonessam.com">
                <TwitterIcon round size={32} />
              </TwitterShareButton>
              <TelegramShareButton url="https://jonessam.com">
                <TelegramIcon round size={32} />
              </TelegramShareButton>
              <WhatsappShareButton url="https://jonessam.com">
                <WhatsappIcon round size={32} />
              </WhatsappShareButton>
            </Flex>
          </>
        </Box>
      )}
      <div className={styles.container}>
        <NoSSR>
          {[...Array(numOfCards)].map((_, i) => (
            <Draggable
              disabled={isMobile}
              key={i}
              bounds="parent"
              defaultPosition={
                i < startingNumOfCards && !isMobile
                  ? { x: -(i - 3) * 4, y: (i - 3) * 4 }
                  : { x: 0, y: 0 }
              }
              onStart={() => {
                if (i + 1 === numOfCards) {
                  setCardsTaken(cardsTaken + 1);
                  setNumOfCards(numOfCards + 1);
                }
              }}
            >
              <Box zIndex={10000 - i} cursor="grab" className={styles.card}>
                <h1>Sam Jones</h1>
                <h4>Full-Stack Developer</h4>
                <div className={styles.skills}>
                  {showAlex && (
                    <Image
                      src="/fatlex.jpg"
                      alt="Alex"
                      width={200}
                      height={200}
                    />
                  )}
                  <Icon label="TypeScript">
                    <SiTypescript />
                  </Icon>
                  <Icon label="JavaScript">
                    <SiJavascript />
                  </Icon>
                  <Icon label="React / React Native">
                    <SiReact />
                  </Icon>
                  <Icon label="HTML">
                    <SiHtml5 />
                  </Icon>
                  <Icon label="CSS">
                    <SiCss3 />
                  </Icon>
                  <Icon label="Firebase">
                    <SiFirebase />
                  </Icon>
                  <Icon label="Ruby on Rails">
                    <SiRails />
                  </Icon>
                  <Icon label="NodeJS">
                    <SiNodeDotJs />
                  </Icon>
                  <Icon label="PostgreSQL">
                    <SiPostgresql />
                  </Icon>
                  <Icon label="Flutter">
                    <SiFlutter />
                  </Icon>
                  <Icon label="GraphQL">
                    <SiGraphql />
                  </Icon>
                  {showAlex && (
                    <Image
                      src="/fatlex.jpg"
                      alt="Alex"
                      width={200}
                      height={200}
                    />
                  )}
                </div>
                <Flex wrap="wrap" justifyContent="center">
                  <Button m={2} leftIcon="email">
                    <a href="mailto:contact@jonessam.com" target="_blank">
                      Email me
                    </a>
                  </Button>
                  <Button m={2} leftIcon={SiGithub}>
                    <a href="https://github.com/jones-sam" target="_blank">
                      Github
                    </a>
                  </Button>
                  <Button m={2} leftIcon={AiFillLinkedin}>
                    <a href="https://www.linkedin.com/in/sam-jones-b88b17192/">
                      LinkedIn
                    </a>
                  </Button>
                </Flex>
              </Box>
            </Draggable>
          ))}
        </NoSSR>
      </div>
    </>
  );
};

export default index;
