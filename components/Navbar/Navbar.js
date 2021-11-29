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
  const [menuWidth, setMenuWidth] = useState('0');

  function toggleShowMenu() {
    // open or close
    setsideBar(!sideBar);
    if(sideBar){
      setMenuWidth('40%');
    }else{
      setMenuWidth("0");
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
          
            <div style={{width: menuWidth}} className={styles.sidenav}>
              <a className={styles.closebtn}   onClick={() => toggleShowMenu()}> &times;</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Clients</a>
              <a href="#">Contact</a>
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
