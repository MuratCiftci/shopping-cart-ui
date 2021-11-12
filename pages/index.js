import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Slider from "../components/Slide/Slider";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shoppy</title>
        <meta name="description" content="Shop Better" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <div className={styles.containerFluid}>
        <div className={styles.centeredContainer}>
          <h3 className={styles.centeredTitle}>Sıcak Fırsatlar</h3>
          <div className={styles.titleUnderline}></div>
        </div>
        <div className={styles.seasonProducts}>
          <div className={styles.seasonProduct}>a</div>
          <div className={styles.seasonProduct}>a</div>
          <div className={styles.seasonProduct}>a</div>
          <div className={styles.seasonProduct}>a</div>
          <div className={styles.seasonProduct}>a</div>
          <div className={styles.seasonProduct}>a</div>
          <div className={styles.seasonProduct}>a</div>
          <div className={styles.seasonProduct}>a</div>
          <div className={styles.seasonProduct}>a</div>
          
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps(context) {
  const res = await fetch(`https://fakestoreapi.com/products/categories`);
  const categories = await res.json();
  console.log(data);
  if (!categories) {
    return {
      notFound: true,
    };
  }

  return {
    props: { categories }, // will be passed to the page component as props
  };
}
