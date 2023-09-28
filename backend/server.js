require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const port = 3000
const SHOES = require('./models/shoe')
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/men', async(req, res)=>{
    const shoes = await SHOES.find({category:"Men"})
    if(!shoes) return res.status(404).json({
        msg:"not found"
    })
    res.status(200).json({
        total: shoes.length,
        msg:"success",
        shoes: shoes
    })
})
app.get('/women', async(req, res)=>{
    const shoes = await SHOES.find({category:"Women"})
    if(!shoes) return res.status(404).json({
        msg:"not found"
    })
    res.status(200).json({
        total: shoes.length,
        msg:"success",
        shoes: shoes
    })
})
app.get('/unisex', async(req, res)=>{
    const shoes = await SHOES.find({category:"Unisex"})
    if(!shoes) return res.status(404).json({
        msg:"not found"
    })
    res.status(200).json({
        total: shoes.length,
        msg:"success",
        shoes: shoes
    })
})
app.get('/all',async(req,res)=>{
    const shoes = await SHOES.find({})
    if(!shoes) return res.status(404).json({
        msg:"not found"
    })
    res.status(200).json({
        total: shoes.length,
        msg:"success",
        shoes: shoes
    })
})
app.get('/shoe/:id' , async(req, res) =>{
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
})
app.post('/addShoes', async(req,res)=>{
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
})

const start = async () => {
    try {
        await mongoose.connect(process.env.SHOES)
        .then(()=>{
            console.log("db connected")
        }).then(()=>{
            app.listen(port, () => {
                console.log(`App listening on port ${port}`)
              })
        })
    } catch (error) {
        console.log(error.message)
    }
}

start()
