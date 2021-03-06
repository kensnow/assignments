import React from "react"
import {getPrice,getSeasonColor} from "./helperFunctions"


const Card = ({place,price,timeToGo,backgroundImage}) => {
    let priceIcon = getPrice(price)
    let backgroundColor = getSeasonColor(timeToGo)
    console.log(backgroundImage)
    console.log(backgroundColor)
    return(
        <div >
            <div name="info" className="info-box" style={backgroundColor}>
            <div name="picture" className="pic-box" style={{backgroundImage}}></div>
                <h3>Place: {place}</h3>
                <h5>Price: {priceIcon}</h5>
                <h5>Time to go: {timeToGo}</h5>
            </div>
        </div>

    )
}

export default Card