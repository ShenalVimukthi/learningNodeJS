const {readFile,writeFile} = require('fs')

// readFile('./content/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err.message)
//         return;
//     }
//     console.log(result)
// })

readFile('./content/first.txt','utf8',(errorData,resultData)=>{
    if(errorData){
        console.log(errorData.message)
        return;
    }
    let first = resultData;
    readFile('./content/result-txt.txt','utf8',(errorData,resultData)=>{
        if(errorData){
        console.log(errData.message)
        return;
    }
    let second = resultData;
        writeFile('./content/result-txt.txt',`The Message is ${first} and : ${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return;
            }
            console.log(result)
        })
    })
})