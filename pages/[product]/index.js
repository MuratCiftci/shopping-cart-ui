import styles from './Product.module.css'
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const ProductDetails = ({ product }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={product.image} alt="" />
      </div>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>{product.title}</h1>
        <div className={styles.desc}>{product.description}</div>
        <span className={styles.price}>£{product.price}</span>
        <div className={styles.addContainer}>
          <div className={styles.amountContainer}>
            <RemoveIcon />
            <span className={styles.amount}>1</span>
            <AddIcon /> <button className={styles.cartButton}>ADD TO CART</button>
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
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}
export default ProductDetails;
