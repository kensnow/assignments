import React from 'react'

function ErrorMsg({ErrorMsg,children}) {
    return (  
        ErrorMsg ? <div>Error Getting Data</div> : children
    )
}

export default ErrorMsg
