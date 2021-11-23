import styles from "./Navigation.module.css"
import Link from 'next/link'
import slug from 'slug'
function Navigation() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <ul className={styles.menu}>
                    <li  className={styles.menuItem}><Link href="/category/[category]" as={"/category/electronics"}>Elektronik</Link></li>
                    <li  className={styles.menuItem}><Link href="/category/[category]" as={"/category/jewelery"}>Aksesuar</Link></li>
                    <li  className={styles.menuItem}><Link href="/category/[category]" as={"/category/men's clothing"}>Erkek Giyim</Link></li>
                    <li  className={styles.menuItem}><Link href="/category/[category]" as={"/category/women's clothing"}>Kadın Giyim</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation
