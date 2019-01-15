import React from "react"
import CharLinks from "./CharLinks"

//component for housing the char links

const Sidebar = ({charInfo}) => {
    return(
        <div className="sideBar">
            <CharLinks charInfo={charInfo}/>
        </div>
        
    )
}

export default Sidebar