import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countrystore: [],
  status: 'idle',
  error: null,
};

export const homeSlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
  },

  extraReducers() {
  },

});
export default homeSlice.reducer;
