const shoe = require('../models/shoe');
const SHOES = require('../models/shoe')

const search = async (req, res) => {
  const { productName, companyName, color, category } = req.query;
  try {
    // Create an empty search query
    const searchQuery = {};

    // Check if each query parameter is provided and add it to the search query
    if (productName) {
      searchQuery.productName = { $regex: productName, $options: 'i' };
    }
    if (companyName) {
      searchQuery.companyName = { $regex: companyName, $options: 'i' };
    }
    if (category) {
      searchQuery.category = { $regex: category, $options: 'i' };
    }
    if (color) {
      searchQuery.color = { $regex: color, $options: 'i' };
    }

    const shoe = await SHOES.find({
      $or: [searchQuery],
    });

    if (!shoe || shoe.length === 0) {
      console.log('shoe not found');
      return res.status(404).json({ success: false, message: 'Shoe not found' });
    }

    res.status(200).json({
      total:shoe.length,
      success: true,
      shoe: shoe,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
}

const search2 = async(req,res)=>{
    try {
        
        const keyword = req.params.keyword
        const shoe = await SHOES.find(keyword)
        if (!shoe || shoe.length === 0) {
            console.log('shoe not found');
            return res.status(404).json({ success: false, message: 'Shoe not found' });
        }
        res.status(200).json({
            total:shoe.length,
            success: true,
            shoe: shoe,
          });
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = { search
     , search2 }
