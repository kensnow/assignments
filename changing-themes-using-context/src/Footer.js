import React from 'react'
import {withThemeContext} from "./ThemeProvider"
const theme = "theme1"

function Footer() {
    return (
        <div className={`footer ${theme}`}>
            The Footer's Footer!
        </div>
    )
}

export default withThemeContext(Footer)
