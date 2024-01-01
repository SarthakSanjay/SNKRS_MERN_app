const { ApiErrorHandler } = require("../utils/ApiErrorHandler");
const { asyncHandler } = require("../utils/AsyncHandler");
const {jwt} = require("jsonwebtoken")
const USER = require('../models/user')
const verifyJWT = asyncHandler(async(req,res,next)=>{
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.("Bearer " ,"")
        if(!token){
            throw new ApiErrorHandler(401 , "Unauthorized request")
        }
        const decodedToken = jwt.verify(token , process.env.ACCESS_TOKEN_SECRET)
    
        const user = await USER.findById(decodedToken?._id).select("-password -refreshToken")
        if(!user){
            throw new ApiErrorHandler(401 , "Invalid Access Token")
        }
    
        req.user = user
        next()
    } catch (error) {
        throw new ApiErrorHandler(401 , error?.message || "Invalid Access Token")
    }
})

module.exports = {verifyJWT}