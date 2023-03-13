import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  citystore: [],
  status: 'idle',
  error: null,
};

export const detailSlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
  },

  extraReducers() {
  },

});
export default detailSlice.reducer;
