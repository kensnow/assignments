import React, { Component } from "react"
import axios from "axios"
import Box from "./Box"
import "./styles.css"

const colorUrl = "http://www.colr.org/json/color/random"

class App extends Component {
    
    constructor(){
        super();
        this.state = {
            color: null,
            loading: true,
            errMsg: null
        }
        this.getColor = this.getColor.bind(this)
    }
    


    getColor(url){
        return axios.get(url)
            .then(response => this.setState({
                color: response.data.new_color,
                loading: false,
                errMsg: null
            },console.log(response.data)))
            .catch( err => this.setState({errMsg:"Problem getting colors", loading:false}))
            
    }

    componentDidMount(){
        this.getColor(colorUrl)
    }

    render(){
        const {color, loading, errMsg} = this.state
        return(
            <div>
            <Box color={color} />
            </div>
        )
    }
}

export default App