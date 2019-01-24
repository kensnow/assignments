import React from 'react'
import GetHitListFromAPI from "./GetHitListFromAPI"
import HitList from './HitList'
import Loading from "./Loading"
import ErrorMsg from "./ErrorMsg"



function BountyListSection() {
    return (
        <div>
            <GetHitListFromAPI>
                {({hitList, loading, errorMsg}) => (
                    <Loading loading={loading}>
                        <ErrorMsg errorMsg={errorMsg}>
                                <HitList hitList={hitList} />
                        </ErrorMsg>
                    </Loading>
                )}
            </GetHitListFromAPI>
        </div>
    )
}

export default BountyListSection
