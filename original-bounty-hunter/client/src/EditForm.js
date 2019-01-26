import React from 'react'

function EditForm(props) {
    { fName, lName, living, price, type, _id, on, toggle } = props
    return (
        <div style={style}>
            <button onClick={() => { SendAxiosRequest(props, "delete", _id) }}>X</button>
            <input onChange={this.handleChange} name="fName" type="type" placeholder="Enter First Name" value={fName}/>
            <input onChange={this.handleChange} name="lName" type="type" placeholder="Enter Last Name" value={lName}/>
            <input onChange={this.handleChange} name="price" type="number" placeholder="Bounty Value" value={price}/>
            <select name="type" onChange={this.handleChange}> 
                <option  value="jedi">Jedi</option>
                <option  value="sith">Sith</option>
            </select>
            <button onClick={() => { }}>Edit</button>

        </div>
    )
}

export default EditForm
