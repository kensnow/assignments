
import React, {Component} from "react"
import Nav from "./Nav"
import GetCharData from "./GetCharData"
import CharDetail from "./CharDetail"
import ErrMsg from "./ErrMsg"
import Loading from "./Loading"
import Sidebar from "./Sidebar"
import {Route} from "react-router-dom"
import "./assets/styles.css"
import Button from "./Button"


const App = () => {

    return(
        <div>
            <GetCharData >
                {({ charInfo, loading, errMsg, next, previous }) => (
                    <Loading loading={loading}>
                        <ErrMsg errMsg={errMsg}>
                            <Nav />
                            <div className="infoView">
                            <Sidebar charInfo={charInfo}/>
                            
                            {/* <CharDetail /> */}
                            <Route path='/:id' component={ (props) => <CharDetail char={props.location.state.char} />} />
                            </div>
                        
                        </ErrMsg>    
                    </Loading>)}
            </GetCharData>            
        </div>
    )
    
}

export default App