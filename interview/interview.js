const https = require('https')
const crypto = require('crypto')
const fs = require('fs')
const path = require('path')
const Timer = require('../config/Timer')
const {URL} = require('../config/Constants')

const timer = new Timer()
const filename = path.basename(__filename)
let totalHash = parseInt(process.argv[2])
let totalPools = parseInt(process.argv[3])

if (isNaN(totalHash)) totalHash = 4
if (!isNaN(totalPools)) {
    process.env.UV_THREADPOOL_SIZE = totalPools
}

const doRequest = (next) => {
    https.request(URL, res => {
        res.on('data', () => {})
        res.on('end', next)
    })
    .end()
}

const doHash = () => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log(`Hash: ${timer.elapseTime}`)
    })
}

doRequest(() => console.log(`Http: ${timer.elapseTime}`))

fs.readFile(filename,'utf8', () => console.log(`FS: ${timer.elapseTime}`))

for (let i = 0; i < totalHash; i++) {
    doHash()
}