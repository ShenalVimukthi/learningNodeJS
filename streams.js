// writing a big file 
const http = require('http')
const {writeFileSync,writeFile,createReadStream,readFile} = require('fs')
const server = http.createServer((req,res)=>{
        try{
                 const getRead = readFile('./files/bigData.txt','utf8',(errdata,getData)=>{
                        if(errdata){
                               res.end(errdata)
                        }else{
                               res.end(getData)
                        }
                 })
                
        }catch(e){
                console.log(e)
        }
       
})


server.listen(8500)

// const reader = createReadStream('./files/bigData.txt')

// reader.on('data',(res)=>{
//         console.log(res)
// })






