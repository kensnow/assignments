import React from 'react'
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/services" className="nav-link">Servies</Link>
        </nav>
    )

}

export default Nav