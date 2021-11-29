import Head from "next/head";
import styles from "../styles/Home.module.css";
import Slider from "../components/Slide/Slider";
import Products from "../components/ProductList/Products";
import Search from '../components/Search/Search';
export default function Home({products}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shoppy</title>
        <meta name="description" content="Shop Better" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search  products={products}/>
      <Slider />
      <Products products={products}/>
    </div>
  );
}
export async function getStaticProps(context) {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const products = await res.json();
  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: { products }, // will be passed to the page component as props
  };
}
