const CART = require('../models/cart');
const { ApiErrorHandler } = require('../utils/ApiErrorHandler');

const addToCart = async(req,res)=>{
    const {userId , shoeId} = req.query
    let cart = await CART.findOne({ user: userId });

    if (!cart) {
      // If cart doesn't exist, create a new cart
      cart = await CART.create({ user: userId, shoes: [shoeId] });
    } else {
        cart.shoes.push(shoeId);
        await cart.save();
    }


    await cart.save()
  
    res.status(200).json({
        cart
    })
    
 }

const cartItemQuantity = async(req,res) =>{
    const {userId} = req.query
    const cart = await CART.findOne({user: userId})
    const shoe = await CART.findOne({user:userId}).populate('shoes')

    if(!cart){
        return 
    }
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
      res.status(200).json({shoeObject})
}
  
const getCartItems = async(req,res) =>{
    try {
        const {userId} = req.query
        const cart = await CART.findOne({user: userId}).populate('shoes')
        if(!cart){
            return res.status(200).json({shoes:[] })
        }
       let totalAmount = cart.shoes.reduce((total , item)=>{
            return total + item.price
        },0)
        
        const uniqueShoes = Array.from(new Set(cart.shoes.map(shoe => JSON.stringify(shoe)))).map(JSON.parse);
        res.status(200).json({shoes:uniqueShoes , totalAmount :totalAmount})
    } catch (error) {
        console.log(error.message)
    }
}
const getAllCartItems = async(req,res) =>{
    const cart = await CART.find()
    res.status(200).json({cart})
}
const decreaseCartItem = async(req,res)=>{
    const {userId , shoeId} = req.query
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

const deleteFromCart = async(req,res)=>{
    const {userId , shoeId} = req.query
    let cart = await CART.findOne({ user : userId })
    if (!cart) {
        res.status(200).json({cart:[]})
      }  
     cart.shoes.pull(shoeId)
     cart.save()

    res.status(200).json({cart})
}

module.exports = {
     addToCart ,
     deleteAllCartItems , 
     decreaseCartItem ,
     getAllCartItems,
     getCartItems  ,
     cartItemQuantity,
     deleteFromCart
    } 