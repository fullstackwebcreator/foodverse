import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Foodverse | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/foodverselogo.png" />
      </Head>

      <main className={styles.main}>
        <button onClick={() => signIn()}>Sign in</button>
      </main>
    </div>
  )
}

export default Home
