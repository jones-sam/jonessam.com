import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sam Jones</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>jonessam.com</h1>
        <a style={{ color: "#0070f3" }} href="mailto:samjones6058@gmail.com">
          Email me
        </a>
      </main>

      <footer className={styles.footer}>
        <p>Copyright Sam Jones {new Date(Date.now()).getFullYear()}</p>
      </footer>
    </div>
  )
}
