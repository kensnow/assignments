import React, { Component } from "react"
import SuperHero from "./SuperHero"
import heroList from "./assets/superHeros"
import "./assets/styles.css"

class App extends Component {

    constructor (){
        super()
        this.catchPhraseHandler = this.catchPhraseHandler.bind(this)
    }

    catchPhraseHandler = (catchphrase) => {
        alert(catchphrase)
    }
    render(){
        const SuperGroup = heroList.map((hero, i) => <SuperHero key={i} {...hero} catchPhraseHandler={this.catchPhraseHandler} />)

        return (
            <div className="app">
                {SuperGroup}
            </div>
        )
    }
}

export default App