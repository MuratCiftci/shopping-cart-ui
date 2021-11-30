import styles from "./Navigation.module.css"
import Link from 'next/link'
function Navigation() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <ul className={styles.menu}>
                    <li  className={styles.menuItem}><Link href="/category/[category]" as={"/category/electronics"}>Electronics</Link></li>
                    <li  className={styles.menuItem}><Link href="/category/[category]" as={"/category/jewelery"}>Jewelry</Link></li>
                    <li  className={styles.menuItem}><Link href="/category/[category]" as={"/category/men's clothing"}>Men's Fashion</Link></li>
                    <li  className={styles.menuItem}><Link href="/category/[category]" as={"/category/women's clothing"}>Women's Fashion</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation
