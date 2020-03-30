const express = require('express')
const app = express()
const { config } = require('../config')

const bodyParser = require('body-parser')
const usersApi = require('./components/user/index')
const user = require('./components/user/network')

app.use(express.json())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

//ROUTER
usersApi(app)
// app.use('/api/users', user)

app.listen(config.api.port, () => {
  console.log(`Server runnig on port ${config.api.port}
  nombredb:${config.mongo.database}
  pass:${config.mongo.password}
  user:${config.mongo.user}
  host:${config.mongo.host}`)
})
