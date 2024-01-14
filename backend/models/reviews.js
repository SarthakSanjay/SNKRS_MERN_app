const mongoose = require('mongoose')

const reviewsSchema = mongoose.Schema({
    shoe:{
        typeof:mongoose.Schema.Types.ObjectId,
        ref: 'SHOES'
    },
    reviews:{
        type:[String]
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'USER'
    }
})

module.exports = mongoose.model('REVIEWS' ,reviewsSchema)