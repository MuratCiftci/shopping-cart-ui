import Product from "../../components/Product/Product";
import styles from "./Category.module.css";
import { useRouter } from "next/router";

const index = ({ category }) => {
  const router = useRouter();
  const title = router.query;
  console.log(title);
  return (
    <div className={styles.containerFluid}>
      <div className={styles.centeredContainer}>
        <h3 className={styles.centeredTitle}>{title.category.toUpperCase()}</h3>
        <div className={styles.titleUnderline}></div>
      </div>
      <div className={styles.Products}>
        {category.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};
export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = categories.map((category) => ({
    params: { category },
  }));

  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  console.log(params);
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${params.category}`
  );
  const category = await res.json();

  return {
    props: {
      category,
    },
  };
}
export default index;
