import React from 'react'
import SendAxiosRequest from './SendAxiosRequest'
import {withToggler} from "./Toggler"

function BountyCard(props) {
    const { fName, lName, living, price, type, _id, on, toggle } = props
    console.log(_id)
    const style = living ? { border: "2px solid green" } : { border: "2px solid red" }
    return (
        <div style={style}>
            <button onClick={() => { SendAxiosRequest(props, "delete", _id) }}>X</button>
            <h1>{fName} {lName}</h1>
            <h3>Price for head: {price}</h3>
            <h4>Type: {type}</h4>
            <button onClick={() => { }}>Edit</button>

        </div>
    )
}

export default withToggler(BountyCard)
