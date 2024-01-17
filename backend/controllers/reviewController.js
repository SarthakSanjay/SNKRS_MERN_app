const REVIEWS = require("../models/reviews")
const USER = require('../models/user')
const getAllReviews = async(req,res) =>{
    const allReviews = await REVIEWS.find({})
    if(!allReviews) return res.status(404).json({message: 'reviews not found'})
    res.status(200).json({allReviews})
}

const getAllReviewsOfShoe = async(req,res) =>{
  try {
      const {shoeId} = req.query
      const reviews = await REVIEWS.findOne({shoe:shoeId})
      .populate({
        path: 'reviews.user',
        select: '-password -cart -wishlist -createdAt -updatedAt -refreshToken'
      })
      console.log(reviews);
      if(!reviews){
         return res.status(404).json({
          reviews:[]
         })
      }
      // console.log(reviews);
      res.status(200).json({
          reviews: reviews.reviews,
          time: reviews.createdAt
      })
  } catch (error) {
    console.log(error.message)
    
  }

}
const addReviews = async(req,res) => {
  console.log('route called');
    const {shoeId , userId} = req.query
    const {userReview , rating} = req.body

    console.log(userReview);
    const reviews = await REVIEWS.findOne({shoe:shoeId})
    try {
        if (!reviews) {
            reviews = await REVIEWS.create({
              shoe: shoeId,
              reviews: [{user: userId , review: userReview , rating: rating}], 
            });
          } else {
        //    return res.status(404).json({msg:'you have already reviewed this product'})
        reviews.reviews.push({user: userId , review:userReview , rating:rating})
        await reviews.save()
          }
    } catch (error) {
        console.log(error.message)
        
    }
    res.status(201).json({reviews})
    
}
const deleteAllReviews = async(req,res)=>{
    const reviews = await REVIEWS.deleteMany()
    res.status(200).json({reviews})
}
const deleteReviews = async(req,res) => {

}
const editReviews = async(req,res) => {}

module.exports = {getAllReviewsOfShoe , addReviews , getAllReviews , deleteAllReviews}