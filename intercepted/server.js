const express = require('express')
require ('dotenv').config()

const app = express()

const middleware = require('./index.js')

app.use(express.json(), middleware)

const user = {
    username: "bobby1",
    password: "12345"
}

app.get(('/'),(req, res) => {
    const reply = middleware.logger(req, res)
    res.send(console.log("reply"))
})

app.post(('/login'),(req, res) => {
    const credentials = req.body

    if(credentials.username !== user.username){
        throw new Error("Incorrect Username")
        middleware.errHandler(err, req, res, next)
    }
    const login = middleware.errHandler(req,res)
    
})

app.listen(process.env.PORT, () => console.log("Listening on port " + process.env.PORT))