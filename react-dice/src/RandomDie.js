import React from "react"

const RandomDie = () => {
    const diceRoll = Math.floor(Math.random()  * 6)
    return (diceRoll)
}

export default RandomDie