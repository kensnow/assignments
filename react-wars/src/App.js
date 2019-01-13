import React from "react"
import Nav from "./Nav"
import GetCharData from "./GetCharData"
import CharLinks from "./CharLinks"
import ErrMsg from "./ErrMsg"
import Loading from "./Loading"


const App = () => {
    return(
        <div>
            <GetCharData>
                {({charInfo,loading,errMsg}) => (
                    <Loading loading={loading}>
                        <ErrMsg errMsg={errMsg}>
                            <CharLinks charInfo={charInfo}/>
                        </ErrMsg>    
                    </Loading>)}
            </GetCharData>
        </div>
    )
    
}

export default App