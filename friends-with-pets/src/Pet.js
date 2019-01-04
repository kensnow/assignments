import React from "react"

const Pet = ({name,breed}) => {
   
    return(
        <ul>
            <li>Name: {name}</li>
            <li>Breed: {breed}</li>
        </ul>
    )
}

export default Pet
