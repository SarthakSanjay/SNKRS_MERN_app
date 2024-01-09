const CART = require('../models/cart')

const addToCart = async(req,res)=>{
    const {userId , shoeId} = req.query
    const cart = await CART.findOne({user: userId})
    console.log(cart)
    if(!cart){
        await CART.create({user:userId , shoes:[shoeId]})
    }

    cart.shoes.push(shoeId)
    await cart.save()
    console.log(cart.shoes.length)
  

    res.status(200).json({
        cart
    })
    
 }

const cartItemQuantity = async(req,res) =>{
    const {userId} = req.query
    // const shoeId = req.body.shoeId
    const cart = await CART.findOne({user: userId})
    function generateShoeObject(shoesArray) {
        const shoeObj = {};
      
        shoesArray.forEach((shoeId) => {
          if (shoeObj[shoeId]) {
            shoeObj[shoeId]++;
          } else {
            shoeObj[shoeId] = 1;
          }
        });
      
        return shoeObj;
      }
      
      const shoeObject = generateShoeObject(cart.shoes);
      console.log(shoeObject);
      res.status(200).json({shoeObject})
}
  
const getCartItems = async(req,res) =>{
    try {
        const {userId} = req.query
        const cart = await CART.findOne({user: userId}).populate('shoes')
        const uniqueShoes = Array.from(new Set(cart.shoes.map(shoe => JSON.stringify(shoe)))).map(JSON.parse);
        res.status(200).json({shoes:uniqueShoes})
    } catch (error) {
        console.log(error.message)
    }
}
const getAllCartItems = async(req,res) =>{
    const cart = await CART.find()
    res.status(200).json({cart})
}
const deleteCartItem = async(req,res)=>{
    const userId = req.body.userId
    const shoeId = req.body.shoeId
    let cart = await CART.findOne({ user : userId })
    if (!cart) {
        res.status(200).json({cart:[]})
      }  
      const indexToRemove = cart.shoes.indexOf(shoeId);

      if (indexToRemove !== -1) {
        cart.shoes.splice(indexToRemove, 1);
        await cart.save();
      }
      res.status(200).json({cart})
}

const deleteAllCartItems = async(req,res) =>{
    const shoe = await CART.deleteMany()
    res.status(200).json({
        msg:'deleted all ',
        shoe: shoe
    })
} 

// const getCartItems = async(req,res)=>{
//     const shoe = await CART.find({}).populate('shoeId')
//     if(!shoe){
//         return res.status(404).json({
//                 msg:"id not found "
//         })
//     }
//     const calculateTotalAmount = (shoe) =>{
//         return shoe.reduce((totalPrice, item)=>{
//           return totalPrice +( item.shoeId.price * item.quantity)
//         },0)
//       }
//     res.status(200).json({
//         shoe: shoe,
//         total: shoe.length,
//         totalAmount : calculateTotalAmount(shoe)
//     })
// }
const updateCartQuantity =async (req,res) =>{
    const shoe = await CART.updateOne({ _id: req.params.id }, { quantity: req.body.quantity });
    if(!shoe) {
        return res.status(404).json({msg:"item not found"})
    }
    res.status(200).json({msg:"successfully updated",shoe:shoe})
}

const getSpecificCartItem = async (req, res) =>{
    const shoe = await CART.findById(req.params.id)
    if(!shoe){
        return res.status(404).json({msg:'not found'})
    }
    res.status(200).json({msg:"success",shoe:shoe})
}
module.exports = {addToCart , deleteAllCartItems , 
    deleteCartItem ,getAllCartItems,
     getCartItems , updateCartQuantity ,getSpecificCartItem ,cartItemQuantity} 