import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { getStorage } from '../../services/authService';
import Login from '../../containers/Admin-dashboard/Login/Loadable';
import Dashboard from 'containers/Admin-dashboard/Dashboard/Loadable';
import Revenue from 'containers/Admin-dashboard/Revenue/Loadable';
import Membership from 'containers/Admin-dashboard/Membership/Loadable';
import Order from 'containers/Admin-dashboard/Order/Loadable';
import Company from 'containers/Admin-dashboard/Company/Loadable';
import CustomBroker from 'containers/Admin-dashboard/CustomBroker/Loadable';
import FreightBroker from 'containers/Admin-dashboard/FreightBroker/Loadable';
import Sales from 'containers/Admin-dashboard/Sales/Loadable';
import Countries from 'containers/Admin-dashboard/Countries/Loadable';
import Industries from 'containers/Admin-dashboard/Industries/Loadable';
import ReviewAndRating from 'containers/Admin-dashboard/ReviewRating/Loadable';
import OrderDetail from 'containers/Admin-dashboard/OrderDetail/Loadable';
import CustomBrokerDetail from 'containers/Admin-dashboard/CustomBrokerDetail/Loadable';
import SalesRepDetail from 'containers/Admin-dashboard/SalesRepDetail/Loadable';
import NotFound from 'containers/Admin-dashboard/NotFound/notFound';

import GlobalStyle from '../../global-styles';
//  import SalesRepDetail from '../Admin-dashboard/SalesRepDetail';

export default function App ()
{
  return (
    <div>
      <Switch>
        <Route exact path="/login" component=
          {
            ( props ) => !getStorage() ? <Login {...props} /> : <Redirect to='/' />

          } />
        <Route exact path="/" component=
          {
            ( props ) => getStorage() ? <Dashboard {...props} /> : <Redirect to='/login' />

          } />
        <Route exact path="/dashboard" component=
          {
            ( props ) => getStorage() ? <Dashboard {...props} /> : <Redirect to='/login' />

          } />
        <Route exact path="/revenue" component=
          {
            ( props ) => getStorage() ? <Revenue {...props} /> : <Redirect to='/login' />

          } />
        <Route exact path="/membership" component=
          {
            ( props ) => getStorage() ? <Membership {...props} /> : <Redirect to='/login' />

          } />
        <Route exact path="/order" component=
          {
            ( props ) => getStorage() ? <Order {...props} /> : <Redirect to='/login' />

          } />
        <Route exact path="/company" component=
          {
            ( props ) => getStorage() ? <Company {...props} /> : <Redirect to='/login' />

          } />
        <Route exact path="/freight-broker" component=
          {
            ( props ) => getStorage() ? <FreightBroker {...props} /> : <Redirect to='/login' />

          } />

        <Route exact path="/custom-broker" component=
          {
            ( props ) => getStorage() ? <CustomBroker {...props} /> : <Redirect to='/login' />

          } />
        <Route exact path="/sales-representive" component=
          {
            ( props ) => getStorage() ? <Sales {...props} /> : <Redirect to='/login' />

          } />
        <Route exact path="/countries" component=
          {
            ( props ) => getStorage() ? <Countries {...props} /> : <Redirect to='/login' />

          } />
        <Route exact path="/industries" component=
          {
            ( props ) => getStorage() ? <Industries {...props} /> : <Redirect to='/login' />

          } />
        <Route exact path="/review-and-rating" component=
          {
            ( props ) => getStorage() ? <ReviewAndRating {...props} /> : <Redirect to='/login' />

          } />
        <Route exact path="/order-detail" component={OrderDetail} />
        <Route exact path="/custom-broker-detail" component={CustomBrokerDetail} />
        <Route exact path="/freight-broker-detail" component={OrderDetail} />
        <Route exact path="/sales-rep-detail" component={SalesRepDetail} />
        <Route exact path="/custom-broker-detail" component={CustomBrokerDetail} />
        <Route eaxact path="/not-found" component={NotFound} />
        <Redirect to='/not-found' />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
