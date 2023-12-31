const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        unique:true,
        lowercase:true,
        trim:true,
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
    }],
    refreshToken:{
        type:String
    }
},{
    timestamps:true
})
// to encrypt the password
//this is the pre middleware provided by the mongoose , it just do the task assigned to it before the actual task given to the schema
userSchema.pre('save',async function(next){
    if(!this.isModified("password")) return next()
    this.password =await bcrypt.hash(this.password , 10)
    next()
   
})
// custom method to check the password
userSchema.methods.isPassword = async function(password){
  return await bcrypt.compare(password  , this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id: this._id,
        email: this.email
     }),
     process.env.ACCESS_TOKEN_SECRET,
     {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
     }
     
}
userSchema.methods.generateRefreshToken = async function(){
    return jwt.sign({
        _id: this._id,
        
     }),
     process.env.REFRESH_TOKEN_SECRET,
     {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
     }
}
module.exports = new mongoose.model('USER' , userSchema)