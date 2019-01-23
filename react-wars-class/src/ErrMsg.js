import React from 'react'

function ErrMsg({errMsg, children}) {
    return (
        errMsg ? <p>{errMsg}</p> : children
    )
}

export default ErrMsg
