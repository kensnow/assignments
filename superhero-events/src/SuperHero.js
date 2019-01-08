import React from "react"

const SuperHero = ({name, alias, superpowers,image,catchphrase,catchPhraseHandler}) => {
    const powersList = superpowers.map((power,i) => <li key={i}>{power}</li>)
    const prepareImg = {backgroundImage:`${image}`}
    return(
        <div className="superhero-card" onClick= {() => catchPhraseHandler(catchphrase)}>
            <div className="card-img" style={prepareImg}></div>
            <div className="infoBox">
            <h3>Name: {name}</h3>
            <h4>Alter Ego: {alias}</h4>
            <h5>Superpowers:</h5>
            <ul>
                {powersList}
            </ul>
            </div>
        </div>
    )
}

export default SuperHero