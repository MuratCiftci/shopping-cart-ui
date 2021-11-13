import { useEffect, useState } from "react";
import Product from "../Product/Product";
import styles from "./Products.module.css";

const Products = ({ products }) => {
  const [sortedByRate, setSortedByRate] = useState([]);

  useEffect(() => {
    const sorted = [...products].sort((a, b) => b.rating.rate - a.rating.rate);
    setSortedByRate(sorted);
  }, []);
  return (
    <div className={styles.containerFluid}>
      <div className={styles.centeredContainer}>
        <h3 className={styles.centeredTitle}>En Çok Sevilenler</h3>
        <div className={styles.titleUnderline}></div>
      </div>
      <div className={styles.Products}>
        {sortedByRate.slice(0, 4).map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </div>
      <div className={styles.centeredContainer}>
        <h3 className={styles.centeredTitle}>Tüm Ürünler</h3>
        <div className={styles.titleUnderline}></div>
      </div>
      <div className={styles.Products}>
        {products.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
