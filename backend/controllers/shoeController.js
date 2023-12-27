const SHOES = require('../models/shoe')
// const shoes = require('../product')
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

//Admin route

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
    // let shoe;
    // for(let i = 0; i< 20 ;i++){
    //  shoe = await SHOES.create(shoes[i])
    //  console.log(shoe)
    // }
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

const updateShoe = async(req,res) =>{
    let shoe = await SHOES.findById(req.params.id)
    console.log(shoe)
    if(!shoe){
        return res.status(500).json({
            success:'false',
            msg: "Product not found"
        })
    }
        shoe = await SHOES.findByIdAndUpdate(req.params.id , req.body,{
            new:true,
            runValidators:true,
            useFindAndModify:false
        })
        res.status(200).json({
            success:true,
            shoe:shoe
        })
    
}
module.exports = { addShoe , getAllShoes , getSpecificShoe  , updateShoe}