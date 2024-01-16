import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie } from '../utils/cookie';

const initialState = {
  cart: [],
  loading: false,
  error: null,
  loadTotal: false,
  loadTotalError:null,
  totalAmount: 0,

  
};

const fetchCart = createAsyncThunk('cartSlice/fetchCart', async () => {
  try {
    const response = await axios.get(`http://localhost:3000/cart?userId=${getCookie('userId')}`);
    return response.data.shoes;
  } catch (error) {
    throw new Error('Error fetching wishlist: ' + error.message);
  }
});

const fetchTotalAmount = createAsyncThunk('cartSlice/fetchTotalAmount', async () => {
  try {
    const response = await axios.get(`http://localhost:3000/cart?userId=${getCookie('userId')}`);
    return response.data.totalAmount;
  } catch (error) {
    throw new Error('Error fetching total amount: ' + error.message);
  }
});

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

      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }) // fetch total
      .addCase(fetchTotalAmount.pending, (state) => {
        state.loadTotal = true;
      })
      .addCase(fetchTotalAmount.fulfilled, (state, action) => {
        state.totalAmount = action.payload;
        state.loadTotal = false;
        state.loadTotalError = null;
      })
      .addCase(fetchTotalAmount.rejected, (state, action) => {
        state.loadTotal = false;
        state.loadTotalError = action.error.message;
      });
  },
 
});

export { fetchCart , fetchTotalAmount};
// export const { incrementTotal , decrementTotal} = cartSlice.actions
export default cartSlice.reducer;
