import Head from "next/head"
import styles from "../styles/Home.module.css"
import React from "react"

const index: React.FC = ({}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sam Jones | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Sam Jones</h1>
        <h3>Web Developer</h3>
        <a style={{ color: "#0070f3" }} href="mailto:samjones6058@gmail.com">
          Email me
        </a>
      </main>
    </div>
  )
}

export default index
