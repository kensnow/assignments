import React from "react"

const HitCard = ({name, image}) => {
    console.log(name, image)
    const style = {backgroundImage:`url(${image})`}
    return(
        <div className="picture" style={style}>
       
            <div className="name-tag">{name}</div>
        </div>
    )

}

export default HitCard