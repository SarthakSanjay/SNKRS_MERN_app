const USER = require('../models/user')

const login = async (req, res ) =>{
    const {email , password } = req.body
    const user =  await USER.find({email: email})
    if(!user){
        return res.status(404).json({msg: 'user not found'})
    }
    const userPassword = await USER.find({password: password})
}