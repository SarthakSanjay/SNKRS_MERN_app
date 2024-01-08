const express = require('express')
const router = express.Router()
const {addWishlist , deleteWishlist , deleteAllWishlist , getWishlist, getAllWishlist} = require('../controllers/wishlistController')
const { verifyJWT } = require('../middleware/auth.middleware')

router.route('/').get(
    // verifyJWT,
    getWishlist)
router.route('/remove/:id').delete(deleteWishlist)
router.route('/deleteAll').delete(deleteAllWishlist)
router.route('/add/:id').post(addWishlist)
router.route('/all').get(getAllWishlist)
module.exports = router