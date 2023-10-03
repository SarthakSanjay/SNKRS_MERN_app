const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    shoeId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SHOES'

    }
})

module.exports = new mongoose.model("CART" , cartSchema)