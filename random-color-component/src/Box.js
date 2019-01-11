import React from "react"

const Box = ({ color }) => {
    const style = { backgroundColor: `#${color}` }
    return(
        <div className="ColorBox" style={style}></div>
    )
}

export default Box