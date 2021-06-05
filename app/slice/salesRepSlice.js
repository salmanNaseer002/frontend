import { createSlice } from '@reduxjs/toolkit';

export const salesRepSlice = createSlice( {
  name: 'Sales Representive',
  initialState: {
    salesRepData: []
  },
  reducers: {
    setSalesRepData: ( state, action ) =>
    {
      console.log( action.payload );
      state.salesRepData = [...action.payload];
    },
    searchResult: ( state, action ) =>
    {
      console.log( "search" );
      console.log( action.payload.search );
      state.salesRepData = state.salesRepData.filter( data => data.personRep.firstName === action.payload.search );
    }

  },
} );

export const { setSalesRepData, searchResult } = salesRepSlice.actions;

export const selectSalesRepData = state => state.salesRep.salesRepData;

export default salesRepSlice.reducer;
