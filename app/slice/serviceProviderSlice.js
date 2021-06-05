import { createSlice } from '@reduxjs/toolkit';

export const serviceProviderSlice = createSlice( {
    name: 'Membership',
    initialState: {
        serviceData: []
    },
    reducers: {
        setServiceData: ( state, action ) =>
        {
            console.log( action.payload );
            state.serviceData = [...action.payload];
        },

    },
} );

export const { setServiceData } = serviceProviderSlice.actions;

export const selectServiceProviderData = state => state.service.serviceData;

export default serviceProviderSlice.reducer;
