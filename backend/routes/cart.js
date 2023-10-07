const express = require('express')
const router = express.Router()
const {getCartItems , deleteAllCartItems , deleteCartItem , addToCart} = require('../controllers/cartController')
router.route('/').get(getCartItems)
router.route('/add').post(addToCart)
router.route('/deleteAll').delete(deleteAllCartItems)
router.route('/:id').delete(deleteCartItem)

module.exports = router