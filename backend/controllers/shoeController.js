const SHOES = require('../models/shoe')

const getSpecificShoe = async(req, res) =>{
    const shoeId = req.params.id;
    const shoe =await SHOES.findById(shoeId);
  
    if (!shoe) {
        res.status(404).json({
            msg:"shoe not found"
        })
    }
  
    // Prepare and return the response
    res.status(200).json({
        total: shoe.length,
        msg:"success",
        shoe: shoe
    });
}

const getAllShoes = async(req,res)=>{
    const shoes = await SHOES.find({})
    if(!shoes) return res.status(404).json({
        msg:"not found"
    })
    res.status(200).json({
        total: shoes.length,
        msg:"success",
        shoes: shoes
    })
}

const addShoe = async(req,res)=>{
    let {
        productName ,
        category,
        color,
        price,
        companyName,
        rating,
        image
 } = req.body
    const shoe = await SHOES.create({
        
            "productName": productName,
            "category": category,
            "color": color,
            "price": price,
            "companyName": companyName,
            "rating": rating,
            "image": image
                  
    }) 
    res.status(200).json({
        msg: "success",
        shoe: shoe
    })
}

const updateShoeClicked = async (req, res) =>{
    const shoe = await SHOES.updateOne({ _id: req.params.id }, { wishlisted: req.body.wishlisted });
    if(!shoe) {
        return res.status(404).json({msg:"item not found"})
    }
    res.status(200).json({msg:"successfully updated",shoe:shoe})
}
module.exports = { addShoe , getAllShoes , getSpecificShoe , updateShoeClicked}