const {model, Schema} = require('mongoose')

const roomSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  description: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
  },
  roomUsers: {
    //array of user login
    type: Array[String],
    default: undefined
  },
  roomMessages: {
    type: Array[String],
    default: undefined
  }
})

module.exports = model('rooms', roomSchema)
