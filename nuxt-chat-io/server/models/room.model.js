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
    type: Array,
    default: []
  },
  roomMessages: {
    type: Array,
    default: []
  }
})

module.exports = model('rooms', roomSchema)
