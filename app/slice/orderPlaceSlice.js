import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice( {
  name: 'Order',
  initialState: {
    orderData: [],
    sort: 0
  },
  reducers: {
    setOrderData: ( state, action ) =>
    {
      console.log( action.payload );
      state.orderData = [...action.payload];
    },
    sortAmount: ( state, action ) =>
    {
      console.log( 'sorting Amount' );
      if ( state.sort == 0 )
      {
        state.orderData = state.orderData.sort( ( a, b ) => ( a.totalAmount ) - ( b.totalAmount ) );
        state.sort = 1;
      }
      else
      {
        state.orderData = state.orderData.sort( ( a, b ) => ( b.totalAmount ) - ( a.totalAmount ) );
        state.sort = 0;
      }
    },
    sortQuantity: ( state, action ) =>
    {
      console.log( 'sorting Quantity' );
      if ( state.sort == 0 )
      {
        state.orderData = state.orderData.sort( ( a, b ) => ( a.quantity ) - ( b.quantity ) );
        state.sort = 1;
      }
      else
      {
        state.orderData = state.orderData.sort( ( a, b ) => ( b.quantity ) - ( a.quantity ) );
        state.sort = 0;
      }
    },
    sortCompanyName: ( state, action ) =>
    {
      console.log( 'sorting business Name' );
      if ( state.sort == 0 )
      {
        state.orderData = state.orderData.sort( ( a, b ) => a.companyId.businessName.localCompare( b.companyId.businessName ) )
        state.sort = 1;
      } else
      {
        state.orderData = state.orderData.sort( ( a, b ) => b.companyId.businessName.localCompare( a.companyId.businessName ) )
        state.sort = 0;

      }

    },
    searchDate: ( state, action ) =>
    {
      console.log( 'date' );
      console.log( action.payload );
      console.log( "parse start", Date.parse( action.payload.startDate ) );

      // state.countriesData = state.countriesData.filter( ( data, index ) => index !== action.payload.index );
      state.orderData = state.orderData.filter( data =>
      {
        console.log( data.date );
        console.log( Date.parse( data.date ) );
        Date.parse( ( data.date ) ) >= Date.parse( ( action.payload.startDate ) ) && Date.parse( ( data.date ) ) <= Date.parse( ( action.payload.endDate ) )

      } )
    },
    searchResult: ( state, action ) =>
    {
      console.log( "search" );
      console.log( action.payload.search );
      state.orderData = state.orderData.filter( data => data.companyId.businessName === action.payload.search );
    }
  },
} );

export const { setOrderData, sortAmount, sortQuantity, sortCompanyName, searchDate, searchResult } = orderSlice.actions;

export const selectOrderData = state => state.order.orderData;

export default orderSlice.reducer;
