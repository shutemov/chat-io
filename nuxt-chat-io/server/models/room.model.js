const {model, Schema} = require('mongoose')

const room = new Schema({

  title: {
    type: String,
    unique: true,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  password: {
    type: String,
  },

  //array of user login
  users: {
    type: Array,
    default: []
  },

  messages: [{
    type: Schema.Types.ObjectId,
    ref: 'messages'
  }]


})

module.exports = model('rooms', room)
