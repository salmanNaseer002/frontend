import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './slice/dashboardSlice';
import industriesReducer from './slice/industriesSlice';
import countriesReducer from './slice/countriesSlice';
import customBrokerReducer from './slice/customBrokerSlice';
import freightBrokerReducer from './slice/freightBrokerSlice';
import canadianCompanyReducer from './slice/canadianCompanySlice';
import membershipReducer from './slice/membershipSlice';
import serviceProviderReducer from './slice/serviceProviderSlice';
import reviewAndRatingReducer from './slice/reviewAndRatingSlice';
import orderReducer from './slice/orderPlaceSlice';
import revenueReducer from './slice/revenueSlice';
import salesRepReducer from './slice/salesRepSlice';

export default configureStore( {
  reducer: {
    dashboard: dashboardReducer,
    industries: industriesReducer,
    countries: countriesReducer,
    customBroker: customBrokerReducer,
    freightBroker: freightBrokerReducer,
    canadianCompany: canadianCompanyReducer,
    membership: membershipReducer,
    service: serviceProviderReducer,
    reviewAndRating: reviewAndRatingReducer,
    order: orderReducer,
    revenue: revenueReducer,
    salesRep: salesRepReducer
  }
} );
