const {Router} = require('express')
const controllers = require('../controlles/app.controller')
const router = Router()

//router path: /app
router.post('/enter', controllers.enterToRoom)


router.post('/room/create', controllers.createRoom)


router.get('/rooms', controllers.getRoomList)

module.exports = router
