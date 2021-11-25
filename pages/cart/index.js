import { useCart } from "../../hooks/useCart";
import CartItem from "../../components/Cart/CartItem";
import styles from "./Cart.module.css";
import Link from "next/link";
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";
const Cart = () => {
  const { total, cartItems, clearCart, checkout, handleCheckout } = useCart();
  return (
    <section className={styles.cart}>
      <div className={styles.container}>
        <div className={styles.cartIntro}>
          <h3 className={styles.cartTitle}>Shopping Cart</h3>
        </div>
        {checkout && (
          <div className={styles.checkout}>
            <p>Checkout successful</p>
            <Link to="/" className={styles.backLink}>
              <a>BUY MORE</a>
            </Link>
          </div>
        )}
        <div className={styles.cartList}>
          {cartItems.length > 0 && (
            <table>
              <tbody>
                <tr>
                  <th style={{ textAlign: "left" }}>Product</th>
                  <th>Amount</th>
                  <th>Price</th>
                  <th></th>
                </tr>

                <CartItem />
              </tbody>
            </table>
          )}

          {cartItems.length === 0 && <p>Nothing in the cart</p>}
        </div>

        <div className={styles.cartActions}>
          <Link href="/" className={styles.backButton}>
            <a><KeyboardBackspaceSharpIcon /> Continue Shopping</a>
          </Link>

          <div className={styles.actionWrapper}>
            <p className={styles.totalCost}>
              Total cost <strong>${total}</strong>
            </p>
            <button
              type="button"
              className={styles.checkoutButton}
              onClick={handleCheckout}
            >
              CHECKOUT
            </button>
            <button
              type="button"
              className={styles.checkoutButton}
              onClick={clearCart}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
