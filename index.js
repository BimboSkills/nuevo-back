require ("dotenv").config()
const http = require ("http")

function requestController(req,res) {

    const url = req.url
    const method = req.method
    console.log({url, method})

    if (method === "GET" && url ==="/") {
        res.setHeader ("Content-type", "text/html", "charset=utf-8")
        res.write ("<h1> Hola mundo desde la pagina PRINCIPAL </h1>")
        res.end()
        return
    }

    if (method === "GET" && url === "/about") {
        res.setHeader("Content-type", "text/html")
        res.write("<h1>Hola mundo desde la pagina ABOUT</h1>")
        res.end()
        return
    }

    res.setHeader("Content-type", "text/html; charset=utf-8")
    res.write ("<h1>Pagina no encontrada</h1>")
    res.end()
}
// Config del server
const server = http.createServer(requestController)

const PORT = process.env.PORT
server.listen(PORT, function() {
    console.log("Aplicacion corriendo en puerto: " + PORT)
})