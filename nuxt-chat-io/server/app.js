const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const keys = require('./keys')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())








module.exports = app
