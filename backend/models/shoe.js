const mongoose = require('mongoose')


const shoeSchema = mongoose.Schema({
    productName:{
        type:String,
        required:['provide name']
    },
    category:{
        type:String,
        enum:[
            "Men",
            "Women",
            "Unisex"
        ]
    },
    color:{
        type:String,

    },
    price:{
        type:Number,
        required:['provide price']
    },
    companyName:{
        type:String,
        enum:[
            "Nike",
            "Adidas",
            "Puma",
            "Reebok",
            "New Balance",
            "Converse",
            "Under Armour",
            "Vans",
            "Skechers",
            "ASICS"
          ]
    },
    rating:{
        type:Number,
        default: 4.5
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
    image:{
        type:[String]
    }
})

module.exports = mongoose.model('SHOES' ,shoeSchema)