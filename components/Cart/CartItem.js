import { useCart } from "../../hooks/useCart";
import  Link  from "next/link";
import styles from "./CartItem.module.css";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const CartItem = ({ product }) => {
  const { increase, decrease, removeProduct } = useCart();

  return (
    <tr className={styles.cartTable}>
      <td>
        <Link href="/[product]" as={`${product.id}`}>
          <a>
            <div className={styles.cartProduct}>
              <div className={styles.productImg}>
                <img src={product.image} alt="" />
              </div>

              <div className={styles.cartProductContent}>
                <h3> {product.title.substring(0, 20) + " ..."}</h3>
              </div>
            </div>
          </a>
        </Link>
      </td>
      <td>
        <div className={styles.quantity}>
          <button
            type="button"
            onClick={() => increase(product)}
            className={styles.quantityButton}
          >
            <AddIcon />
          </button>
          <span>{product.quantity}</span>
          {product.quantity > 1 && (
            <button
              type="button"
              onClick={() => decrease(product)}
              className={styles.quantityButton}
            >
              <RemoveIcon />
            </button>
          )}
          {product.quantity === 1 && (
            <button type="button" className={styles.quantityButton}>
              <RemoveIcon />
            </button>
          )}
        </div>
      </td>
      <td>${product.price}</td>
      <td className={styles.removeProduct}>
        <DeleteOutlineSharpIcon
          className={styles.removeIcon}
          onClick={() => removeProduct(product)}
        />
      </td>
    </tr>
  );
};

export default CartItem;
