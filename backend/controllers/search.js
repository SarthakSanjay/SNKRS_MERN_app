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

const filter = async (req, res) => {
  const { category, companyName, color, size } = req.query;
console.log(req.query)
  try {
    let query = {};

    if (color) {
      query.color = { $regex: color, $options: 'i' };
    }

    if (companyName) {
      query.companyName = { $regex: companyName, $options: 'i' };
    }

    // Add other filters like category, size, etc., following the same pattern

    const filteredProducts = await SHOES.find(query);

    res.json({ shoes: filteredProducts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = {search,filter}