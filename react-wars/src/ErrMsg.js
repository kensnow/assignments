import React from "react"

const ErrMsg = ({errMsg,children}) => {

    return(
        errMsg ? <div>{errMsg}</div> : children
    )

}

export default ErrMsg