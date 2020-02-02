const {Router} = require('express')
const controllers = require('./../controlles/auth.controller')
const router = Router()

//router path:
router.post('/login', controllers.login)

//router path:
router.post('/create', controllers.createUser)

module.exports = router
