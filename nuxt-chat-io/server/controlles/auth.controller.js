const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')
const keys = require('./../keys')
const User = require('../models/user.model')

module.exports.login = async (req, res) => {
  
  const candidate = await User.findOne({login: req.body.login})

  if (candidate) {

    const isPassCorrect = bcrypt.compareSync(req.body.password, candidate.password)

    if (isPassCorrect) {
      const JWToken = jwt.sign(
        {
          login: candidate.login,
          userId: candidate._id
        },
        keys.JWT,
        {expiresIn: 60 * 60})
      res.json({JWToken})
    } else {
      res.status(401).json({message: 'Pass incorrect'})
    }
  } else {
    res.status(501).json({message: 'User not found'})
  }
}

module.exports.createUser = (req, res) => {

}
