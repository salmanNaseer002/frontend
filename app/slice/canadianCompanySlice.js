import { createSlice } from '@reduxjs/toolkit';

export const canadianCompanySlice = createSlice( {
  name: 'CanadianCompany',
  initialState: {
    canadianCompanyData: []
  },
  reducers: {
    setCanadianCompanyData: ( state, action ) =>
    {
      console.log( action.payload );
      state.canadianCompanyData = [...action.payload];
    },
    setCompany: ( state, action ) =>
    {
      console.log( action.payload );
      state.canadianCompanyData.push( action.payload );
    },
    delCompany: ( state, action ) =>
    {
      console.log( action.payload );
      state.canadianCompanyData = state.canadianCompanyData.filter( ( data, index ) => index !== action.payload.index );
    },
    setUpdateCompany: ( state, action ) =>
    {
      console.log( action.payload );
      state.canadianCompanyData[action.payload.index] = action.payload.data;
    },
    searchResult: ( state, action ) =>
    {
      console.log( "search" );
      console.log( action.payload.search );
      state.canadianCompanyData = state.canadianCompanyData.filter( data => data.chargePerson.firstName === action.payload.search || data.chargePerson.lastName === action.payload.search || data.businessName === action.payload.search || data.email === action.payload.search || data.website === action.payload.search );
    }
  },
} );

export const { setCanadianCompanyData, setCompany, delCompany, setUpdateCompany, searchResult } = canadianCompanySlice.actions;

export const selectCanadianCompanyData = state => state.canadianCompany.canadianCompanyData;

export default canadianCompanySlice.reducer;
