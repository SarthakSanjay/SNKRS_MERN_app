import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cart: [],
  loading: false,
  error: null,
  total: 0,
  totalAmount: 0
};
const url = 'http://localhost:3000/cart'

const fetchCart = createAsyncThunk('cartSlice/fetchCart', async () => {
  try {
    const response = await axios.get(url);
    // console.log(response.data.shoe)
    return response.data.shoe; // Return the 'shoe' data from the response
  } catch (error) {
    throw new Error('Error fetching wishlist: ' + error.message);
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    calculateTotalAmount : (state , action) =>{
      // state.totalAmount = action.payload
      // console.log(state.totalAmount)
      
      const totalAmount = state.cart.map(( cartItem) => {
        console.log("cartItem" , cartItem.shoeId.price)
        return cartItem.shoeId.price * action.payload
      }) 

      // Update the total amount in the state
      state.totalAmount = totalAmount;
      console.log(state.totalAmount);

    }
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
        state.total = action.payload.length
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export { fetchCart };
export const {calculateTotalAmount} = cartSlice.actions
export default cartSlice.reducer;