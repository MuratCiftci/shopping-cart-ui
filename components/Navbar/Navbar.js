import styles from "./Navbar.module.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <span className={styles.language}>EN</span>
          <div className={styles.SearchContainer}>
            <input className={styles.input} placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className={styles.center}>
          <h1 >Shoppy</h1>
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
    </div>
  );
}

export default Navbar;
