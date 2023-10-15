import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cart: [],
  loading: false,
  error: null,
  totalItems: 0,
  totalAmount: 0,
  amount: 0
};

const fetchCart = createAsyncThunk('cartSlice/fetchCart', async () => {
  try {
    const response = await axios.get('http://localhost:3000/cart');
    // console.log(response.data.shoe)
    return response.data.shoe; // Return the 'shoe' data from the response
  } catch (error) {
    throw new Error('Error fetching wishlist: ' + error.message);
  }
});

const calculateTotalAmount = (items) =>{
  return items.reduce((totalPrice, item)=>{
    return totalPrice + item.shoeId.price * item.quantity
  },0)
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.loading = false;
        state.error = null;
        state.totalItems = action.payload.length
        state.totalAmount = calculateTotalAmount(action.payload)       
      
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
 
});

export { fetchCart };
export const { increase , decrease} = cartSlice.actions
export default cartSlice.reducer;
