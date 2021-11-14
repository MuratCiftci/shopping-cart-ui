import Head from "next/head";
import styles from "../styles/Home.module.css";
import Slider from "../components/Slide/Slider";
import Products from "../components/Products/Products";
export default function Home({products}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shoppy</title>
        <meta name="description" content="Shop Better" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <Products products={products}/>
    </div>
  );
}
export async function getStaticProps(context) {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const products = await res.json();
  console.log(products);
  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: { products }, // will be passed to the page component as props
  };
}
