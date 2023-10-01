const SHOES = require('../models/shoe')

const menCategory = async(req, res)=>{
    const shoes = await SHOES.find({category:"Men"})
    if(!shoes) return res.status(404).json({
        msg:"not found"
    })
    res.status(200).json({
        total: shoes.length,
        msg:"success",
        shoes: shoes
    })
}

const womenCategory =  async(req, res)=>{
    const shoes = await SHOES.find({category:"Women"})
    if(!shoes) return res.status(404).json({
        msg:"not found"
    })
    res.status(200).json({
        total: shoes.length,
        msg:"success",
        shoes: shoes
    })
}

const unisexCategory =  async(req, res)=>{
    const shoes = await SHOES.find({category:"Unisex"})
    if(!shoes) return res.status(404).json({
        msg:"not found"
    })
    res.status(200).json({
        total: shoes.length,
        msg:"success",
        shoes: shoes
    })
}

module.exports = {menCategory , womenCategory , unisexCategory}