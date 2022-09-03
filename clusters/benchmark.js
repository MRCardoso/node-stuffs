const shell = require('shelljs')
const os = require('os')
const cpuCount = os.cpus().length
const sizeReq = cpuCount * 3
const { PORT } = require('../config/constants')

shell.exec(`ab -c ${sizeReq} -n ${sizeReq} localhost:${PORT}/`)