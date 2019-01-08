import React, { Component } from "react"
import Form from "./Form"
import List from "./List"
import "./assets/styles.css"

class App extends Component{
    constructor(){
        super();
        this.state = {
            names:[]
        }
        this.addName = this.addName.bind(this)
    }

    addName(name){
        this.setState( ps => ({
            names:[name,...ps.names]
        }))
    }

    render(){
        return(
            <div className="container">
                <h1>Favorite People</h1>
                <Form submit={this.addName}/>
                <List names={this.state.names}/>
            </div>
        )
    }
}

export default App