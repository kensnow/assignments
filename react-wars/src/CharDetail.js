import React from "react"
import CharLinks from "./CharLinks"
//need api call for each selected charachter

const CharDetail = ({char}) => {
    return (
        <div className="charCard">
            <h3>Name : {char.name}</h3>
            <ul>
                <li>Height: {char.height}cm</li>
                <li>Mass: {char.mass}kg</li>
                <li>Hair: {char.hair_color}</li>
                <li>Eyes: {char.eye_color}</li>
                <li>Gender: {char.gender}</li>
            </ul>    
        </div>
    )
}

export default CharDetail