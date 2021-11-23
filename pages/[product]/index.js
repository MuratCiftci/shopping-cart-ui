import styles from "./Product.module.css";

const ProductDetails = ({ data }) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={data.image} alt="" />
      </div>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.desc}>{data.description}</div>
        <span className={styles.price}>£{data.price}</span>
        <div className={styles.addContainer}>
          <div className={styles.amountContainer}>
            
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
    params: { category: product.category, product: product.id.toString() },
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
      data,
    },
  };
}
export default ProductDetails;
