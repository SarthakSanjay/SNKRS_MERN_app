const USER = require("../models/user");
const { ApiErrorHandler } = require("../utils/ApiErrorHandler");
const { ApiResponse } = require("../utils/ApiResponseHandler");
const { asyncHandler } = require("../utils/AsyncHandler");
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
    new ApiResponse(200,{
      user: loggedInUser, accessToken , refreshToken ,
    },"User LoggedIn Successfully")
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

module.exports = {login , logout};
