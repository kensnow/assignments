import React from "react"



const InfoBox = ({backgroundColor,title,subtitle,information}) => {
    return (
        <div style={{backgroundColor}}>
            <h3>Title: {title}</h3>
            <h4>Subtitle: {subtitle}</h4>
            <p>Information: {information}</p>
        </div>
    )
}


export default InfoBox