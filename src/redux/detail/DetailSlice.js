import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1/name/';
const initialState = {
  detailstore: [],
  status: 'idle',
  error: null,
  selectedCountry: 'Ethiopia',
};
export const fetchCountryDetail = createAsyncThunk('country/fetchCountryDetail', async (selectedCountry) => {
  try {
    const response = await axios.get(`${BASE_URL + selectedCountry}?fullText=true`);
    return response.data;
  } catch (error) {
    return error.message;
  }
});
export const detailSlice = createSlice({
  name: 'countrydetail',
  initialState,
  reducers: {
    selectedCountryAction: (state, payload) => ({
      ...state,
      selectedCountry: payload.payload,
    }),
  },

  extraReducers(builder) {
    builder.addCase(fetchCountryDetail.pending, (state) => ({
      ...state,
      status: 'loading',
    }))
      .addCase(fetchCountryDetail.fulfilled, (state, action) => ({
        ...state,
        detailstore: action.payload.map((country) => ({

          id: country.name.common,
          name: country.name.official,
          population: country.population,
          flag: country.flags.png,
          capital: country.capital[0],
          maps: country.maps.googleMaps,
          timezones: country.timezones[0],
          region: country.region,
          coatOfArms: country.coatOfArms.png,
          startOfWeek: country.startOfWeek,
          area: country.area,
          languages: country.languages,
          idd: country.idd.root,
          suffix: country.idd.suffixes[0],

        })),
        status: 'loaded',
      })).addCase(fetchCountryDetail.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }));
  },

});
export const { selectedCountryAction } = detailSlice.actions;
export default detailSlice.reducer;
