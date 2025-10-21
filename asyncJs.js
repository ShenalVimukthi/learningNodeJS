const {writeFileSync,readFileSync} = require('fs')

console.log('start')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/subfolder/test.txt','utf8')


writeFileSync('./content/result2-txt.txt',`Here is the first result ${first} : And this is the second result ${second} `,{flag:'a'})

console.log('Done with this task')
console.log('continuing with the next')


