import React, {Component} from "react"

const squares = [
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
    }

]


class Squares extends Component {
    constructor({squares}){
        super();


    }
    
    render(){
        let squareGroup = squares.map((box, i) => {return(<div key={i} {...box} className="square">TDest</div>)})
        return (
            <div id="squares-container">
                {squareGroup}
            </div>
        )
    }
}

export default Squares