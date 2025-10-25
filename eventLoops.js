const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        for(let i=0; i<10000; i++){
                for(let j=0; j<10000; j++){
                    console.log(`${i} and ${j}`)
                }
            }
            console.log('woooow homepage')
    }else if(req.url=='/about'){
        console.log('woow about page')
    }else if(req.url=='/contact'){
        console.log('wooooow the contact page')
    }
})

server.listen(8000)


//  for(let i=0; i<10000; i++){
//                 for(let j=0; j<10000; j++){
//                     console.log(`${i} and ${j}`)
//                 }
//             }








































































