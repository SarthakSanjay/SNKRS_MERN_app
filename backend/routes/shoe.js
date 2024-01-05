const express = require('express')
const router = express.Router()
const  { addShoe , getAllShoes , getSpecificShoe } = require('../controllers/shoeController')
const { verifyJWT } = require('../middleware/auth.middleware')

router.route('/all').get(verifyJWT,getAllShoes)
router.route('/:id').get(getSpecificShoe)
router.route('/addShoe').post(addShoe)

module.exports = router