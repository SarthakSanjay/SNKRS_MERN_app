import {configureStore} from '@reduxjs/toolkit'
import wishlistReducer from './wishlistSlice'
import shoeReducer from './shoeSlice'
const store = configureStore({
    reducer:{
        wishlist : wishlistReducer,
        shoe : shoeReducer
    }
})

export default store