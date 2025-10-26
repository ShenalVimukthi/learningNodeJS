const {readFile,writeFile} = require('fs').promises

const start = async()=>{

    try{
        const first = await readFile('./files/first.txt','utf8')
        const second = await readFile('./files/second.txt','utf8')
        
        await writeFile('./files/newWriteFile.txt',`The text is like this ${first} and ${second}`)

    }catch(e){
        console.log(e)
        
    }

}

start()

