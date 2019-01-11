import React, { Component } from "react"
import HitCard from "./HitCard"

class HitList extends Component {
    constructor(){
        super();
        this.state = {

        }

    }


    render(){
        return(
            <div>
                <div>HitList test</div>
                <HitCard />
            </div>
        )
    }

}

export default HitList