const mongoose = require('mongoose')

const wishlistSchema = new mongoose.Schema({
    shoeId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SHOES'
    }],

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER' 
    }
}, {
    timestamps: true
});

module.exports =  mongoose.model("WISHLIST" , wishlistSchema)