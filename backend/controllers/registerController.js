const USER = require('../models/user')
const { asyncHandler } = require('../utils/AsyncHandler')
const {ApiErrorHandler} = require('../utils/ApiErrorHandler')
const {ApiResponse} = require('../utils/ApiResponseHandler')

const registerUser = asyncHandler(async(req, res) =>{
    const {email , password} = req.body
    const existingUser = await USER.findOne({
        $or:[{ email } , { password }]
    })
    if([email ,password].some((field)=>
        field?.trim() === ""
    )){
        throw new ApiErrorHandler(400 , "All fields are required")
    }
    // if(!email.includes('@')){
    //     throw new ApiErrorHandler(400 , "Email is not correct")
    // }
    if(existingUser){
        throw new ApiErrorHandler(409 , "User already exist")
    }
    const user =   await USER.create({
           email: email,
           password: password
       }) 
     const createdUser = await USER.findById(user._id).select(
        "-password -refreshToken"
     )
     if(!createdUser){
        throw new ApiErrorHandler(500 , "Something went wrong while regestring user")
     }
     res.status(201).json(
        new ApiResponse(200, createdUser , "User Registerd Successfully")
     )

   
})

const getUser = async( req , res) =>{
    const users = await USER.find({})

    res.status(200).json({
        msg: 'success',
        users: users
    })
}

const deleteAllUser = async(req,res) =>{
    const user = await USER.deleteMany()
    res.status(200).json({msg:"success deleted all user"})
}
module.exports = {createUser: registerUser , getUser , deleteAllUser}