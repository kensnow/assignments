import React from 'react'
import BountyCard from "./BountyCard"

function HitList({hitList}) {
    const cardArray = hitList.map((target,i) => <BountyCard key={i} {...target}/>)
    return (
        <div>
            {cardArray}
        </div>
    )
}

export default HitList
