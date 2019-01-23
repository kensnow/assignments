import React from 'react'
import { render } from 'react-dom'

import App from "./App"
import ThemeProvider from "./ThemeProvider"

render(
    <ThemeProvider>
        <App/>
    </ThemeProvider>, 
    document.getElementById("root"))