import React from "react"
import {Link, Route} from "react-router-dom"
//need to process names to dynamically create links

//issue... using .map to assign a key.  Will reset to 0 when runnning through a new group of links 
// (ie. clicking next getting more people)
//better solution will be building regex to get last number from the url property: "url": "https://swapi.co/api/people/19/"

const CharLinks = ({charInfo}) => {
    
    const charLinkGroup = charInfo.map( char => {
        const parsedArr = char.url.split("/");
        const id =  parsedArr[5];
        return(<Link to={{

            pathname:`/${id}`,
            state:{char}

            }} key={id}>{char.name}</Link>
    )})
    
    return(
        charLinkGroup
    )
}


export default CharLinks