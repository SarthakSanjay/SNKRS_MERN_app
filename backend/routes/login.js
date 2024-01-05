const express = require('express')
const {login , logout, refreshAccessToken} = require('../controllers/loginController')
const { verifyJWT } = require('../middleware/auth.middleware')
const router = express.Router()

router.route('/').post(login)

//secured routes
router.route('/logout').post(verifyJWT,logout )
//refresh access token
router.route('/refreshAccessToken').post(refreshAccessToken)
module.exports = router