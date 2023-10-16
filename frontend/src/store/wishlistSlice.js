import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  shoe: [],
  loading: false,
  error: null,
  total: 0,
  deleteBtnClicked: false
};

const fetchWishlist = createAsyncThunk('wishlistSlice/fetchWishlist', async () => {
  try {
    const response = await axios.get('http://localhost:3000/wishlist');
    // console.log(response.data.shoe)
    return response.data.shoe; // Return the 'shoe' data from the response
  } catch (error) {
    throw new Error('Error fetching wishlist: ' + error.message);
  }
});

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    deleteAll: (state,action) =>{
      state.deleteBtnClicked = true
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.shoe = action.payload;
        state.loading = false;
        state.error = null;
        state.total = action.payload.length
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export { fetchWishlist };
export const {deleteAll} = wishlistSlice.actions;
export default wishlistSlice.reducer;
