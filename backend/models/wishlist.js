const mongoose = require('mongoose')

// const wishlistSchema = new mongoose.Schema({
//     shoeId : {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'SHOES'

//     }
// })
const wishlistSchema = new mongoose.Schema({
    // Define properties for wishlist
    // For example, you might have a name or items in the wishlist
    // Define your fields here based on your application's requirements
    shoeId: [{
        type: mongoose.Schema.Types.ObjectId,
        // You can reference a different model if needed, for example, 'Product'
        ref: 'SHOES'
    }],
    // You might include other fields specific to your wishlist

    // Link the wishlist to the user
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER' // Reference the User model
    }
}, {
    timestamps: true
});

module.exports =  mongoose.model("WISHLIST" , wishlistSchema)