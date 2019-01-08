import React, {Component} from "react"

class Form extends Component {
    constructor(){
        super();
        this.state = {
            fName: "",
            lName: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange({target: {name, value}}){
        this.setState({
            [name]:value,
        })
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.submit(this.state)
        this.setState({
            fName: "",
            lName: ""
        })
        e.target.reset()
    }

    render(){
        const {fName,lName} = this.state //destructure state
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" name="fName" value={fName} type={fName} placeholder="Bob"/>
                <input onChange={this.handleChange} type="text" name="lName" value={lName} type={lName} placeholder="Barker"/>
                <button>Submit</button>
            </form>
        )

    }
}

export default Form