const {Router} = require('express')
const controllers = require('./../controlles/room.controller')
const router = Router()

//router path: /mainPage
router.post('/enter', controllers.enterToRoom)

//TODO: router path: 
router.post('/create', controllers.createRoom)


router.get('/getRooms', controllers.getRoomList)

module.exports = router
