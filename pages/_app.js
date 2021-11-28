import Layout from "../components/Layout";
import "../styles/globals.css";
import CartContext from "../context/CartContext";
import ProductContextProvider from "../context/ProductContext";

function MyApp({ Component, pageProps, products}) {

  return (
    <ProductContextProvider value={pageProps.products}>
      <CartContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContext>
    </ProductContextProvider>
  );
}

export default MyApp;

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
