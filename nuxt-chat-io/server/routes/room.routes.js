const {Router} = require('express')
const controllers = require('./../controlles/room.controllers')
const router = Router()

//router path:
router.post('/enter', controllers.enterToRoom)

//router path:
router.post('/create', controllers.createRoom)

module.exports = router
