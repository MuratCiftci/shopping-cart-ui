import { useCart } from "../../hooks/useCart";
import { styles } from "./CartItem.module.css";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
const CartItem = () => {
  const { cartItems, increase, decrease, removeProduct } = useCart();

  return (
    <>
      {cartItems.map((product) => (
        <tr key={product.id}>
          <td>
            <div className={styles.cartProduct}>
              <div className={styles.productImg}>
                <img src={product.image} alt="" />
              </div>

              <div className={styles.cartProductContent}>
                <h3>{product.name}</h3>
              </div>
            </div>
          </td>
          <td>
            <div className={styles.quantity}>
              <button
                type="button"
                onClick={() => increase(product)}
                className={styles.quantityButton}
              >
                +
              </button>
              <span>{product.quantity}</span>
              {product.quantity > 1 && (
                <button
                  type="button"
                  onClick={() => decrease(product)}
                  className={styles.quantityButton}
                >
                  -
                </button>
              )}
              {product.quantity === 1 && (
                <button
                  type="button"
                  onClick={() => removeProduct(product)}
                  className={styles.quantityButton}
                >
                  X
                </button>
              )}
            </div>
          </td>
          <td>${product.price}</td>
          <DeleteOutlineSharpIcon onClick={() => removeProduct(product)} />
        </tr>
      ))}
    </>
  );
};

export default CartItem;
