import styles from "./Navigation.module.css"
function Navigation() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <ul className={styles.menu}>
                    <li className={styles.menuItem}>Elektronik</li>
                    <li className={styles.menuItem}>Moda</li>
                    <li className={styles.menuItem}>Ev</li>
                    <li className={styles.menuItem}>Bahçe</li>
                    <li className={styles.menuItem}>Oyuncak</li>
                    <li className={styles.menuItem}>Kozmetik</li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation
