import React from "react"
import Friend from "./Friend"
import friendsData from "./friendsData"


const FriendList = () => {
    let friendInfo = friendsData.map((info, i) => <Friend key={i} {...info}/>)
    // console.log (friendInfo)    
    return(
        <div>
            {friendInfo}}
        </div>

    )
}

export default FriendList