import React, {Component} from "react"
import Squares from "./Squares"

class Button1 extends Component {
    constructor(){
        super();
        this.state = {
          currentStyles:[
            {
            id:"square-1",
            style:[]
            },{
            id:"square-2",
            style:[]
            },{
            id:"square-3",
            style:[]
            },{
            id:"square-4",
            style:[]
            }]
        } //Must be an object!
        this.handleClick = this.handleClick.bind(this)
      }
    handleClick(e){
        let updateStyles = currentStyles.map(style => style ==="backgroundColor:black" ? "backgroundColor:white":"backgroundColor:black" )
        
        this.setState(previousState => ({
            
        })
    }
    
}

export default Button1