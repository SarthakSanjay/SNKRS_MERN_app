const USER = require('../models/user')

const createUser = async(req, res) =>{
    const user =   await USER.create({
           email: req.body.email,
           password: req.body.password
       })

       return res.status(200).json({msg:'new user created',user:user})
    // const user = await USER.find({email: req.body.email})
    // if(!user){
    // }

    // res.status(200).json({msg:"user already exist"})
    // res.redirect('/login')
}

module.exports = {createUser}