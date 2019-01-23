import React from 'react'
import {Link} from "react-router-dom"

function PlanetList({planets}) {
    const planetLinks = planets.map((planet, i) => (
        <li key={i}>
            <Link to={{
                pathname:`/planets/${i}`,
                state:{planet}
            }}>{planet.name}</Link>
        </li>
    ))
    
    return (
        <div>
            {planetLinks}
        </div>
    )
}

export default PlanetList
