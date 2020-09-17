import Head from "next/head"
import styles from "../styles/Home.module.css"
import React, { useEffect, useState } from "react"
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiFirebase,
  SiRuby,
  SiNodeDotJs,
  SiRails,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiGithub,
} from "react-icons/si"
import { BsFileText } from "react-icons/bs"
import { Box, Button, Flex } from "@chakra-ui/core"
import { Icon } from "../components/Icon"
import ReactGA from "react-ga"
import Draggable from "react-draggable"
import { isMobile } from "react-device-detect"

const index: React.FC = ({}) => {
  useEffect(() => {
    ReactGA.pageview("index")
  }, [])

  const startingNumOfCards = !isMobile ? 5 : 1
  const [numOfCards, setNumOfCards] = useState(startingNumOfCards)

  return (
    <div className={styles.container}>
      <Head>
        <title>Sam Jones | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {[...Array(numOfCards)].map((e, i) => (
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
              setNumOfCards(numOfCards + 1)
            }
          }}
        >
          <Box zIndex={10000 - i} cursor="grab" className={styles.card}>
            <h1>Sam Jones</h1>
            <h4>Web Developer</h4>
            <div className={styles.skills}>
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
              <Icon label="Ruby">
                <SiRuby />
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
            </div>
            <Flex wrap="wrap" justifyContent="center">
              <Button m={2} leftIcon="email">
                <a href="mailto:sam@jonessam.com" target="_blank">
                  Email me
                </a>
              </Button>
              <Button m={2} leftIcon={SiGithub}>
                <a href="https://github.com/jones-sam" target="_blank">
                  Github
                </a>
              </Button>
              <Button m={2} leftIcon={BsFileText}>
                <a href="/SamJonesResume.pdf" download>
                  Download CV
                </a>
              </Button>
            </Flex>
          </Box>
        </Draggable>
      ))}
    </div>
  )
}

export default index
