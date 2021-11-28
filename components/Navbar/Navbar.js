import styles from "./Navbar.module.css";
import { CartContext } from "../../context/CartContext";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { getCookie } from "../../lib/useCookie";
import MiniCart from "../Cart/MiniCart";
import { useCart } from "../../hooks/useCart";
import Search from "../Search/Search";

function Navbar() {
  const { cartItems } = useCart();
 
  const [showCart,setShowCart] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Link href="/">
            <a>
              <h1 className={styles.brand}>Shoppy</h1>
            </a>
          </Link>
        </div>

        <div className={styles.center}>
          <Search/>
        </div>

        <div className={styles.right}>
          <button className={styles.menuButton}>Register</button>
          <button className={styles.menuButton}>Login</button>
          <div
            className={styles.menuItem}
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
    </div>
  );
}

export default Navbar;
