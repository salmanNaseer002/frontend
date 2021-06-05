import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SideNav from './../../../components/SideNav/index';
import TopNav from '../../../components/TopNav/index';
import './freight-broker.css';
import '../css/side-nav.css';
// importing modules
import { getFreightBrokerData } from './../../../services/freightBrokerService';
import { setFreightBrokerData, selectFreightBrokerData, searchResult } from './../../../slice/freightBrokerSlice';

export default function Company ()
{

  const result = useSelector( selectFreightBrokerData );
  const dispatch = useDispatch();
  const [search, setSearch] = useState( '' );
  useEffect( () =>
  {
    ( async () =>
    {
      const data = await getFreightBrokerData() || null;
      if ( data )
        dispatch( setFreightBrokerData( data ) )
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
          <TopNav pageName="Freight Broker" />

          <div className="mb-5">
            {/* <!-- content-part-start --> */}
            <div className="freight-page-content mt-5">




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
                    <table className="w-100 freight-table">
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
                        </tr>
                      </thead>

                      {
                        result.map( ( frightBroker, index ) =>
                          <tr className="text-center">
                            <td>{index + 1}</td>
                            <td className="bdr">{frightBroker.chargePerson ? frightBroker.chargePerson.firstName : null}</td>
                            <td className="bdr">{frightBroker.chargePerson ? frightBroker.chargePerson.lastName : null}</td>
                            <td className="bdr">{frightBroker.website}</td>
                            <td className="bdr">{frightBroker.email}</td>
                            <td className="bdr">{frightBroker.businessName}</td>
                            <td className="bdr">{frightBroker.address}</td>
                            <td>
                              <Link to={{
                                pathname: 'custom-broker-detail',
                                data: frightBroker
                              }}
                                state={{ data: frightBroker }}
                              >
                                <i className="fa fa-eye"></i>
                              </Link>
                            </td>
                          </tr>
                        )
                      }
                      {/* 
                      <tr className="text-center">
                   <td>1</td>
                   <td className="bdr">Mobile</td>
                   <td className="bdr">Pakistan</td>
                   <td className="bdr">Joyn</td>
                   <td className="bdr"><a href=""><i class="fa fa-eye"></i></a></td>
                      </tr>
                        */}

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
