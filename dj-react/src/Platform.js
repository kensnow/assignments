import React, { Component } from "react"
import Controls from "./Controls"
import Grid from "./Grid"

const genRandomNum = () => {return(Math.floor(Math.random() * 255))}


class Platform extends Component {
    
    constructor(){
        super();
        this.state = {
            colors:["white","white","white","white"],
            intervalOn: false
        }
        this.smallTimeHandler = this.smallTimeHandler.bind(this)
        this.partyDjHandler = this.partyDjHandler.bind(this)
        this.proDj1Handler = this.proDj1Handler.bind(this)
        this.proDj2Handler = this.proDj2Handler.bind(this)
        this.bigTime1Handler = this.bigTime1Handler.bind(this)
        this.bigTime2Handler = this.bigTime2Handler.bind(this)
    }

    smallTimeHandler(){
        this.setState( ps => ({
            colors: ps.colors.every(color => color === "black") ? ps.colors.map(color => "white") : ps.colors.map(color => "black")
        }))
    }

    partyDjHandler(){
        this.setState( ps => ({
            colors: ps.colors.map((color, i) => i < ps.colors.length/2 ? "purple" : color)
        }))
    }

    proDj1Handler(){
        this.setState( ps => ({
            colors: ps.colors.map((color, i) => i === 2 ? "blue" : color)
        }))
    }
    proDj2Handler(){
        this.setState( ps => ({
            colors: ps.colors.map((color, i) => i === 3 ? "blue" : color)
        }))
    }

    bigTime1Handler(){
        let genRandomColor = `rgb(${genRandomNum()},${genRandomNum()},${genRandomNum()})`
        this.setState( ps => ({
            colors: ps.colors.map((color, i) => i === 0 ? genRandomColor : color)
        }))
    }

    

    bigTime2Handler(){

        if (this.interval){
            clearInterval(this.interval)
            this.interval = null
        } else {
            this.interval = setInterval(() => {
                let genRandomColor = `rgb(${genRandomNum()},${genRandomNum()},${genRandomNum()})`
                this.setState(ps => ({
                    colors: ps.colors.map((color, i) => i === 1 ? genRandomColor : color)
                }))
            }, 1000)
        }        
    }

    bigTime3Handler(){
        
    }

    render (){
        const {colors} = this.state;
        return (
            <div className="master">
                <Controls smallTimeHandler={this.smallTimeHandler} partyDjHandler={this.partyDjHandler} proDj1Handler={this.proDj1Handler} proDj2Handler={this.proDj2Handler} bigTime1Handler={this.bigTime1Handler} bigTime2Handler={this.bigTime2Handler}/>
                <Grid colors={colors}/>
            </div>
        )
    }
}

export default Platform