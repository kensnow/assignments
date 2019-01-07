import React, {Component} from "react"
import Squares from "./Squares"

class Button1 extends Component {
    constructor(){
        super();
        this.state = {
            backgroundColor:"white"
        } //Must be an object!
        this.handleClick = this.handleClick.bind(this)
      }
    handleClick(e){
        if (this.state.backgroundColor === "black"){
            this.setState({backgroundColor:"white"})
         } else {
        this.setState({backgroundColor:"black"})
        }
    }
    render(){
        return (
            <div className="container">
                <div style={this.state} className="party-box"></div>
                <div style={this.state} className="party-box"></div>
                <div style={this.state} className="party-box"></div>
                <div style={this.state} className="party-box"></div>
                <button onClick={this.handleClick}>Dj React!</button>
             </div>
        )
       
    }
    
}

export default Button1