const eventEmmitter = require('events')

const customEmmitter = new eventEmmitter()

customEmmitter.on('response',()=>{
    console.log(`Data is loading...`)
})

customEmmitter.on('response2',()=>{
    console.log(`Data2 is loading...`)
})

customEmmitter.emit('response')
customEmmitter.emit('response2')