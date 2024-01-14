const USER = require("../models/user");
const { ApiErrorHandler } = require("../utils/ApiErrorHandler");
const { ApiResponse } = require("../utils/ApiResponseHandler");
const { asyncHandler } = require("../utils/AsyncHandler");
const jwt = require('jsonwebtoken')

const generateAccessAndRefreshToken = async(userId) =>{
  try {
    const user = await USER.findById(userId)
    const accessToken = await user.generateAccessToken()
    const refreshToken = await user.generateRefreshToken()
    user.refreshToken = refreshToken

    await user.save({validateBeforeSave:false}) //dont validate just save cause password will also kickin
    
    return { accessToken , refreshToken}
  } catch (error) {
    // console.log(error.message);
    throw new ApiErrorHandler(500 , 'Something went wrong while generating access and refresh token')
  }
}
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await USER.findOne({ email: email });
  console.log(user);
  if(!user){
    throw new ApiErrorHandler(404 ,"email is required ")
  }

  const isPasswordValid = await user.isPassword(password)
  if(!isPasswordValid){
    throw new ApiErrorHandler(401 , "password is incorrect ")
  }
  const {accessToken , refreshToken } = await generateAccessAndRefreshToken(user._id )

  const loggedInUser = await USER.findById(user._id).select("-password -refreshToken")
  //to send cookise we need to send options
  const options ={
    httpOnly :true , //by doing this it is only modifiable form server not the frontend 
    secure : true
  }
  return res
  .status(200)
  .cookie("accessToken" , accessToken , options)
  .cookie("refreshToken", refreshToken , options )
  .json(
    new ApiResponse(
      200, 
      {
          user: loggedInUser, accessToken, refreshToken
      },
      "User logged In Successfully"
  )

  )
});

const logout = asyncHandler(async(req,res)=>{
   await USER.findByIdAndUpdate(
      req.user._id,
      {
        $set:{
          refreshToken: undefined
        }
      },
      {
        new: true
      }
    )
    const options ={
      httpOnly :true , //by doing this it is only modifiable form server not the frontend 
      secure : true
    }
    return res.status(200)
    .clearCookie("accessToken" , options)
    .clearCookie("refreshToken" , options)
    .json(
      new ApiResponse(200 , {}  ,"User Logged out")
    )
})
const refreshAccessToken = asyncHandler(async(req,res)=>{
  try {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken
    if(!incomingRefreshToken){
      throw new ApiErrorHandler(401 , "Unauthorized request")
    }
    const decodedToken = jwt.verify(
      incomingRefreshToken ,
      process.env.REFRESH_TOKEN_SECRET
    )
    const user = await USER.findById(decodedToken?._id)
    if(!user){
      throw new ApiErrorHandler(401 , "Invalid request token")
    }
    if(incomingRefreshToken !== user?.refreshToken){
      throw new ApiErrorHandler(401 , "Request token is expired or used")
    }
    const options ={
      httpOnly :true , //by doing this it is only modifiable form server not the frontend 
      secure : true
    }
    const {accessToken , newRefreshToken} = await generateAccessAndRefreshToken(user._id)
    return res.status(200)
    .cookie("accessToken" , accessToken ,options)
    .cookie("refreshToken", newRefreshToken,options)
    .json(
      new ApiResponse(200 ,{accessToken , refreshToken: newRefreshToken} , "Access Token Refreshed" )
    )
  } catch (error) {
    throw new ApiErrorHandler(401, error?.message || "Invalid refresh token")
  }
})

const changeCurrentPassword = asyncHandler(async (req,res)=>{
  const {oldPassword , newPassword} = req.body
  const user = await USER.findById(req.user?._id)
  const isPasswordCorrect = await user.isPassword(oldPassword)
  if(!isPasswordCorrect){
    throw new ApiErrorHandler(400 , "Invalid old password")

  }
  user.password = newPassword
  await user.save({validateBeforeSave:false})
  
  return res.status(200).json(
    new ApiResponse(200 , {} , "Password changed successfully")
  )
})


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
  // return res.status(200).json(200 , req.user , "Current user fetched successfully")
}

const deleteAllUser = async(req,res) =>{
  const user = await USER.deleteMany()
  res.status(200).json({msg:"success deleted all user"})
}

module.exports = {createUser: registerUser , getUser , deleteAllUser ,login , logout , refreshAccessToken};
