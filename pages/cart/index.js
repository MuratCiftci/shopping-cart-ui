import { useCart } from "../../hooks/useCart";
import CartItem from "../../components/Cart/CartItem";
import styles from "./Cart.module.css";
import Link from "next/link";
import Head from "next/head";
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";

const Cart = () => {
  const { total, cartItems, clearCart, checkout, handleCheckout } = useCart();
  return (
    <section className={styles.cart}>
      <Head>
        <title>My Cart</title>
        <meta name="description" content="Shop Better" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.cartIntro}>
          <h3 className={styles.cartTitle}>Shopping Cart</h3>
        </div>
        {checkout ? (
          <div className={styles.checkout}>
            <p className={styles.checkoutTitle}>Checkout successful</p>
            <Link href="/" className={styles.backLink}>
              <a>BUY MORE</a>
            </Link>
          </div>
        ) : (
          <div className={styles.cartList}>
            {cartItems.length > 0 && (
              <table>
                <tbody>
                  <tr className={styles.cartTable}>
                    <th style={{ textAlign: "left" }}>Product</th>
                    <th>Amount</th>
                    <th>Price</th>
                  </tr>

                
                    {cartItems.map((product) => (
                      <CartItem product={product} key={product.id} />
                    ))}
                 
                </tbody>
              </table>
            )}

            {cartItems.length === 0 && <p>Nothing in the cart</p>}
          </div>
        )}

        <div className={styles.cartActions}>
          <Link href="/" className={styles.backButton}>
            <a>
              <KeyboardBackspaceSharpIcon /> Continue Shopping
            </a>
          </Link>

          <div className={styles.actionWrapper}>
            <p className={styles.totalCost}>
              Total cost <strong>${total}</strong>
            </p>
            <button
              type="button"
              className={styles.actionButton}
              onClick={handleCheckout}
            >
              CHECKOUT
            </button>
            <button
              type="button"
              className={styles.actionButton}
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
