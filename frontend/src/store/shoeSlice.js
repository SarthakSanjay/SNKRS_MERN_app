import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    shoes: [],
    loading : false ,
    error : null
}

const url = "http://localhost:3000/shoe/all"
const fetchShoes = createAsyncThunk('shoeSlice/fetchShoes', async () => {
    try {
      const response = await axios.get(url);
    //   console.log(response.data.shoes)
      return response.data.shoes; // Return the 'shoe' data from the response
    } catch (error) {
      throw new Error('Error fetching wishlist: ' + error.message);
    }
  })

const shoeSlice = createSlice({
    name: 'shoe',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchShoes.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchShoes.fulfilled, (state, action) => {
          state.shoes = action.payload;
          state.loading = false;
          state.error = null;
          state.total = action.payload.length
        })
        .addCase(fetchShoes.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    }
})

export {fetchShoes}
export default shoeSlice.reducer