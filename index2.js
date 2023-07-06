require ('dotenv').config()
const express = require ("express")
const app = express()
const port = process.env.PORT

//servir archivos estaticos
app.use (express.static("public") {
    res.send ("Hello World!")
})
app.get ("/", function (req,res){
    res.send("Hello World!")
})