import {configureStore} from '@reduxjs/toolkit'
import wishlistReducer from './wishlistSlice'
import shoeReducer from './shoeSlice'
import cartReducer from './cartSlice'
const store = configureStore({
    reducer:{
        wishlist : wishlistReducer,
        shoe : shoeReducer ,
        cart : cartReducer
    }
})

export default store