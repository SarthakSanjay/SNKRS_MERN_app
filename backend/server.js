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
const userRouter = require('./routes/user')
const loginRouter = require('./routes/login')
const searchRouter = require('./routes/search')
const filterRouter = require('./routes/filter')

app.use(cors())
app.use(express.json({limit:"20kb"})) //{limit:""} professional code
app.use(express.urlencoded({extended:true , limit: "16kb"})) // how url is encoded eg. sharko+king or sharko%20king


app.use('/wishlist', wishlistRouter)
app.use('/shoe',shoeRouter)
app.use('/category', categoryRouter)
app.use('/cart' , cartRouter)
app.use('/register', userRouter)
app.use('/login', loginRouter)
app.use('/search',searchRouter)
app.use('/filter',filterRouter)


const start = async () => {
    //always use trycatch for database connection
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
