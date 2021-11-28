import styles from "./Product.module.css";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Link from "next/link";
import { useCart } from "../../hooks/useCart";
const Product = ({ item }) => {
  const { addProduct, cartItems, increase } = useCart();

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <>
      <div className={styles.container}>
        <Link href="/[product]" as={`/${item.id}`}>
          <a>
            <img src={item.image} className={styles.image}></img>
            <div className={styles.details}>
              <span className={styles.title}>{item.title}</span>
              <div className={styles.price}>
                <div className={styles.priceCard}>£{item.price}</div>
              </div>
            </div>
          </a>
        </Link>
        <div className={styles.cart}>
          {isInCart(item) && (
            <button
              className={styles.productButton}
              onClick={() => increase(item)}
            >
              <AddShoppingCartOutlinedIcon className={styles.cartIcon} />
            </button>
          )}
          {!isInCart(item) && (
            <button
              className={styles.productButton}
              onClick={() => addProduct(item)}
            >
              {" "}
              <AddShoppingCartOutlinedIcon className={styles.cartIcon} />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
