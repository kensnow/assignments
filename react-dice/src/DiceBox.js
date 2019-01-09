import React, { Component } from "react"
import Die from "./Die"
import Button from "./Button"
import RandomDie from "./RandomDie"
//track state here
//needs to track current and previous rolls
//roll button

class DiceBox extends Component{
    constructor(){
        super();
        this.state = {
            dice:Array(5).fill(
                {
                roll:RandomDie(),
                saved:false
                }
            ),
            count: 3
        }
        this.dieClickHandler = this.dieClickHandler.bind(this)
        this.rollClickHandler = this.rollClickHandler.bind(this)
    }

    dieClickHandler({id}){
        this.setState( ps => (
            {
            dice: ps.dice.map((die,i) => (i === +id) ? {...die, saved: !die.saved} : die),
            }))

    }

    rollClickHandler(e){
        if (this.state.count > 0){
            this.setState( ps => ({
                dice: ps.dice.map( die => 
                    (die.saved) ? die : {...die, roll: RandomDie()}
                ),
                count: ps.count - 1
            }))
        } else {
            this.setState( ps => ({
                dice: ps.dice.map(die => ({...die, saved:false})),
                count: 3
            }))
        }
    }

    render(){
        const {dice, count } = this.state;
        const diceComponents = dice.map((die, i) => <Die key={i} {...die} dieSaved={this.dieClickHandler} id={i}/>)
        return(
            <div className="diceBox">
                {count === 3 ? <h3>Click Roll to begin!</h3> : diceComponents }
                
                <Button onClick={this.rollClickHandler}/>
            </div>
        )
    }
}

export default DiceBox