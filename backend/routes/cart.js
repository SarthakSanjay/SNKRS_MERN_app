const express = require('express')
const router = express.Router()
const {getCartItems , deleteAllCartItems , deleteCartItem , addToCart} = require('../controllers/cartController')
router.route('/').get(getCartItems).delete(deleteAllCartItems).post(addToCart)
router.route('/:id').delete(deleteCartItem)

module.exports = router