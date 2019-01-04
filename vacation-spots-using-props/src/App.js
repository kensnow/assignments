import React from "react"
import "./assets/styles.css"
import Card from "./Card"
import cardData from "./vacationCards"

const App = () => {
    const displayCard = cardData.map((info,i) =>  <Card key={i}{...info}/>)
    return (
        <div className="app-div">
            {displayCard}
        </div>
    )
}

export default App