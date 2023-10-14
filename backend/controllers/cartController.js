const CART = require('../models/cart')

const addToCart = async(req,res)=>{
    const shoeId = req.body._id
    const existingShoe = await CART.findOne({shoeId})
    if(existingShoe){
        return res.status(409).json({
            msg:"already exists"
        })
    }
    const shoe = await CART.create({
        shoeId : shoeId
    })
    if(!shoeId){
        return res.status(404).json({
                msg:"id not found "
        })
    }
    res.status(200).json({
        id: shoe
    })
}

const deleteCartItem = async(req,res)=>{
    const shoeId = req.params.id
    const shoe = await CART.deleteOne({
        _id : shoeId
    })
    if(!shoeId){
        return res.status(404).json({
                msg:"id not found "
        })
    }
    res.status(200).json({
        id: shoe
    })
}

const deleteAllCartItems = async(req,res) =>{
    const shoe = await CART.deleteMany()
    res.status(200).json({
        msg:'deleted all ',
        shoe: shoe
    })
} 

const getCartItems = async(req,res)=>{
    const shoe = await CART.find({}).populate('shoeId')
    if(!shoe){
        return res.status(404).json({
                msg:"id not found "
        })
    }
    res.status(200).json({
        shoe: shoe,
        total: shoe.length
    })
}
const updateCartQuantity =async (req,res) =>{
    const shoe = await CART.updateOne({ _id: req.params.id }, { quantity: req.body.quantity });
    if(!shoe) {
        return res.status(404).json({msg:"item not found"})
    }
    res.status(200).json({msg:"successfully updated",shoe:shoe})
}
module.exports = {addToCart , deleteAllCartItems , deleteCartItem , getCartItems , updateCartQuantity} 