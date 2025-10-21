const os = require('os')

const user = os.userInfo()
const hostName = os.hostname()

const {currentOs} = require('./osInfo')

console.log(currentOs)