import React from "react"

//takes props for number dice, then returns die

const Die = ({roll, saved, id, dieSaved}) => {
    const diceFaces = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];
    const style = (saved) ? {color:"green"} : {color:"black"}
    return(
        <div onClick={() => {dieSaved({id})}} style={style} className="die" id={id} dangerouslySetInnerHTML={{__html:(diceFaces[roll])}}></div>
    )
}

export default Die