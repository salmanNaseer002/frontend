import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SortIcon from '../../../images/sort.svg';
import SideNav from '../../../components/SideNav/index';
import TopNav from '../../../components/TopNav/index';
import './review-and-rating.css';
import '../css/side-nav.css';
// importing modules
import { getReviewAndRatingData } from './../../../services/reviewAndRatingService';
import { setReviewAndRatingData, selectReviewAndRatingData, sortCompanyName, sortServiceName, searchDate, searchResult } from './../../../slice/reviewAndRatingSlice';

export default function ReviewAndRating ()
{

  const result = useSelector( selectReviewAndRatingData );
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState( '' );
  const [endDate, setEndDate] = useState( '' );
  const [search, setSearch] = useState( '' );
  useEffect( () =>
  {
    ( async () =>
    {
      const data = await getReviewAndRatingData() || null;
      if ( data )
        dispatch( setReviewAndRatingData( data ) )
      else return null
    } )();
  }, [] )

  const ratingStar = ( r ) =>
  {
    console.log( "line 34", typeof ( r ) );
    if ( r === ( 1 ) )
    {
      return ( <div>
        <span className="fa fa-star checked-star"></span>
        <span className="fa fa-star "></span>
        <span className="fa fa-star "></span>
        <span className="fa fa-star "></span>
        <span className="fa fa-star "></span>
      </div> )
    }
    if ( r === ( 2 ) )
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
    if ( r === ( 3 ) )
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
    if ( r === ( 4 ) )
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
    if ( r === ( 5 ) )
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
  let doSortCompanyName = () =>
  {
    dispatch( sortCompanyName() )
  }
  let doSortService = () =>
  {
    dispatch( sortServiceName() )
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
    result ?
      <>
        {/* Dashboard page start */}
        <div className="dashboard-container">
          {/* <!-- side-bar-start --> */}

          <SideNav />

          {/* <!-- side-bar-End --> */}
          {/* <!-- right-sec-start --> */}
          <div className="right-sec">
            <TopNav pageName="Review and Rating" />
            <div className="mb-5">
              {/* <!-- content-part-start --> */}
              <div className="review-page-content">

                <div className="container-fluid  mt-5">
                  {/* First-table-start */}
                  <div className="row table-row mt-5">
                    <div className="d-flex justify-content-sm-between w-100 align-items-sm-center flex-column flex-sm-row align-items-start  mb-4">
                      <h1 className="dash-17-dark">Review and Rating</h1>
                      <form onSubmit={doSearch} className=" d-flex justify-content-end  pt-4">
                        <div className="search-input-div mr-5">
                          <i className="fa fa-search"></i>
                          <input type="text" name="" id="" placeholder="Search Order by company" className="search" onChange={handleChangeSearch} />

                        </div>

                      </form>
                    </div>
                    {/* <!-- table-container-start --> */}
                    <div className="review-rating-d-table-container container-fluid mb-5 mr-3">
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
                      <table className="w-100 review-detail-table">
                        <thead>
                          <tr className="text-center">
                            <th><a href=""><img src={SortIcon} alt="" width="14px" className="mr-1 sort-icon" /></a>ID</th>
                            <th className="bdr" onClick={doSortCompanyName}><img src={SortIcon} alt="" width="14px" className="mr-1 sort-icon" />Service Provider</th>
                            {/* <th className="bdr"><a href=""><img src={SortIcon} alt="" width="14px" className="mr-1 sort-icon" /></a>Review</th> */}
                            <th className="bdr" onClick={doSortService}><img src={SortIcon} alt="" width="14px" className="mr-1 sort-icon" />Review</th>
                            <th className="bdr"><a href=""><img src={SortIcon} alt="" width="14px" className="mr-1 sort-icon" /></a>Rating</th>
                            <th className="bdr" onClick={doSortCompanyName}><a href=""><img src={SortIcon} alt="" width="14px" className="mr-1 sort-icon" /></a>Canadian Company</th>
                            <th className="bdr"><a href=""><img src={SortIcon} alt="" width="14px" className="mr-1 sort-icon" /></a>Date</th>

                            <th className="bdr"><a href=""><img src={SortIcon} alt="" width="14px" className="mr-1 sort-icon" /></a> Detail</th>
                          </tr>
                        </thead>
                        {

                          result.map( ( rr, index ) =>
                            <>
                              <tr className="text-center" key={index}>
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
      :
      null
  );
}
