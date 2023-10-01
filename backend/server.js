require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const port = 3000
const SHOES = require('./models/shoe')
// const WISHLIST = require('./models/wishlist')
const wishlistRouter = require('./routes/wishlist')
const shoeRouter = require('./routes/shoe')
app.use(cors())
app.use(express.json())
app.use('/wishlist', wishlistRouter)
app.use('/shoe',shoeRouter)

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
app.get('/shoe/all',)
app.get('/shoe/:id' , )
app.post('/shoe/addShoes', )


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
