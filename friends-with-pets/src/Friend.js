import React from "react"
import Pet from "./Pet"

const Friend = ({name,age,pets}) => {
    let petsInfo = pets.map((pet, i) => <Pet key={i}{...pet}/>)
    return (
        <div>
            <h3>Name: {name}</h3>
            <h5>Age: {age}</h5>
            {petsInfo}
        </div>
    )
}

export default Friend