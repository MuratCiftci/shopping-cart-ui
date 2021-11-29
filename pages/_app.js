import Layout from "../components/Layout";
import "../styles/globals.css";
import CartContext from "../context/CartContext";
import ProductContextProvider from "../context/ProductContext";

function MyApp({ Component, pageProps}) {

  return (
      <CartContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContext>

  );
}

export default MyApp;

