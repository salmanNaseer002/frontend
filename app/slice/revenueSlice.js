import { createSlice } from '@reduxjs/toolkit';

export const revenueSlice = createSlice( {
  name: 'Revenue',
  initialState: {
    revenueData: [],
    sort: 0
  },
  reducers: {
    setRevenueData: ( state, action ) =>
    {
      console.log( action.payload );
      state.revenueData = [...action.payload];
    },
    searchDate: ( state, action ) =>
    {
      console.log( 'date' );
      console.log( action.payload );
      console.log( "parse start", Date.parse( action.payload.startDate ) );

      // state.countriesData = state.countriesData.filter( ( data, index ) => index !== action.payload.index );
      state.revenueData = state.revenueData.filter( data =>
      {
        console.log( data.startDate );
        console.log( Date.parse( data.startDate ) );
        Date.parse( ( data.startDate ) ) >= Date.parse( ( action.payload.startDate ) ) && Date.parse( ( data.endDate ) ) <= Date.parse( ( action.payload.endDate ) )

      } )
    },
    searchResult: ( state, action ) =>
    {
      console.log( "search" );
      console.log( action.payload.search );
      state.revenueData = state.revenueData.filter( data => data.userId.firstName === action.payload.search || data.membershipId.name === action.payload.search || data.membershipId.duration === action.payload.search );
    }
  },

} );

export const { setRevenueData, searchDate, searchResult } = revenueSlice.actions;

export const selectRevenueData = state => state.revenue.revenueData;

export default revenueSlice.reducer;
