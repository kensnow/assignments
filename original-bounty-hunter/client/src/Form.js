import React, { Component } from 'react'
import SendAxiosRequest from "./SendAxiosRequest"


const initialState = {
    fName:"",
    lName:"",
    living:true,
    price:10,
    type:"jedi"

}

export default class Form extends Component {
    constructor(){
        super();
        this.state = initialState
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange({target: {name, value}}){
        console.log(name + " " + value)
        this.setState({
            [name]:value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        let response = SendAxiosRequest(this.state, "post")

        this.setState(initialState)

    }

    render() {
        const {fName, lName, price} = this.state
        return (
            <div>
                <h3>New Bounty</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} name="fName" type="type" placeholder="Enter First Name" value={fName}/>
                        <input onChange={this.handleChange} name="lName" type="type" placeholder="Enter Last Name" value={lName}/>
                        <input onChange={this.handleChange} name="price" type="number" placeholder="Bounty Value" value={price}/>
                        <select name="type" onChange={this.handleChange}> 
                            <option  value="jedi">Jedi</option>
                            <option  value="sith">Sith</option>
                        </select>
                        <button >Add Bounty</button>
                    </form>    
            </div>
        )
    }
}
