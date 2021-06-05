import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SideNav from '../../../components/SideNav/index';
import TopNav from '../../../components/TopNav/index';
import './sales.css';
import '../css/side-nav.css';
// importing modules
import { getSalesRepData } from './../../../services/salesRepService';
import { setSalesRepData, selectSalesRepData, searchResult } from '../../../slice/salesRepSlice';

export default function Company ()
{

  const result = useSelector( selectSalesRepData );
  const dispatch = useDispatch();
  const [search, setSearch] = useState( '' );
  useEffect( () =>
  {
    ( async () =>
    {
      const data = await getSalesRepData() || null;
      console.log( data );
      if ( data )
        dispatch( setSalesRepData( data ) )
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
    result ?
      <>

        {/* Dashboard page start */}
        <div className="dashboard-container">
          {/* <!-- side-bar-start --> */}

          <SideNav />

          {/* <!-- side-bar-End --> */}
          {/* <!-- right-sec-start --> */}
          <div className="right-sec">
            <TopNav pageName="Sale Representive" />
            <div className="mb-5">
              {/* <!-- content-part-start --> */}
              <div className="sale-page-content">


                <div className="container-fluid  mt-5">

                  <form onSubmit={doSearch} className=" d-flex justify-content-end  pt-4">
                    <div className="search-input-div mr-5">
                      <i className="fa fa-search"></i>
                      <input type="text" name="" id="" placeholder="Search Order by company" className="search" onChange={handleChangeSearch} />

                    </div>

                  </form>

                  <div className="row table-row mt-4">
                    {/* <!-- table-container-start --> */}
                    <div className="table-container container-fluid mb-5 mr-3 ">
                      <table className="w-100 sales-table">
                        <thead>
                          <tr className="text-center">
                            <th>Sr#</th>
                            <th className="bdr">Name</th>
                            <th className="bdr">Address</th>
                            <th className="bdr">Contact</th>
                            <th className="bdr">Action</th>
                          </tr>
                        </thead>

                        {
                          result.map( ( sr, index ) =>
                            <tr className="text-center">
                              {console.log( sr )}
                              <td>{index + 1}</td>
                              <td className="bdr">{sr.chargePerson.firstName}</td>
                              <td className="bdr">{sr.address}</td>
                              <td className="bdr">{sr.email}</td>

                              <td>
                                <Link to={{
                                  pathname: 'sales-rep-detail',
                                  data: sr
                                }}
                                  state={{ data: sr }}
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
      :
      null
  );
}
