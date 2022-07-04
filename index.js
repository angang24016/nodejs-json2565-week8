const http = require('http') //1.Import http module 
const hostname = 'localhost'

const { loadUser } = require("./user_model")

const port = process.env.PORT || 4000 //2.Setting up port

const server = http.createServer((req, res) => { //3.Creating http server
    const jsonContent = JSON.stringify(loadUser())
    res.end(jsonContent)

})

server.listen(port, hostname, () => {   //4.Listening to http sever
    console.log(`Server running at http://${hostname}:${port}`)
})