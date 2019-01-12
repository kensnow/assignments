import React, { Component } from "react"

import axios from "axios"

//this component gets an updated hitlist and sends to HitList for rendering

const hitListUrl = "https://s3.amazonaws.com/v-school/data/hitlist.json";

class HitList extends Component {
    constructor(){
        super();
        this.state = {
            targets: [],
            loading: true,
            errMsg: null
        }
        this.getHitList = this.getHitList.bind(this)

    }

    getHitList(url){
        return axios.get(url)
            .then( response => this.setState({
                targets: response.data,
                loading: false,
                errMsg: null
            }))
            .catch( err => this.setState({
                loading: false,
                errMsg:"Something went wrong with yo App"
            }))
    }

    componentDidMount(){
        this.getHitList(hitListUrl)
    }
    
    render(){
        
        return(

            this.props.children(this.state)
        )
    }

}

export default HitList