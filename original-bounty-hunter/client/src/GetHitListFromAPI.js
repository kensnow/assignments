import BountyCard from "./BountyCard"
import axios from "axios"

import React, { Component } from 'react'

export default class GetHitListFromAPI extends Component {
    constructor(){
        super();
        this.state = {
            hitList: [],
            loading: true,
            errorMsg: null
        }
        this.getHitList = this.getHitList.bind(this)
    }

    getHitList(){
        return axios.get("/bounty")
            .then(response => this.setState({
                hitList: response.data,
                loading:false,
                errorMsg:false

            }))
            .catch(err => this.setState({
                errorMsg:"Shits Fucked",
                loading:false
            }))
    }

    componentDidMount(){
        this.getHitList()
    }

    render() {
        const blob = JSON.stringify(this.state.hitList)
        console.log(blob)
        return (
            this.props.children(this.state)
        )
    }
}

