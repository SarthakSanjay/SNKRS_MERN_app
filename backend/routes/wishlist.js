const express = require('express')
const router = express.Router()
const {addWishlist , deleteWishlist , deleteAllWishlist , getWishlist, getAllWishlist} = require('../controllers/wishlistController')

router.route('/').get(getWishlist)
router.route('/remove/:id').post(deleteWishlist)
router.route('/deleteAll').delete(deleteAllWishlist)
router.route('/add/:id').post(addWishlist)
router.route('/all').get(getAllWishlist)
module.exports = router