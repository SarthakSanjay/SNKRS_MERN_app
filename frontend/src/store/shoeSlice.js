import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { getCookie } from '../utils/cookie';
const initialState = {
    shoes: [],
    loading : false ,
    error : null
}

  const fetchShoes = createAsyncThunk('shoeSlice/fetchShoes', async (url) => {
    try {
      const response = await axios.get(url,{
        headers:{
          "Authorization": `Bearer ${getCookie("accessToken")}`
        }
      }).catch(err => console.log(err.message))
      if(response.data.shoes){
        return response.data.shoes
      }
      return response.data.shoe;
    } catch (error) {
      throw new Error('Error fetching shoes: ' + error.message);
    }
  });

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