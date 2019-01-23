import React from 'react'
import {Consumer} from "./ThemeProvider"

function Button({title,...props}) {
    return (
        <Consumer>
        {value => (
            <button onClick={value.changeTheme} className={value.lightTheme ? "light" : "dark"} {...props}>{title}</button>)}    
            
        </Consumer>
    )
}

export default Button
