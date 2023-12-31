const express = require('express')
const {login , logout} = require('../controllers/loginController')
const { verifyJWT } = require('../middleware/auth.middleware')
const router = express.Router()

router.route('/').post(login)

//secured routes
router.route('/logout').post(verifyJWT,logout )
module.exports = router