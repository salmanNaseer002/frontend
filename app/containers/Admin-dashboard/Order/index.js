import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SortIcon from '../../../images/sort.svg';
import SideNav from '../../../components/SideNav/index';
import TopNav from '../../../components/TopNav/index';
import './order.css';
import '../css/side-nav.css';
import OrderDetail from '../OrderDetail/index';
// importing modules
import { getOrderPlaceData } from './../../../services/orderPlaceService';
import { setOrderData, selectOrderData, sortAmount, sortCompanyName, sortQuantity, searchDate, searchResult } from '../../../slice/orderPlaceSlice';

export default function Order ()
{

  const result = useSelector( selectOrderData );
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState( '' );
  const [endDate, setEndDate] = useState( '' );
  const [search, setSearch] = useState( '' );
  useEffect( () =>
  {
    ( async () =>
    {
      const data = await getOrderPlaceData() || null;
      if ( data )
        dispatch( setOrderData( data ) )
      else return null
    } )();
  }, [] )

  let doSortQuantity = () =>
  {
    dispatch( sortQuantity() )
  }

  let doSortTotalAmount = () =>
  {
    dispatch( sortAmount() )
  }
  let doSortCompanyName = () =>
  {
    dispatch( sortCompanyName() )
  }
  let handleChangeS = ( event ) =>
  {
    setStartDate( event.target.value );
  }
  let handleChangeE = ( event ) =>
  {
    console.log( event.target.value );
    setEndDate( event.target.value );
  }
  let handleChangeSearch = ( event ) =>
  {
    console.log( event.target.value );
    setSearch( event.target.value );
  }
  let doSearchByDate = () =>
  {


    dispatch( searchDate( { startDate, endDate } ) )
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
          <TopNav pageName="Order" />
          <div className="mb-5">
            {/* <!-- content-part-start --> */}
            <div className="order-page-content">

              <div className="container-fluid  mt-5">
                {/* First-table-start */}
                <div className="row table-row mt-5">
                  <div className="d-flex justify-content-sm-between w-100 align-items-sm-center flex-column flex-sm-row align-items-start  mb-4">
                    <h1 className="dash-17-dark">Order</h1>
                    <form onSubmit={doSearch} className=" d-flex justify-content-end  pt-4">
                      <div className="search-input-div mr-5">
                        <i className="fa fa-search"></i>
                        <input type="text" name="" id="" placeholder="Search Order by company" className="search" onChange={handleChangeSearch} />

                      </div>

                    </form>
                  </div>
                  {/* <!-- table-container-start --> */}
                  <div className="table-container container-fluid mb-5 mr-3">
                    <form className="d-flex mb-4 align-items-center filter-sec">
                      <h6 className="mr-5 heading">Filter</h6>
                      <div className="mr-5">
                        <label htmlFor="" className="mr-3">Starting Date</label>
                        <input type="date" name="" id="" onChange={handleChangeS} />
                      </div>
                      <div>
                        <label htmlFor="" className="mr-3">Ending Date</label>
                        <input type="date" name="" id="" onChange={handleChangeE} />
                      </div>
                      <div>
                        <h1 style={{ marginLeft: 10, backgroundColor: 'white', border: '3px solid green', height: 27, width: 100, color: 'gray', fontSize: 12, textAlign: 'center', paddingTop: 3 }} onClick={doSearchByDate}>Filter Result</h1>
                      </div>

                    </form>
                    <table className="w-100 order-table">
                      <thead>
                        <tr className="text-center">
                          <th><a href=""><img src={SortIcon} alt="" width="14px" className="mr-1 sort-icon" /></a>Order ID</th>
                          <th className="bdr" onClick={doSortCompanyName}><a href=""><img src={SortIcon} alt="" width="14px" className="mr-1 sort-icon" /></a>Canadian Company</th>
                          <th className="bdr"><a href=""><img src={SortIcon} alt="" width="14px" className="mr-1 sort-icon" /></a>Service Provider</th>
                          <th className="bdr" onClick={doSortTotalAmount}><img src={SortIcon} alt="" width="14px" className="mr-1 sort-icon" />Total Amount</th>
                          <th className="bdr" onClick={doSortQuantity}><img src={SortIcon} alt="" width="14px" className="mr-1 sort-icon" />Quantity</th>
                          <th className="bdr"><a href=""><img src={SortIcon} alt="" width="14px" className="mr-1 sort-icon" /></a>Date</th>
                          {/* <th className="bdr"><a href=""><img src={SortIcon} alt="" width="14px" className="mr-1 sort-icon" /></a>Detail</th> */}
                          <th className="bdr"><a href=""><img src={SortIcon} alt="" width="14px" className="mr-1 sort-icon" /></a> Action</th>
                        </tr>
                      </thead>
                      {
                        result ?
                          result.map( ( data, index ) =>
                            data ?
                              <>
                                <tr className="text-center">
                                  <td>{index + 1}</td>
                                  <td className="bdr">{data.companyId ? data.companyId.businessName : null}</td>
                                  <td className="bdr">{data.serviceProviderId ? data.serviceProviderId.businessName : null}</td>
                                  <td className="bdr">{data.totalAmount}</td>
                                  <td className="bdr">{data.quantity}</td>
                                  <td className="bdr">{data.date}</td>
                                  <td className="bdr">
                                    <Link to={{
                                      pathname: '/order-detail',
                                      data: data
                                    }}
                                    ><i className="fa fa-eye"></i></Link>
                                  </td>
                                  {/* <td className="bdr"><a href=""><i className="fa fa-eye"></i></a></td> */}
                                </tr>
                              </>
                              : null
                          )
                          : null
                      }

                      {/* This h1 tag please not remove. It is hidden part of table thats are couse to space at the bottom of table */}
                      <h1 style={{ visibility: 'hidden' }}>H</h1>
                    </table>
                  </div>
                  {/* <!-- table-container-End --> */}
                </div>
                {/* First-table-end */}

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
