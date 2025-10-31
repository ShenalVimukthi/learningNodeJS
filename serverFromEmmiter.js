const http = require('http')

const server = http.createServer()

server.on('request',(req,res)=>{
    res.end('server running from event emmitter method')
    console.log( req.statusCode)
})

server.listen(8000)