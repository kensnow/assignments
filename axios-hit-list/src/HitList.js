import React from "react"
import HitCard from "./HitCard"


const HitList = ({targets}) => {

    const targetGroup = targets.map( (target, i) => <HitCard key={i} {...target}/>)
    return (
        <div className="card-group">
            
            {targetGroup}
        </div>
    )
}

export default HitList