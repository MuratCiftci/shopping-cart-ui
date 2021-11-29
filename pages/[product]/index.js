import styles from "./Product.module.css";
import Link from 'next/link'
import { useCart } from "../../hooks/useCart";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
const ProductDetails = ({ data }) => {
  const { addProduct, cartItems, increase } = useCart();

  const isInCart = (product) => {
    return !!cartItems.find((data) => data.id === product.id);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img src={data.image}></img>
        </div>
        <div className={styles.content}>
          <div className={styles.info}>
            <h2 className={styles.title}>{data.title}</h2>
            <h4 className={styles.price}>${data.price}</h4>
            <p className={styles.desc}>{data.description}</p>
          </div>
          <div className={styles.filters}>
            <button className={styles.basketProduct}>
            {isInCart(data) && (
            <button
              className={styles.basketProduct}
              onClick={() => increase(data)}
            >
              <ShoppingBagOutlinedIcon className={styles.basketIcon} /> <span>Add More to Basket</span>
            </button>
          )}
          {!isInCart(data) && (
            <button
              className={styles.basketProduct}
              onClick={() => addProduct(data)}
            >
              {" "}
              <ShoppingBagOutlinedIcon className={styles.basketIcon} /> <span>Add to Basket</span>
            </button>
          )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = products.map((product) => ({
    params: { product: product.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${params.product}`
  );
  const data = await res.json();

  return {
    props: {
      data
    },
  };
}
export default ProductDetails;
