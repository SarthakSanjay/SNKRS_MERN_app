const mongoose = require('mongoose')

const reviewsSchema = mongoose.Schema({
    shoe:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'SHOES'
    },
    reviews:[
        {
            user: {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'USER'
            },
            review: {
              type: String,
              required: true
            },
            rating:{
                type:Number,
                default:0
            }
          }
    ]
},{ timestamps: true })

module.exports = mongoose.model('REVIEWS' ,reviewsSchema)