const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    shoeId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SHOES'

    },
    quantity:{
        type: Number,
        default: 1
    }
})

module.exports =  mongoose.model("CART" , cartSchema)