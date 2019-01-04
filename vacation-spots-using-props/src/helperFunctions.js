const getPrice = (price) => {
    if (price <= 500){
        return "$"
    } else if (price > 500 && price <= 1000){
        return "$$"
    } else {
        return "$$$"
    }
}
const getSeasonColor = (timeToGo) => {
    if (timeToGo === "Spring"){
        return {backgroundColor: "lightgreen"}
    } else if (timeToGo === "Summer"){
        return {backgroundColor: "gold"}
    } else if (timeToGo === "Fall"){
        return {backgroundColor: "maroon"}
    } else {
        return {backgroundColor: "lightblue"}
    }
}

export { getPrice,
getSeasonColor}