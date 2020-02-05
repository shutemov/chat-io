const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')
const keys = require('./../keys')
const Room = require('../models/room.model')

module.exports.enterToRoom = async (req, res) => {

}

/*
  создаем комнату чата, если комната есть, возврашаем 409. Если комнаты нет,
  то в зависимости от наличия пароля создаем новую комнату.
 */
module.exports.createRoom = async (req, res) => {
  const candidate = await Room.findOne({title: req.body.title})
  console.log('.createRoom',candidate)
  if (candidate) {
    res.status(409).json({message: 'this room exist'})
  } else {
    console.log('.createRoom 1',req.body.title)
    console.log('.createRoom 1',req.body.password)
    let room = undefined

    if (req.body.password) {

      const salt = bcrypt.genSaltSync(10)

      room = new Room({
        title: req.body.title,
        description: req.body.description,
        password: bcrypt.hashSync(req.body.password, salt),
        //extract header bearer login and will put in roomUser
        roomUsers: [],
        roomMessages: []
      })

    } else {
      room = new Room({
        title: req.body.title,
        description: req.body.description,
        //extract header bearer login and will put in roomUser
        roomUsers: [],
        roomMessages: []
      })
    }

    await room.save()

    res.status(201).json(room)
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
