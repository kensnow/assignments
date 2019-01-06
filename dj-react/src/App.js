import React, {Component} from "react"
import Squares from "./Squares"
import ButtonBox from "./ButtonBox"


class App extends Component {
    render(){
        return(
            <div>
                <Squares/>
                <ButtonBox/>
            </div>   
        )
    }
}

export default App