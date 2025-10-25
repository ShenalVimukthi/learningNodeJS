const {readFile} = require('fs')
const {writeFile} = require('fs')


const getData = async(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

const writeData = async (path,data)=>{
    return new Promise((resolve,reject)=>{
        writeFile(path,data,(err,dataSet)=>{
            if(err){
                reject(err)
            }else{
                resolve(dataSet)
            }
        })
    })
}


const displayResult = async ()=>{
    try{
        const first = await getData('./files/first.txt')
        const second = await getData('./files/second.txt')
        const data = first+second

        console.log(first,second)

        try{
            const writeToFile = await writeData('./files/newData.txt',data)
        }catch(err){
            console.log(e)
        }
        

    }catch(err){
        console.log(err)
    }
}


displayResult()