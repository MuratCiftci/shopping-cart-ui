import styles from "./Product.module.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Link from "next/link";
import { useCart } from "../../hooks/useCart";
const Product = ({ item }) => {
  const { addProduct, cartItems, increase } = useCart();

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };
  

  return (

      <div className={styles.container}>
        <Link href="/[product]" as={`/${item.id}`}>
          <a>
            <img src={item.image} className={styles.image}></img>
            <div className={styles.details}>
              <span className={styles.title}>
                {item.title.split(" ").slice(0, 4).join(" ")}
              </span>
            </div>
            <div className={styles.price}>£{item.price}</div>
          </a>
        </Link>
        <div className={styles.cart}>
          {isInCart(item) && (
            <button
              className={styles.productButton}
              onClick={() => increase(item)}
            >
              <AddShoppingCartIcon className={styles.cartIcon} />
            </button>
          )}
          {!isInCart(item) && (
            <button
              className={styles.productButton}
              onClick={() => addProduct(item)}
            >
              {" "}
              <AddShoppingCartIcon className={styles.cartIcon} />
            </button>
          )}
        </div>
      </div>
  );
};

export default Product;
