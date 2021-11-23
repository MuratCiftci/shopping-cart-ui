import styles from "./Product.module.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Link from "next/link";
const Product = ({ item }) => {
  return (
    <>
      <div className={styles.container}>
        <Link href="/[product]" as={`${item.id}`}>
          <a>
            <img src={item.image} className={styles.image}></img>
            <div className={styles.details}>
              <span className={styles.title}>{item.title}</span>
              <div className={styles.price}>
                <div className={styles.priceCard}>£{item.price}</div>
              </div>
              <div className={styles.cart}>
                <AddShoppingCartOutlinedIcon className={styles.cartButton} />
              </div>
              <FavoriteBorderOutlinedIcon className={styles.favorite} />
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Product;
