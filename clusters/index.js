process.env.UV_THREADPOOL_SIZE = 1
const cluster = require('cluster')
const os = require('os')
const cpuCount = os.cpus().length

if (cluster.isMaster) {
    children = cpuCount
    
    if (process.argv[2] === "y") {
        children = cpuCount * 3
    } 
    console.log(`Running ${children} clusters`)
    for (let i=0; i < children; i++) {
        cluster.fork()
    }
} else {
    const express = require('express')
    const crypto = require('crypto')
    const { PORT } = require('../config/constants')
    const app = express()
    
    app.get('/', (req, res) => {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => res.send('Hi there'))
    })
    app.listen(PORT, () => console.log(`App running in http://localhost:${PORT}`))
}