import Head from "next/head"
import styles from "../styles/Home.module.css"
import React from "react"
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
import { Button, Flex, Tooltip, Box } from "@chakra-ui/core"
import { Icon } from "../components/Icon"

const index: React.FC = ({}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sam Jones | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.card}>
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
          <a href="mailto:sam@jonessam.com" target="_blank">
            <Button m={2} leftIcon="email">
              Email me
            </Button>
          </a>
          <a href="https://github.com/jones-sam" target="_blank">
            <Button m={2} leftIcon={SiGithub}>
              Github
            </Button>
          </a>
          <a href="" target="_blank">
            <Button m={2} isDisabled leftIcon={BsFileText}>
              Download CV
            </Button>
          </a>
        </Flex>
      </div>
    </div>
  )
}

export default index
