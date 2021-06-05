import { createSlice } from '@reduxjs/toolkit';

export const membershipSlice = createSlice( {
    name: 'Membership',
    initialState: {
        membershipData: []
    },
    reducers: {
        setMembershipData: ( state, action ) =>
        {
            console.log( action.payload );
            state.membershipData = [...action.payload];
        },
        setMembership: ( state, action ) =>
        {
            console.log( action.payload );
            state.membershipData.push( action.payload );
        },
        delMembership: ( state, action ) =>
        {
            console.log( action.payload );
            state.membershipData = state.membershipData.filter( ( data, index ) => index !== action.payload.index );
        },
        setUpdateMembership: ( state, action ) =>
        {
            console.log( action.payload );
            state.membershipData[action.payload.index] = action.payload.data;
        },
        searchResult: ( state, action ) =>
        {
            console.log( "search" );
            console.log( action.payload.search );
            state.membershipData = state.membershipData.filter( data => data.duration === action.payload.search || data.name === action.payload.search || data.price == action.payload.search );
        }
    },
} );

export const { setMembershipData, setMembership, delMembership, setUpdateMembership, searchResult } = membershipSlice.actions;

export const selectMembershipData = state => state.membership.membershipData;

export default membershipSlice.reducer;
