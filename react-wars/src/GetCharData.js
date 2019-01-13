import React, { Component } from 'react'
import axios from "axios"

const apiUrl = "https://swapi.co/api/people/"

class GetCharData extends Component {
    constructor(){
        super();
        this.state = {
            charInfo:[],
            loading: true,
            errMsg: false
        }
        this.getCharDataFromServer = this.getCharDataFromServer.bind(this)
    }


    getCharDataFromServer(url){
        return axios.get(url)
            .then( response => 
                this.setState({
                    charInfo: response.data.results,
                    loading: false,
                    errMsg: false
        
            }))
            .catch( errMsg =>
                this.setState({

                    loading:false,
                    errMsg: "Problem Fetching Data"
            }))
  
    }

    componentDidMount(){
        //insert axios function
        this.getCharDataFromServer(apiUrl)

    }

    render(){
        return(
            this.props.children(this.state)
        )
    }

}

export default GetCharData
