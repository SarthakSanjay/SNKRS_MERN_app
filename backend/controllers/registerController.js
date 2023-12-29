const USER = require('../models/user')
const { asyncHandler } = require('../utils/AsyncHandler')

const registerUser = asyncHandler(async(req, res) =>{
    const user =   await USER.create({
           email: req.body.email,
           password: req.body.password
       }) 
    const createdUser = await USER.findById(user._id)
    if(!createdUser){
        return res.status(500).json({msg:"something went wrong"})
    }
     res.status(200).json({msg:'new user created',user:createdUser})
   
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