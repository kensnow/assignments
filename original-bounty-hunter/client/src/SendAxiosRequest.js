import React from 'react'
import axios from "axios"


function SendAxiosRequest(props, requestType) {
    
    axios.post("/bounty", {
        ...props
    })
        .then( response => {
            return response
        })
        .catch( err => {
            return err
        })
}

export default SendAxiosRequest
