const WISHLIST = require('../models/wishlist')

const addWishlist = async(req,res)=>{
    const shoeId = req.body._id
    const existingShoe = await WISHLIST.findOne({shoeId})
    if(existingShoe){
        return res.status(409).json({
            msg:"already exists"
        })
    }
    const shoe = await WISHLIST.create({
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

const deleteWishlist = async(req,res)=>{
    const shoeId = req.params.id
    const shoe = await WISHLIST.deleteOne({
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

const deleteAllWishlist = async(req,res) =>{
    const shoe = await WISHLIST.deleteMany()
    res.status(200).json({
        msg:'deleted all ',
        shoe: shoe
    })
} 

const getWishlist = async(req,res)=>{
    const shoe = await WISHLIST.find({}).populate('shoeId')
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

module.exports = {addWishlist , deleteWishlist , deleteAllWishlist , getWishlist}