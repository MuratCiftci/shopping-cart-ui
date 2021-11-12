import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Slider from '../components/Slide/Slider'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shoppy</title>
        <meta name="description" content="Shop Better"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
    </div>
  )
}
