const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')
const keys = require('./../keys')
const Room = require('../models/room.model')
const User = require('../models/user.model')

module.exports.enterToRoom = async (req, res) => {

}

/*
  создаем комнату чата, если комната есть, возврашаем 409. Если комнаты нет,
  то в зависимости от наличия пароля создаем новую комнату.
 */
module.exports.createRoom = async (req, res) => {
  try {


    const candidate = await Room.findOne({title: req.body.title})

    console.log('.createRoom', candidate)

    if (candidate) {
      res.status(409).json({message: 'this room exist'})
    } else {

      let room = undefined

      if (req.body.password) {

        const salt = bcrypt.genSaltSync(10)


        // verify a token symmetric

        let uesrId = undefined

        jwt.verify(req.body.token, keys.JWT, function (err, decoded) {
          console.log('DECODED', decoded.userId) // bar
          userId = decoded.userId
        });


        room = new Room({
          title: req.body.title,
          description: req.body.description,
          password: bcrypt.hashSync(req.body.password, salt),
          users: [],
          messages: []
        })

        await room.save()

        const user = await User.findById(userId)

        user.rooms.push(room._id)

        await user.save()

        res.status(201).json(room)

      } else {
        room = new Room({
          title: req.body.title,
          description: req.body.description,
          //extract header bearer login and will put in roomUser
          users: [],
          messages: []
        })

        await room.save()
        res.status(201).json(room)

      }
    }
  }catch (e) {
    console.log(e)
  }
}


module.exports.getRoomList = async (req, res) => {

  const rooms = await Room.find()

  if (rooms) {
    res.status(201).json(rooms)
  } else {
    res.status(401).json({message: 'rooms not found'})
  }

}
