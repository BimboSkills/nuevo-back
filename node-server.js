require ("dotenv").config()
const express = require ("express")
const app = express()
const port = process.env.PORT


//servir archivos estaticos
app.use (express.static('public'))



// configurar rutas
app.get ("/", function (req,res){
    res.send("Hello world!!")
})


//poner a escuchar la app a un puerto
app.listen(port, function(){
    console.log('Example app listening on port ${port}')
})
