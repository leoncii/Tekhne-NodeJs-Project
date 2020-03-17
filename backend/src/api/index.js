const express = require('express')
const bodyParser = require('body-parser')

const { config } = require('../config')
const user = require('./components/user/network')

const app = express()

require('../store/database')

// app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))


//ROUTER
app.use('/api/users', user)



app.listen(config.api.port)
console.log(`Server runnig on port ${config.api.port}`)
