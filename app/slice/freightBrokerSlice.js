import { createSlice } from '@reduxjs/toolkit';

export const freightBrokerSlice = createSlice( {
  name: 'CustomBroker',
  initialState: {
    freightBrokerData: []
  },
  reducers: {
    setFreightBrokerData: ( state, action ) =>
    {
      console.log( action.payload );
      state.freightBrokerData = [...action.payload];
    },
    searchResult: ( state, action ) =>
    {
      console.log( "search" );
      console.log( action.payload.search );
      state.freightBrokerData = state.freightBrokerData.filter( data => data.chargePerson.firstName === action.payload.search || data.chargePerson.lastName === action.payload.search || data.businessName === action.payload.search );
    }
  },
} );

export const { setFreightBrokerData, searchResult } = freightBrokerSlice.actions;

export const selectFreightBrokerData = state => state.freightBroker.freightBrokerData;

export default freightBrokerSlice.reducer;
