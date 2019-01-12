import React from "react"
import HitList from "./HitList"
import GetHitList from "./GetHitList"
import Loading from "./Loading"
import ErrorHandler from "./ErrorHandler";
import "./assets/styles.css"

const App = () => {
    return(
        <div>
            <GetHitList>
                {({targets, loading, errMsg}) => (
                <Loading loading={loading}>
                    <ErrorHandler errMsg={errMsg}>
                        <h1>The Hit List</h1>
                        <HitList targets={targets}/>
                    </ErrorHandler>   
                </Loading>
                )}
            </GetHitList>
        </div>
    )

}

export default App