const WISHLIST = require('../models/wishlist')
const SHOES = require('../models/shoe')

const addWishlist = async (req, res) => {
    const existingShoe = await WISHLIST.findById(req.params.id)
    if(existingShoe){
        return res.status(409).json({
            msg:"already exists"
        })
    }
    const shoe = await WISHLIST.create({
        shoeId : req.params.id
    })
    const inWishlist = await SHOES.updateOne({ _id: req.params.id }, { wishlisted: true });
    res.status(200).json({
        id: shoe,
        inWishlist:inWishlist
    })
};

const deleteWishlist = async(req,res)=>{
    const existingShoe = await WISHLIST.findById(req.params.id)
    if(existingShoe){
        return res.status(409).json({
            msg:"already exists"
        })
    }
    const inWishlist = await SHOES.updateOne({ _id: req.params.id }, { wishlisted: false });
    const shoe = await WISHLIST.deleteOne({
        shoeId : req.params.id
    })
    res.status(200).json({
        id: shoe,
        inWishlist:inWishlist
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