import React from "react"

const Square = ({color}) => {
    const style = {backgroundColor:color}
    return (
        <div className="square" style={style}></div>
    )
}

export default Square