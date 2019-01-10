import React, { Component } from "react"
import Form from "./Form"
import BadgeList from "./BadgeList"


class App extends Component {

    render(){
        return(
            <div>
                <Form/>
                <BadgeList/>
            </div>
        )
    }
}

export default App