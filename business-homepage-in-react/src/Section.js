import React from "react";
import Description from "./Description.js"
import Product from "./Product.js"
import styles from "./assets/Section.module.css"

const Section = () => {
    return (
        <div className={styles.products}>
            <Description/>
            <Product/>
        </div>
    )
}

export default Section