import React from 'react'

function PlanetDetail({name, gravity}) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{gravity}</p>
        </div>
    )
}

export default PlanetDetail
