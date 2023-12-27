const express = require('express')
const router = express.Router()
const {addWishlist , deleteWishlist , deleteAllWishlist , getWishlist} = require('../controllers/wishlistController')

router.route('/').get(getWishlist)
router.route('/remove/:id').post(deleteWishlist)
router.route('/deleteALl').delete(deleteAllWishlist)
router.route('/add/:id').post(addWishlist)

module.exports = router