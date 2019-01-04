import React from "react";
import styles from "./assets/Header.module.css"

const Header = () => {
    return (
        <header className={styles.head}>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
            </ul>
        </header>
    )
}

export default Header;