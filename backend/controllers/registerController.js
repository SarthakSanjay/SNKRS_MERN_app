const USER = require('../models/user')

const registerUser = async(req, res) =>{
    const user =   await USER.create({
           email: req.body.email,
           password: req.body.password
       }) 

     res.status(200).json({msg:'new user created',user:user})
   
}

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