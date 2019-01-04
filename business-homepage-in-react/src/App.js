import React from "react";

import Header from "./Header"
import Section from "./Section"
import Footer from "./Footer"

import styles from "./assets/App.module.css"

const App = () => {
    return (
        <div className={styles.app}>
            <Header/>
            <Section/>
            <Footer/>
        </div>
    )
}

export default App