import React from "react"
import "./assets/styles.css"
import InfoBox from "./InfoBox"

import datas from "./data"

const App = () => {
    const infoItems = datas.map(info => <InfoBox{...info}/>)
    return(
        <div>
            {infoItems}
            
        </div>
    )
}

export default App