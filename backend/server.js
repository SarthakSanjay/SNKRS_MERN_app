require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const port = 3000
const wishlistRouter = require('./routes/wishlist')
const shoeRouter = require('./routes/shoe')
const categoryRouter = require('./routes/category')
const cartRouter = require('./routes/cart')
const { createUser } = require('./controllers/auth')
const USER = require('./models/user')
app.use(cors())
app.use(express.json())
app.use('/wishlist', wishlistRouter)
app.use('/shoe',shoeRouter)
app.use('/category', categoryRouter)
app.use('/cart' , cartRouter)

app.post('/register', createUser)
app.get('/register', (req,res) => {
    const user =  USER.find({})
    res.status(200).json({user:user})
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
