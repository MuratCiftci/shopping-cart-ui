import { useEffect, useState, useRef } from "react";
import Product from "../Product/Product";
import styles from "./Products.module.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Products = ({ products }) => {
  const [sortedByRate, setSortedByRate] = useState([]);

  useEffect(() => {
    const sorted = [...products].sort((a, b) => b.rating.rate - a.rating.rate);
    setSortedByRate(sorted);
  }, []);
  return (
    <div className={styles.containerFluid}>
      <div className={styles.centeredContainer}>
        <h3 className={styles.centeredTitle}>BEST SELLERS</h3>
        <div className={styles.titleUnderline}></div>
      </div>
      <div className={styles.products}>
        {sortedByRate.slice(0, 4).map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </div>
      <div className={styles.centeredContainer}>
        <h3 className={styles.centeredTitle}>All Products</h3>
        <div className={styles.titleUnderline}></div>
      </div>
      <div className={styles.products}>
        {products.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
