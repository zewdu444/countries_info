import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1/all';
const initialState = {
  countrystore: [],
  searchresult: '',
  status: 'idle',
  error: null,
};
export const fetchCountry = createAsyncThunk('country/fetchCountry', async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    return error.message;
  }
});
export const homeSlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    searchField: (state, payload) => ({
      ...state,
      searchresult: payload.payload,
    }),

  },

  extraReducers(builder) {
    builder.addCase(fetchCountry.pending, (state) => ({
      ...state,
      status: 'loading',
    }))
      .addCase(fetchCountry.fulfilled, (state, action) => ({
        ...state,
        countrystore: action.payload.map((country) => ({

          country_id: country.name.common,
          country_name: country.name.common,
          country_population: country.population,
          country_flag: country.flags.png,
        })),
        status: 'loaded',
      })).addCase(fetchCountry.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }));
  },

});
export const { searchField } = homeSlice.actions;
export default homeSlice.reducer;
