const mongoose = require('mongoose')

const wishlistSchema = new mongoose.Schema({
    shoeId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SHOES'

    }
})

module.exports = new mongoose.model("WISHLIST" , wishlistSchema)