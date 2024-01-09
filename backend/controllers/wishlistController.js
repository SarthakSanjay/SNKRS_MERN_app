const WISHLIST = require('../models/wishlist')
const SHOES = require('../models/shoe');
const { ApiErrorHandler } = require('../utils/ApiErrorHandler');
const USER = require('../models/user')

const getWishlist = async (req, res) => {
  const userId= req.query.userId; 
  console.log(typeof(userId))
  try {
    const wishlistItems = await WISHLIST.findOne({ user: userId }).populate('shoeId');

    if (!wishlistItems) {
      return res.status(200).json({wishlistItems:[]})
      
    }
    res.status(200).json({ wishlistItems });

  } catch (error) {
    throw new ApiErrorHandler(500 ,`Error fetching wishlist items : ${error.message}`)
  }
};

const addWishlist = async (req, res) => {
    const userId  = req.body.userId; // Assuming you receive userId and shoeId in the request body
    const shoeId = req.params.id
    try {
      // Check if the user exists
      const user = await USER.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      // Create or find the user's wishlist
      let wishlist = await WISHLIST.findOne({ user: userId });
      if (!wishlist) {
        wishlist = await WISHLIST.create({ user: userId, shoeId: [shoeId] });
      } else {
        if(wishlist.shoeId.includes(shoeId)){

          wishlist.shoeId.pull(shoeId);
        }else{

          wishlist.shoeId.push(shoeId);
        }
        // If wishlist exists, push the new shoeId to the existing wishlist
        await wishlist.save();
      }
  
      res.status(201).json({ message: 'Item added to wishlist successfully.', wishlist });
    } catch (error) {
      res.status(500).json({ message: 'Failed to add item to wishlist.', error: error.message });
    }
  };

const deleteWishlist = async(req,res)=>{
  const userId  = req.body.userId; // Assuming you receive userId and shoeId in the request body
  const shoeId = req.params.id
  console.log('shoeId',shoeId)

   try {
     let wishlist = await WISHLIST.findOne({user:userId});
     if (!wishlist) {
       throw new ApiErrorHandler(404 , "wishlist not found")
     }
      wishlist.shoeId.pull(shoeId);
      await wishlist.save();
     console.log(wishlist)
 
     res.status(200).json({
       msg:'success',
       wishlist
 
     })
   } catch (error) {
    console.log(error.message)
   }

}

const deleteAllWishlist = async(req,res) =>{
    const shoe = await WISHLIST.deleteMany()
    res.status(200).json({
        msg:'deleted all ',
        shoe: shoe
    })
} 

// const getWishlist = async(req,res)=>{
//     // const userId = req.body.userId
//     // const user = await USER.findById(userId)
//     // if(!user){
//     //     throw new ApiErrorHandler(401 , "user not found")
//     // }
    
//     const shoe = await WISHLIST.find({}).populate('shoeId')
//     if(!shoe){
//         return res.status(404).json({
//                 msg:"id not found "
//         })
//     }
//     res.status(200).json({
//         shoe: shoe,
//         total: shoe.length
//     })
// }

const getAllWishlist = async(req,res) =>{
  const wishlist = await WISHLIST.find()
  res.status(200).json({wishlist})
}

module.exports = {addWishlist , deleteWishlist , deleteAllWishlist , getWishlist , getAllWishlist}