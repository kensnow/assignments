import React from 'react'
import axios from "axios"


function SendAxiosRequest(props, requestType, id) {
    if (requestType === "post"){
        axios.post("/bounty", {
            ...props
        })
            .then( response => {
                return response
            })
            .catch( err => {
                return err
            })
    } else if (requestType === "delete"){
        console.log("request type is " + requestType)
        axios.delete("/bounty/" + id)
            .then( response => {
                return response
            })
            .catch( err => {
                return err
            })
    } else if (requestType === "put"){
        axios.put("/bounty/" + id, {
            ...props
        })
            .then(response => {
                return response
            })
            .catch ( err => {
                return err
            })
    }

}

export default SendAxiosRequest
