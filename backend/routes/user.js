const express = require('express')
const { refreshAccessToken, logout, getUser, createUser, deleteAllUser, login } = require('../controllers/userController')
const { verifyJWT } = require('../middleware/auth.middleware')

const router = express.Router()
router.route('/all').get(getUser)
router.route('/login').post(login)
router.route('/register').post(createUser)

//secured routes
router.route('/logout').post(verifyJWT,logout )
//refresh access token
router.route('/refreshAccessToken').post(refreshAccessToken)
router.route('/deleteAll').delete(deleteAllUser)

module.exports = router
