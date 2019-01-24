const express = require('express')
const app = express()
const database = require("./database")

require('dotenv').config()

app.use(express.json())

app.get("/bounty",(req, res) => {
    const bountyList = database.find()
    res.status(200).send(bountyList)

})

app.post("/bounty",(req, res) => {
    const addedBounty = database.save(req.body)
    res.status(201).send(addedBounty)
})

app.delete("/bounty/:id",(req, res) => {
    const status = database.findByIdAndRemove(req.params.id)
    status ? res.status(204).send("Delete Complete") : res.status(404).send("Problem with delete")
})

app.listen(process.env.PORT, () => console.log("Server listening on port "+process.env.PORT))