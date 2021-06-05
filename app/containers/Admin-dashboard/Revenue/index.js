import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SortIcon from '../../../images/sort.svg';
import SideNav from '../../../components/SideNav/index';
import TopNav from '../../../components/TopNav/index';
import './revenue.css';
import '../css/side-nav.css';
// importing modules
import { getRevenueData } from '../../../services/revenueService';
import { setRevenueData, selectRevenueData, searchDate, searchResult } from '../../../slice/revenueSlice';

export default function Revenue ()
{
  const result = useSelector( selectRevenueData );
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState( '' );
  const [endDate, setEndDate] = useState( '' );
  const [search, setSearch] = useState( '' );

  useEffect( () =>
  {
    ( async () =>
    {
      const data = await getRevenueData() || null;
      console.log( "line 23", data );
      if ( data )
        dispatch( setRevenueData( data ) )
      else return null
    } )();
  }, [] )

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
          <TopNav pageName="Revenue" />
          <div className="mb-5">
            {/* <!-- content-part-start --> */}
            <div className="revenue-page-content">

              <div className="container-fluid  mt-5">
                {/* First-table-start */}
                <div className="row table-row mt-5">
                  <div className="d-flex justify-content-sm-between w-100 align-items-sm-center flex-column flex-sm-row align-items-start  mb-4">
                    <h1 className="dash-17-dark">Revenues</h1>
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
                    <table className="w-100 revenue-detail-table">
                      <thead>
                        <tr className="text-center">
                          <th><a href=""><img src={SortIcon} alt="" width="14px" className="mr-1 sort-icon" /></a> Transaction ID</th>
                          <th className="bdr"><a href=""><img src={SortIcon} alt="" width="14px" className="mr-1 sort-icon" /></a> User</th>
                          <th className="bdr"><a href=""><img src={SortIcon} alt="" width="14px" className="mr-1 sort-icon" /></a>Membership</th>
                          <th className="bdr"><a href=""><img src={SortIcon} alt="" width="14px" className="mr-1 sort-icon" /></a>Start Date</th>
                          <th className="bdr"><a href=""><img src={SortIcon} alt="" width="14px" className="mr-1 sort-icon" /></a>End Date</th>
                          <th className="bdr"><a href=""><img src={SortIcon} alt="" width="14px" className="mr-1 sort-icon" /></a>Duration</th>

                          {/* <th className="bdr"><a href=""><img src={SortIcon} alt="" width="14px" className="mr-1 sort-icon" /></a> Detail</th> */}
                        </tr>
                      </thead>

                      {
                        result ? result.map( ( data, index ) =>

                          data ?
                            <>
                              <tr className="text-center">
                                <td>{index + 1}</td>
                                <td className="bdr">{data.userId ? data.userId.chargePerson.firstName : null}</td>
                                <td className="bdr">{data.membershipId.name}</td>
                                <td className="bdr">{data.startDate}</td>
                                <td className="bdr">{data.endDate}</td>
                                <td className="bdr">{data.membershipId.duration}</td>

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
