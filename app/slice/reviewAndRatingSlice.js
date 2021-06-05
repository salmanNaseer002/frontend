import { createSlice } from '@reduxjs/toolkit';

export const reviewAndRatingSlice = createSlice( {
  name: 'ReviewAndRating',
  initialState: {
    reviewAndRatingData: [],
    sort: 0
  },
  reducers: {
    setReviewAndRatingData: ( state, action ) =>
    {
      console.log( action.payload );
      state.reviewAndRatingData = [...action.payload];
    },
    searchDate: ( state, action ) =>
    {
      console.log( 'date' );
      console.log( action.payload );
      console.log( "parse start", Date.parse( action.payload.starDate ) );

      // state.countriesData = state.countriesData.filter( ( data, index ) => index !== action.payload.index );
      state.reviewAndRatingData = state.reviewAndRatingData.filter( data =>
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
      state.reviewAndRatingData = state.reviewAndRatingData.filter( data => data.companyId.businessName === action.payload.search || data.serviceProviderId.chargePerson.firstName === action.payload.search );
    },
    sortCompanyName: ( state, action ) =>
    {
      console.log( 'sorting business Name' );
      if ( state.sort == 0 )
      {
        state.reviewAndRatingData = state.reviewAndRatingData.sort( function ( a, b )
        {
          var nameA = a.serviceProviderId.chargePerson.firstName.toUpperCase();
          var nameB = b.serviceProviderId.chargePerson.firstName.toUpperCase();
          if ( nameA < nameB )
          {
            state.sort = 1;
            return -1
          }
          if ( nameA > nameB )
          {
            state.sort = 1;
            return 1;
          }

          // names must be equal
          return 0;
          // state.sort = 1;

        } )
      }
      else
      {
        state.reviewAndRatingData = state.reviewAndRatingData.sort( function ( a, b )
        {
          var nameA = a.serviceProviderId.chargePerson.firstName.toUpperCase();
          var nameB = b.serviceProviderId.chargePerson.firstName.toUpperCase();
          if ( nameA < nameB )
          {
            state.sort = 0;
            return 1
          }
          if ( nameA > nameB )
          {
            state.sort = 0;
            return -1;
          }

          // names must be equal
          return 0;
          // state.sort = 1;

        } )

      }


    },
    sortServiceName: ( state, action ) =>
    {
      console.log( 'sorting business Name' );
      if ( state.sort == 0 )
      {
        state.reviewAndRatingData = state.reviewAndRatingData.sort( function ( a, b )
        {
          var nameA = a.review.toUpperCase();
          var nameB = b.review.toUpperCase();
          if ( nameA < nameB )
          {
            state.sort = 1;
            return -1
          }
          if ( nameA > nameB )
          {
            state.sort = 1;
            return 1;
          }

          // names must be equal
          return 0;
          // state.sort = 1;

        } )
      }
      else
      {
        state.reviewAndRatingData = state.reviewAndRatingData.sort( function ( a, b )
        {
          var nameA = a.review.toUpperCase();
          var nameB = b.review.toUpperCase();
          if ( nameA < nameB )
          {
            state.sort = 0;
            return 1
          }
          if ( nameA > nameB )
          {
            state.sort = 0;
            return -1;
          }

          // names must be equal
          return 0;
          // state.sort = 1;

        } )

      }

    },
  },
} );

export const { setReviewAndRatingData, searchDate, searchResult, sortCompanyName, sortServiceName } = reviewAndRatingSlice.actions;

export const selectReviewAndRatingData = state => state.reviewAndRating.reviewAndRatingData;

export default reviewAndRatingSlice.reducer;
