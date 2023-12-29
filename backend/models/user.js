const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        unique:true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'CART'
    }],
    wishlist:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'WISHLIST'
    }]
})
// to encrypt the password
//this is the pre middleware provided by the mongoose , it just do the task assigned to it before the actual task given to the schema
userSchema.pre('save',async function(next){
    if(!this.isModified("password")) return next()
    this.password = bcrypt.hash(this.password , 10)
    next()
   
})
// custom method to check the password
userSchema.methods.isPassword = async function(password){
  return await bcrypt.compare(password  , this.password)
}
module.exports = new mongoose.model('USER' , userSchema)