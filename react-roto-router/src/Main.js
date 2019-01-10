import React from 'react'
import {Switch, Route} from "react-router-dom"
import Home from "./Home"
import Services from "./Services"
import About from "./About"


const Main = () => {

    return(
        <div className="main">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/services" component={Services} />
            </Switch>
        </div>
    )

}

export default Main