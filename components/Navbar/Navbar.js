import styles from "./Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { style } from "@mui/system";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h1>Shoppy</h1>
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
          <div className={styles.MenuItem}>
            <Badge badgeContent={4} color="primary"></Badge>
            <ShoppingCartIcon />
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
