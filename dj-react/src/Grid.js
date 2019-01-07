import React from "react"
import Square from "./Square"



const Grid = ({colors}) => {
    const colorGroup = colors.map((color,i) => <Square key={i} color={color}/>) 
    return (
        <div className="box-container">
            {colorGroup}
        </div>
    )
}

export default Grid