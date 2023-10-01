const express = require('express')
const router = express.Router()
const {menCategory , womenCategory , unisexCategory} = require('../controllers/categoryController')

router.route('/men').get(menCategory)
router.route('/women').get(womenCategory)
router.route('/unisex').get(unisexCategory)

module.exports = router