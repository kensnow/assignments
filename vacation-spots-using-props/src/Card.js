import React from "react"
import {getPrice,getSeasonColor} from "./helperFunctions"


const Card = ({place,price,timeToGo,backgroundImage}) => {
    let priceIcon = getPrice(price)
    let seasonColor = getSeasonColor(timeToGo)
    console.log(backgroundImage)
    console.log(seasonColor)
    return(
        <div style={{seasonColor}}>
            <div name="picture" className="pic-box" style={{backgroundImage}}></div>
            <div name="info" className="info-box">
                <h3>Place: {place}</h3>
                <h5>Price: {priceIcon}</h5>
                <h5>Time to go: {timeToGo}</h5>
            </div>
        </div>

    )
}

export default Card