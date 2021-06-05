import { createSlice } from '@reduxjs/toolkit';

export const customBrokerSlice = createSlice( {
  name: 'CustomBroker',
  initialState: {
    customBrokerData: []
  },
  reducers: {
    setCustomBrokerData: ( state, action ) =>
    {
      console.log( action.payload );
      state.customBrokerData = [...action.payload];
    },
    searchResult: ( state, action ) =>
    {
      console.log( "search" );
      console.log( action.payload.search );
      state.customBrokerData = state.customBrokerData.filter( data => data.chargePerson.firstName === action.payload.search || data.chargePerson.lastName === action.payload.search || data.businessName === action.payload.search );
    }
  },
} );

export const { setCustomBrokerData, searchResult } = customBrokerSlice.actions;

export const selectCustomBrokerData = state => state.customBroker.customBrokerData;

export default customBrokerSlice.reducer;
