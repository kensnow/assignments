import React, { Component } from 'react'
import axios from "axios"

const apiUrl = "https://swapi.co/api/people/"

class GetCharData extends Component {
    constructor(props){
        super(props);
        this.state = {
            charInfo:[],
            loading: true,
            errMsg: false,
            next: "",
            previous: "",
            url: "https://swapi.co/api/people/"
        }
        this.getCharDataFromServer = this.getCharDataFromServer.bind(this)
        this.nextClickHandler = this.nextClickHandler.bind(this)
        this.prevClickHandler = this.prevClickHandler.bind(this)
    }


    getCharDataFromServer(url){
        return axios.get(url)
            .then( response => 
                this.setState({
                    charInfo: response.data.results,
                    loading: false,
                    errMsg: false,
                    next: response.data.next,
                    previous: response.data.previous,
                    url:url
        
            }))
            .catch( errMsg =>
                this.setState({

                    loading:false,
                    errMsg: "Problem Fetching Data"
            }))
  
    }


    nextClickHandler(){
        this.getCharDataFromServer(this.state.next)
    }

    prevClickHandler(){
        this.getCharDataFromServer(this.state.previous)
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

const nextButton = () => {
    return (
        <button onClick=><button>
    )
}