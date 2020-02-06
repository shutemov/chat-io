const {model, Schema} = require('mongoose')

const userSchema = new Schema({
  login: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  rooms:[
    {
      type: Schema.Types.ObjectId,
      ref:'rooms'
    }
  ]
})

module.exports = model('users', userSchema)
