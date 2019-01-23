import React, { Component } from 'react'
import {Route} from "react-router-dom"

import PlanetData from "./PlanetData"
import Loading from "./Loading"
import ErrMsg from "./ErrMsg"
import PlanetList from "./PlanetList"
import PlanetDetail from "./PlanetDetail"

export default class MainView extends Component {
    render() {
        return (
            <div>
                <PlanetData>
                    {({planets, loading, errMsg}) => ( 
                        <Loading loading={loading}>
                            <ErrMsg errMsg={errMsg}>
                                <Route exact path="/" component={routeProps => (<PlanetList planets={planets}/>)}/> 
                                {/* component takes a function, therefore must use a callback to pass args/props to PlanetList */}
                                <Route path="/planets/:index" component={routeProps => (<PlanetDetail {...routeProps.location.state.planet}/>)}/>
                            </ErrMsg>    
                        </Loading>
                    )}
                </PlanetData>
            </div>
        )
    }
}
