const http = require('http');

const server = http.createServer((req,res)=>{
    
    if(req.url=='/'){
         res.end('Hello Welcome to the Server')
    }else if(req.url=='/test'){
         res.end('You are now in the test portion of the web page ')
    }else{
         res.end('oops! a bad url there')
    }

})

server.listen(4000)






































