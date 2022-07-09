import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crossfit Oddity</title>
        <meta name="description" content="Crossfit Oddity - Madison, AL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        Oddity
        <nav>
          <a href="">About</a>
          <a href="">Memberships</a>
          <a href="">Schedule</a>
          <a href="">Our Coaches</a>
          <a href="">Contact Us</a>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Crossfit Oddity
        </h1>

        
      </main>

      <footer className={styles.footer}>
       Crossfit Oddity
      </footer>
    </div>
  )
}

export default Home
