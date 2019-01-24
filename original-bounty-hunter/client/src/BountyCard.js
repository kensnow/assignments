import React from 'react'

function BountyCard({fName, lName, living, price, type}) {
    const style = living ? {border:"2px solid green"} : {border:"2px solid red"}
    return (
        <div style={style}>
           <h1>{fName} {lName}</h1>
           <h3>Price for head: {price}</h3>
           <h4>Type: {type}</h4>
        </div>
    )
}

export default BountyCard
