import { createSlice } from '@reduxjs/toolkit';

export const countriesSlice = createSlice( {
  name: 'Countries',
  initialState: {
    countriesData: []
  },
  reducers: {
    setCountriesData: ( state, action ) =>
    {
      console.log( action.payload );
      state.countriesData = [...action.payload];
    },
    setCountry: ( state, action ) =>
    {
      console.log( action.payload );
      state.countriesData.push( action.payload );
    },
    delCountry: ( state, action ) =>
    {
      console.log( action.payload );
      state.countriesData = state.countriesData.filter( ( data, index ) => index !== action.payload.index );
    },
    setUpdateCountry: ( state, action ) =>
    {
      console.log( action.payload );
      state.countriesData[action.payload.index] = action.payload.data;
    },
    searchResult: ( state, action ) =>
    {
      state.countriesData = state.countriesData.filter( ( data, index ) => data.name === action.payload.search );
    }

  },
} );

export const { setCountriesData, setCountry, setUpdateCountry, delCountry, searchResult } = countriesSlice.actions;

export const selectCountriesData = state => state.countries.countriesData;

export default countriesSlice.reducer;
