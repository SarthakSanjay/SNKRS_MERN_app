const express = require('express')
const router = express.Router()
const { filter } = require('../controllers/search')

router.route('/').get(filter)

module.exports = router