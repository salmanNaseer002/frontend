import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SideNav from '../../../components/SideNav/index';
import TopNav from '../../../components/TopNav/index';
import './custom-broker.css';
import '../css/side-nav.css';
// importing modules
import { getCustomBrokerData } from './../../../services/customBrokerService';
import { setCustomBrokerData, selectCustomBrokerData, searchResult } from './../../../slice/customBrokerSlice';

export default function Company ()
{

  const result = useSelector( selectCustomBrokerData );
  const dispatch = useDispatch();
  const [search, setSearch] = useState( '' );

  useEffect( () =>
  {
    ( async () =>
    {
      const data = await getCustomBrokerData() || null;
      if ( data )
        dispatch( setCustomBrokerData( data ) )
      else return null
    } )();
  }, [] )

  let handleChangeSearch = ( event ) =>
  {
    console.log( event.target.value );
    setSearch( event.target.value );
  }

  let doSearch = ( e ) =>
  {
    e.preventDefault();
    dispatch( searchResult( { search } ) );
  }

  return (
    <>
      {/* Dashboard page start */}
      <div className="dashboard-container">
        {/* <!-- side-bar-start --> */}

        <SideNav />

        {/* <!-- side-bar-End --> */}
        {/* <!-- right-sec-start --> */}
        <div className="right-sec">
          <TopNav pageName="Custom Broker" />

          <div className="mb-5">

            {/* <!-- content-part-start --> */}
            <div className="custom-b-page-content mt-5">

              <div className="container-fluid  mt-5">

                <form onSubmit={doSearch} className=" d-flex justify-content-end  pt-4">
                  <div className="search-input-div mr-5">
                    <i className="fa fa-search"></i>
                    <input type="text" name="" id="" placeholder="Search Order by company" className="search" onChange={handleChangeSearch} />

                  </div>

                </form>

                <div className="row table-row mt-4">
                  {/* <!-- table-container-start --> */}
                  <div className="table-container container-fluid mb-5 mr-3">
                    <table className="w-100 custom-table">
                      <thead>
                        <tr className="text-center">
                          <th>Sr#</th>
                          <th className="bdr">First Name</th>
                          <th className="bdr">Last Name</th>
                          <th className="bdr"> Website</th>
                          <th className="bdr">Email</th>
                          <th className="bdr">Business Name</th>

                          <th className="bdr">Business Address</th>
                          <th className="bdr">Action</th>

                          {/* <th className="bdr">Detail</th> */}
                        </tr>
                      </thead>
                      {
                        result.map( ( customBroker, index ) =>
                          <tr className="text-center">
                            <td>{index + 1}</td>
                            <td className="bdr">{customBroker.chargePerson.firstName}</td>
                            <td className="bdr">{customBroker.chargePerson.lastName}</td>
                            <td className="bdr">{customBroker.website}</td>
                            <td className="bdr">{customBroker.email}</td>
                            <td className="bdr">{customBroker.businessName}</td>
                            <td className="bdr">{customBroker.address}</td>

                            <td>
                              <Link to={{
                                pathname: 'custom-broker-detail',
                                data: customBroker
                              }}
                                state={{ data: customBroker }}
                              >
                                <i className="fa fa-eye"></i>
                              </Link>
                            </td>
                          </tr>
                        )
                      }

                      {/* This h1 tag please not remove. It is hidden part of table thats are couse to space at the bottom of table */}
                      <h1 style={{ visibility: 'hidden' }}>H</h1>
                    </table>
                  </div>
                  {/* <!-- table-container-End --> */}
                </div>


              </div>



            </div>
          </div>
          {/* <!-- content-part-End --> */}
        </div>
        {/* <!-- right-sec-End --> */}
      </div>
      {/* Dashboard page end */}
    </>
  );
}
