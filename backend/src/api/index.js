const express = require('express')
const bodyParser = require('body-parser')

const config = require('../../config')
const users = require('./components/user/network')
require('../store/database')
const app = express()

// app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))
//ROUTER
app.use('/api/users', users)

async function main() {
    await app.listen(config.api.port)
    console.log(`Server runnig on port ${config.api.port}`)
}
main()