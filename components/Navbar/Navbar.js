import styles from "./Navbar.module.css";
import { CartContext } from "../../context/CartContext";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Link from "next/link";
import { useContext, useState } from "react";
import { getCookie } from "../../lib/useCookie";
import MiniCart from "../Cart/MiniCart";
function Navbar() {
  const { cartItems } = useContext(CartContext);

  const [showCart, setShowCart] = useState(false);
  console.log(showCart);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Link href="/">
            <a>
              <h1>Shoppy</h1>
            </a>
          </Link>
        </div>
        <div className={styles.center}>
          <div className={styles.SearchContainer}>
            <input
              className={styles.input}
              placeholder="Search the product you are looking for "
            />
            <div className={styles.SearchIcon}></div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.MenuItem}>REGISTER</div>
          <div className={styles.MenuItem}>SIGN IN</div>
          <div
            className={styles.MenuItem}
            onMouseEnter={() => setShowCart(true)}
            onMouseLeave={() => setShowCart(false)}
          >
            <div className={styles.cartCount}>{cartItems.length}</div>
            <Link href="/cart">
              <ShoppingCartIcon />
            </Link>
            {showCart && <MiniCart />}
          </div>
        </div>
      </div>
      <div className={styles.colorfulBand}>
        <div className={styles.band1}></div>
        <div className={styles.band2}></div>
        <div className={styles.band3}></div>
        <div className={styles.band4}></div>
        <div className={styles.band5}></div>
        <div className={styles.band6}></div>
      </div>
    </div>
  );
}

export default Navbar;
