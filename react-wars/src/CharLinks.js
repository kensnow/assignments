import React from "react"

//need to process names to dynamically create links

const CharLinks = ({charInfo}) => {
    const charLinkGroup = charInfo.map((char, i) => {return(<button key={i}>{char.name}</button>)})
    return(
        charLinkGroup
    )
}


export default CharLinks