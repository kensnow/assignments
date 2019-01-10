import React from "react"

const Form = () => {
    return (
        <div>
            <input name="fName" type="text" placeholder="First Name"/>
            <input name="lName" type="text" placeholder="Last Name"/>
            <input name="email" type="text" placeholder="E-mail"/>
            <input name="phone" type="text" placeholder="Phone"/>
            <input name="activity" type="text" placeholder="Favorite Activity"/>
            <input name="info" type="text" placeholder="Tell us about yourself"/>
            <button>Submit</button>
        </div>
    )


}

export default Form