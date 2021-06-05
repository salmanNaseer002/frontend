import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SideNav from '../../../components/SideNav/index';
import TopNav from '../../../components/TopNav/index';
import './dashboard.css';
import '../css/side-nav.css';
// importing modules
import { getDashboardData } from './../../../services/dashboardService';
import { setDashboardData, selectDashboardData } from './../../../slice/dashboardSlice';


export default function dashboard ()
{

  const result = useSelector( selectDashboardData );
  console.log( "line 17 dashboard", result );
  console.log( "Line number 18", result.orderPlace );
  const dispatch = useDispatch();

  useEffect( () =>
  {
    ( async () =>
    {
      const data = await getDashboardData() || null;
      if ( data )
        dispatch( setDashboardData( data ) )
      else return null
    } )();
  }, [] )

  const ratingStar = ( r ) =>
  {
    console.log( "line 34", r );
    if ( r == '1' )
    {
      return ( <div>
        <span className="fa fa-star checked-star"></span>
        <span className="fa fa-star "></span>
        <span className="fa fa-star "></span>
        <span className="fa fa-star "></span>
        <span className="fa fa-star "></span>
      </div> )
    }
    if ( r == '2' )
    {
      return ( <div>
        <span className="fa fa-star checked-star"></span>
        <span className="fa fa-star checked-star"></span>
        <span className="fa fa-star "></span>
        <span className="fa fa-star "></span>
        <span className="fa fa-star "></span>

      </div>
      )
    }
    if ( r == '3' )
    {
      return ( <div>
        <span className="fa fa-star checked-star"></span>
        <span className="fa fa-star checked-star"></span>
        <span className="fa fa-star checked-star"></span>
        <span className="fa fa-star "></span>
        <span className="fa fa-star "></span>
      </div>
      )
    }
    if ( r == '4' )
    {
      return ( <div>
        <span className="fa fa-star checked-star"></span>
        <span className="fa fa-star checked-star"></span>
        <span className="fa fa-star checked-star"></span>
        <span className="fa fa-star checked-star"></span>
        <span className="fa fa-star "></span>
      </div>
      )
    }
    if ( r == '5' )
    {
      return ( <div>
        <span className="fa fa-star checked-star"></span>
        <span className="fa fa-star checked-star"></span>
        <span className="fa fa-star checked-star"></span>
        <span className="fa fa-star checked-star"></span>
        <span className="fa fa-star checked-star"></span>
      </div>
      )
    }




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
          <TopNav pageName="Dashboard" />
          <div className="mb-5">
            {/* <!-- content-part-start --> */}
            <div className="dashboard-page-content">

              <div className="container-fluid  mt-5">
                <div className="row ">

                  <div className="col-xl-3 col-lg-6  mb-3">
                    <div className="dash-card text-center p-4">
                      <h6 className="mt-4 dash-14">Registered Companies</h6>
                      <h6 className="mt-4 dash-14">{result.canadianCompanyCount}</h6>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-6  mb-3">
                    <div className="dash-card text-center p-4">
                      <h6 className="mt-4 dash-14">Customs Broker</h6>
                      <h6 className="mt-4 dash-14">{result.customBrokerCount}</h6>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-6  mb-3">
                    <div className="dash-card text-center p-4">
                      <h6 className="mt-4 dash-14">Freight Broker</h6>
                      <h6 className="mt-4 dash-14">{result.freightBrokerCount}</h6>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-6  mb-3">
                    <div className="dash-card text-center p-4">
                      <h6 className="mt-4 dash-14">Sales Representive</h6>
                      <h6 className="mt-4 dash-14">{result.salesRepCount}</h6>
                    </div>
                  </div>

                </div>
                {/* First-table-start */}
                <div className="row table-row mt-5">
                  <div className="mb-4">
                    <h1 className="dash-17-dark">Revenues - User Membership Table</h1>
                  </div>
                  {/* <!-- table-container-start --> */}
                  <div className="table-container container-fluid mb-5 mr-3">
                    <table className="w-100 dashboard-table">
                      <thead>
                        <tr className="text-center">
                          <th><a href=""></a> Transaction ID</th>
                          <th className="bdr"><a href=""></a> User</th>
                          <th className="bdr"><a href=""></a>Membership</th>
                          <th className="bdr"><a href=""></a>Start Date</th>
                          <th className="bdr"><a href=""></a>End Date</th>
                          <th className="bdr"><a href=""></a> Duration</th>
                        </tr>
                      </thead>
                      {
                        result.userMembership ? result.userMembership.map( ( data, index ) =>

                          data ?
                            <>
                              <tr className="text-center">
                                <td>{index + 1}</td>
                                <td className="bdr">{data.userId ? data.userId.chargePerson.firstName : null}</td>
                                <td className="bdr">{data.membershipId ? data.membershipId.name : null}</td>
                                <td className="bdr">{data.startDate}</td>
                                <td className="bdr">{data.endDate}</td>
                                <td className="bdr">{data.membershipId ? data.membershipId.duration : null}</td>
                                {/* <td>
                                  <Link to={{
                                    pathname: 'order-detail',
                                    data: data
                                  }}
                                    state={{ data: data }}
                                  >
                                    detail
                                </Link>
                                </td> */}
                              </tr>
                            </>
                            : null
                        ) : null
                      }

                      {/* This h1 tag please not remove. It is hidden part of table thats are couse to space at the bottom of table */}
                      <h1 style={{ visibility: 'hidden' }}>H</h1>
                    </table>
                  </div>
                  {/* <!-- table-container-End --> */}
                </div>
                {/* First-table-end */}

                {/* Second-table-start */}
                <div className="row table-row mt-5">
                  <div className="mb-4">
                    <h1 className="dash-17-dark mt-4">Order</h1>
                  </div>
                  {/* <!-- table-container-start --> */}
                  <div className="table-container container-fluid mb-5 mr-3">
                    <table className="w-100 dashboard-table">
                      <thead>
                        <tr className="text-center">
                          <th><a href=""></a>Order ID</th>
                          <th className="bdr"><a href=""></a>Canadian Company</th>
                          <th className="bdr"><a href=""></a>Service Provider</th>
                          <th className="bdr"><a href=""></a>Total Amount</th>
                          <th className="bdr"><a href=""></a>Quantity</th>
                          <th className="bdr"><a href=""></a>Date</th>
                          <th className="bdr"><a href=""></a> Detail</th>
                        </tr>
                      </thead>

                      {

                        result.orderPlace &&
                        result.orderPlace.map( ( data, index ) =>

                          <>
                            <tr className="text-center">
                              <td>{index + 1}</td>
                              <td className="bdr">{data.companyId ? data.companyId.businessName : null}</td>
                              <td className="bdr">{data.serviceProviderId ? data.serviceProviderId.businessName : null}</td>
                              <td className="bdr">{data.quantity}</td>
                              <td className="bdr">{data.totalAmount}</td>
                              <td className="bdr">{data.date}</td>
                              <td className="bdr">
                                <Link to={{
                                  pathname: 'order-detail',
                                  data: data
                                }}
                                  state={{ data: data }}
                                >
                                  detail
                                   </Link>
                              </td>
                            </tr>
                          </>

                        )

                      }

                      {/* This h1 tag please not remove. It is hidden part of table thats are couse to space at the bottom of table */}
                      <h1 style={{ visibility: 'hidden' }}>H</h1>
                    </table>
                  </div>
                  {/* <!-- table-container-End --> */}
                </div>
                {/* Second-table-end */}

                {/* Third-table-start */}
                <div className="row table-row mt-5">
                  <div className=" mb-4">
                    <h1 className="dash-17-dark">Review and Rating</h1>
                  </div>
                  {/* <!-- table-container-start --> */}
                  <div className="review-rating-table-container container-fluid mb-5 mr-3">
                    <table className="w-100 dashboard-table">
                      <thead>
                        <tr className="text-center">
                          <th><a href=""></a>ID</th>
                          <th className="bdr"><a href=""></a>Service Provider</th>
                          <th className="bdr"><a href=""></a>Review</th>
                          {/* <th className="bdr"><a href=""></a>Industry</th> */}
                          <th className="bdr"><a href=""></a>Rating</th>
                          <th className="bdr"><a href=""></a>Canadian Company</th>
                          <th className="bdr"><a href=""></a>Date</th>
                          <th className="bdr"><a href=""></a> Detail</th>
                        </tr>
                      </thead>
                      {
                        result.reviewAndRating ?
                          result.reviewAndRating.map( ( rr, index ) =>
                            <>
                              <tr className="text-center">
                                <td>{index + 1}</td>
                                <td className="bdr">{rr.serviceProviderId ? rr.serviceProviderId.chargePerson.firstName : null}</td>
                                <td className="bdr">{rr.review}</td>


                                {/* <td className="bdr">{rr.salesCompanyId ? rr.salesCompanyId.industry : null}</td> */}

                                <td className="bdr">
                                  {ratingStar( rr.rating )}

                                </td>
                                {/* {rr.companyId.businessName} */}
                                <td className="bdr"> {rr.companyId ? rr.companyId.businessName : null} </td>
                                <td className="bdr">{rr.date}</td>
                                <td>

                                  <Link to={{
                                    pathname: 'order-detail',
                                    data: rr
                                  }}
                                    state={{ data: rr }}
                                  >
                                    detail
                                </Link>
                                </td>
                              </tr>
                            </>
                          )
                          : null
                      }

                      {/* This h1 tag please not remove. It is hidden part of table thats are couse to space at the bottom of table */}
                      <h1 style={{ visibility: 'hidden' }}>H</h1>
                    </table>
                  </div>
                  {/* <!-- table-container-End --> */}
                </div>
                {/* Third-table-end */}


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
