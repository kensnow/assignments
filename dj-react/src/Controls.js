import React from "react"

const Controls = ({smallTimeHandler, partyDjHandler, proDj1Handler, proDj2Handler, bigTime1Handler, bigTime2Handler}) => {
    return (
        <div className="button-panel"> 
            <button onClick={smallTimeHandler}>Small Time</button>
            <button onClick={partyDjHandler}>Party DJ</button>
            <button onClick={proDj1Handler}>Pro Dj 1</button>
            <button onClick={proDj2Handler}>Pro Dj 2</button>
            <button onClick={bigTime1Handler}>Big Time 1</button>
            <button onClick={bigTime2Handler}>Big Time 2</button>
            <button>Big Time 3</button>
            <button>Big Time 4</button>
        </div>
    )
}

export default Controls