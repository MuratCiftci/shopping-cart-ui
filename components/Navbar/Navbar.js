import styles from "./Navbar.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { useCart } from "../../hooks/useCart";
import MenuIcon from "@mui/icons-material/Menu";
import MiniCart from "../Cart/MiniCart";
function Navbar() {
  const { cartItems } = useCart([]);

  const [showCart, setShowCart] = useState(false);
  const [sideBar, setsideBar] = useState(false);
  const [menuPosition, setMenuPosition] = useState("-50%");

  function toggleShowMenu() {
    // open or close
    setsideBar(!sideBar);
    if (sideBar) {
      setMenuPosition("-50%");
    } else {
      setMenuPosition("0");
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button
          onClick={() => toggleShowMenu()}
          className={styles.hamburgerMenu}
        >
          <MenuIcon />

          <div style={{ left: menuPosition }} className={styles.sidenav}>
            <a className={styles.closebtn} onClick={() => toggleShowMenu()}>
              {" "}
              &times;
            </a>
            <div className={styles.content}>
              <Link href="/category/[category]" as={"/category/electronics"}>
               Electronics
              </Link>
              <Link href="/category/[category]" as={"/category/jewelery"}>
                Jewelry
              </Link>
              <Link href="/category/[category]" as={"/category/men's clothing"}>
                Men's Fashion
              </Link>
              <Link
                href="/category/[category]"
                as={"/category/women's clothing"}
              >
                Women's Fashion
              </Link>
              <Link href="/cart">My Cart</Link>
            </div>
          </div>
        </button>

        <div className={styles.left}>
          <Link href="/">
            <a>
              <h1 className={styles.brand}>Shoppy</h1>
            </a>
          </Link>
        </div>

        <div className={styles.center}></div>

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
