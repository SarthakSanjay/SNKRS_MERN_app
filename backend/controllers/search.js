const SHOES = require('../models/shoe')

 const search = async(req,res) =>{
    const {keyword} = req.query
    console.log(req.query)

    const shoe = await SHOES.find(req.query)
    if(!shoe){
        console.log('shoe not found')
        return res.status(500).json({success:false,message:"shoe not found"})
    }
    res.status(200).json({
        success:true,
        shoe:shoe
    })
}

module.exports = {search}