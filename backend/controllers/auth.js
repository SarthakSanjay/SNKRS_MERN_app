const USER = require('../models/user')

const login = async( req ,res) =>{
    const {email , password } = req.body
    const user = await USER.find({email: email , password: password})
    if(!user){
        return res.status(404).json({msg:"can't login"})
    }
    console.log(user)
    res.status(200).json({msg:"logged in successfully"})
}

module.exports = login