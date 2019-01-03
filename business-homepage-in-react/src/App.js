import React from "react";

import Header from "./Header"
import Section from "./Section"
import Footer from "./Footer"

import "./styles.css"

const App = () => {
    return (
        <div className="mainApp">
            <Header/>
            <Section/>
            <Footer/>
        </div>
    )
}

export default App