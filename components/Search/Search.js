import styles from "./Search.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

import { useProducts } from "../../hooks/useProducts";

const Search = () => {
  const [filter, setFilter] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const products = useProducts().value;
  console.log(searchResults);
  console.log(filter);
  useEffect(() => {
    const filteredProducts = products.filter(
      (product) =>
        product.title.toLowerCase().includes(filter.toLowerCase()) &&
        filter !== ""
    );
    setSearchResults(filteredProducts);
  }, [filter]);
  return (
    <div className={styles.SearchContainer}>
      <div className={styles.inputContainer}>
        {" "}
        <input
          className={styles.searchInput}
          placeholder="Search the product you are looking for "
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <div className={styles.SearchIcon}></div>
      </div>

      <div className={styles.wrapper}>
        {searchResults.map((product) => (
          <Link href="/[product]" as={`/${product.id}`}>
            <a>
              <div className={styles.itemContainer}>
                <div className={styles.item}>
                  <img src={product.image} className={styles.image} />
                  <p className={styles.title}>
                    {" "}
                    {product.title.substring(0, 20) + " ..."}
                  </p>
                  <span className={styles.price}>${product.price}</span>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
