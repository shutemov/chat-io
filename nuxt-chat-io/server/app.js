const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth.routes')
const mainPageRoutes = require('./routes/app.routes')
const keys = require('./keys')
const app = express()

mongoose.connect(keys.MONGO_URI)
  .then(() => {
    console.log('MDB CONNECTED')
  })
  .catch((e) => {
    console.log(e)
  })

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/auth', authRoutes)
app.use('/app', mainPageRoutes)


module.exports = app
