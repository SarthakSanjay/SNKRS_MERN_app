const SHOES = require('../models/shoe')

const search = async(req,res) =>{
  const {search} = req.query
 
  if(!search){
    return res.status(400).json({error:"search query is required"})
  }
  try {
    const shoe = await SHOES.find({
      $or:[
        {productName:{$regex:search ,$options:'i'}},
        {category:{$regex:search ,$options:'i'}},
        {color:{$regex:search ,$options:'i'}},
        {companyName:{$regex:search ,$options:'i'}},
      ]
    })
    res.status(200).json({
      success:true,
      shoes:shoe,
      total:shoe.length

    })
  } catch (error) {
    console.log(error.message)
        res.status(500).json({
            error:"an error occured while seaching the product"
        })
  }

}

module.exports = {search}