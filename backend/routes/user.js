const express = require('express')
const {createUser,getUser,deleteAllUser} = require('../controllers/userController')

const router = express.Router()

router.route('/').post(createUser).get(getUser)
router.route('/deleteAll').delete(deleteAllUser)

module.exports = router
