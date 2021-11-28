import { useEffect, useState, useRef } from "react";
import Product from "../Product/Product";
import styles from "./Products.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Products = ({ products }) => {
  const [sortedByRate, setSortedByRate] = useState([]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

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
      <Carousel>
        {products.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </Carousel>
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
