import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cart: [],
  loading: false,
  error: null,
  total: 0,
  totalAmount: 0,
  quantity: 1
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
    increase: (state , {payload}) =>{
      const cartItem = state.cart.find((item) => {
        item._id === payload.id
        console.log(item);
      })

      // cartItem.quantity += cartItem.quantity + 1
      // console.log(cartItem.quantity)
      // console.log(JSON.stringify(state.cart, null, 2));

    },
    decrease: (state , {payload}) =>{
      const cartItem = state.cart.find((item) => item._id === payload.id)
      cartItem.quantity += cartItem.quantity - 1
    },
    calculateTotalAmount : (state , action) =>{
      let quantity = 0
      let total = 0
      state.cart.forEach((items) => {
        quantity += items.quantity
        total += quantity * items.shoeId.price
      })
      state.total = quantity
      state.totalAmount = total
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

        state.quantity = action.payload[0].quantity
        // console.log("payload",action.payload[0].quantity)
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
 
});

export { fetchCart };
export const {calculateTotalAmount , increase , decrease} = cartSlice.actions
export default cartSlice.reducer;
