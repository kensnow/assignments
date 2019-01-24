
const express = require("express")

require('dotenv').config()

const Database = require("./trails")
const app = express()

app.use(express.json())

app.get("/trails", (req, res) => {

    res.send(Database.find())
    
})

app.get("/trails/:id", (req, res) => {
   
    let id = req.params.id
  
    res.status(200).send(Database.find(id))
 
})


app.post("/trails", (req, res) => {
    //insert save database funtion
    res.status(200).send(Database.save(req.body))
})

app.delete("/trails/:id", (req, res) => {
    let id = req.params.id
    Database.findByIdAndRemove(id) ? res.status(204).send("Delete Completed") : res.send("problem deleting " + id)

})

app.put("/trails/:id", (req, res) => {
    let id = req.params.id
    let payload = req.body
    let response = Database.findByIdAndUpdate(id, payload)
    res.status(200).send(response)
})

app.listen(process.env.PORT, () => console.log("server is listening!"))
