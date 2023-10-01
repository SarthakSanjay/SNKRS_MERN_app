const express = require('express')
const router = express.Router()
const  { addShoe , getAllShoes , getSpecificShoe} = require('../controllers/shoeController')

router.route('/all').get(getAllShoes)
router.route('/:id').get(getSpecificShoe)
router.route('/addShoe').post(addShoe)

module.exports = router