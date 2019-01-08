import React from "react"
import ListItem from "./ListItem"

const List = ({names}) => {
    const nameList = names.map((name, i) => <ListItem key={i} {...name} />)
    return (
        <ul>
            {nameList}
        </ul>
    )

}

export default List