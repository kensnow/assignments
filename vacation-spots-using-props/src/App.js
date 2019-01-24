import React from "react"
import "./assets/styles.css"
import Card from "./Card"
import cardData from "./vacationCards"
// I'd avoid mapping in app in future projects. Perfectly good for this one
const App = () => {
    const displayCard = cardData.map((info,i) =>  <Card key={i}{...info}/>)
    return (
        <div className="app-div">
            {displayCard}
        </div>
    )
}

export default App