import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Modal } from 'react-responsive-modal';
import SideNav from '../../../components/SideNav/index';
import TopNav from '../../../components/TopNav/index';
import 'react-responsive-modal/styles.css';
import './countries.css';
import '../css/side-nav.css';
// importing modules
import { getCountriesData, addCountry, updateCountry, deleteCountry } from './../../../services/countriesService';
import { setCountriesData, selectCountriesData, setCountry, setUpdateCountry, delCountry, searchResult } from './../../../slice/countriesSlice';

var index = null;
var dataId = null;

export default function Company ()
{
  const [open, setOpen] = useState( false );
  const [openf, setOpenf] = useState( false );
  const [countr, setCountr] = useState( '' );
  const result = useSelector( selectCountriesData );
  const dispatch = useDispatch();
  const [search, setSearch] = useState( '' );
  
  useEffect( () =>
  {
    ( async () =>
    {
      const data = await getCountriesData() || null;
      if ( data )
        dispatch( setCountriesData( data ) )
      else return null
    } )();
  }, [] )

  const onOpenModal = () => setOpen( true );
  const onCloseModal = () => setOpen( false );
  const onOpenModalf = ( id, ind, c ) =>
  {
    index = ind;
    dataId = id;
    setCountr( c );
    setOpenf( true )
  };
  const onCloseModalf = () => setOpenf( false );




  let doAdd = async ( data ) =>
  {
    console.log( data );
    let cred = await addCountry( data );
    console.log( cred );
    cred.message == 'success' ?
      dispatch( setCountry( cred.data ) ) : null
    setOpen( false )

  }

  let doDel = async () =>
  {
    let message = await deleteCountry( dataId );
    message == 'success' ?
      dispatch( delCountry( { index: index } ) ) : null
    setOpenf( false );
  }

  let doUpdate = async ( data ) =>
  {
    console.log( data );
    let message = await updateCountry( data, dataId );
    console.log( message )
    message == 'success' ?
      dispatch( setUpdateCountry( { data, index } ) ) : null
    setOpenf( false );
  }

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
      {console.log( result )}
      {/* Dashboard page start */}
      <div className="dashboard-container">
        {/* <!-- side-bar-start --> */}

        <SideNav />

        {/* <!-- side-bar-End --> */}
        {/* <!-- right-sec-start --> */}
        <div className="right-sec">
          <TopNav pageName="Countries" />

          <div className="mb-5">
            {/* <!-- content-part-start --> */}
            <div className="country-page-content mt-5">

              <Modal open={open} onClose={onCloseModal}
                showCloseIcon={false}
                center
                aria-labelledby="my-modal-title"
                aria-describedby="my-modal-description"
              >
                <Formik
                  initialValues={{ name: '' }}
                  onSubmit={async ( user ) => await doAdd( user )}
                >
                  <Form className="p-4 add-country-model">
                    <h1 className="heading mb-5">Add Country</h1>
                    <Field name='name' className="add-c-input" placeholder="Country Name" /><br />
                    <button type='submit' className="mt-4">Add</button>
                  </Form>

                </Formik>
              </Modal>

              <Modal open={openf} onClose={onCloseModalf}
                showCloseIcon={false}
                center
                aria-labelledby="my-modal-title"
                aria-describedby="my-modal-description"
              >
                <Formik
                  initialValues={{ name: countr }}
                  onSubmit={async ( user ) => await doUpdate( user )}

                >
                  <Form className="p-4 edit-country-model">
                    <h1 className="heading mb-5">Edit Country</h1>
                    <Field name='name' placeholder="Country Name" className="edit-c-input" /><br />
                    <button type='submit' className="mt-4">Update</button>
                  </Form>

                </Formik>
                <button onClick={() => doDel()} >Delete</button>
              </Modal>

              <div className="container-fluid  mt-5">
                <div className=" d-flex justify-content-end flex-column flex-sm-row align-items-start pt-4">
                  <button onClick={onOpenModal} className="mr-4 add-country-btn">Add</button>
                  <form onSubmit={doSearch} className=" d-flex justify-content-end  pt-4">

                    <div className="search-input-div mr-5">
                      <i className="fa fa-search"></i>
                      <input type="text" name="" id="" placeholder="Search Order by company" className="search" onChange={handleChangeSearch} />

                    </div>

                  </form>

                </div>
                <div className="row table-row mt-4">
                  {/* <!-- table-container-start --> */}
                  <div className="table-container container-fluid mb-5 mr-3 ">
                    <table className="w-100 countries-table">
                      <thead>
                        <tr className="text-center">
                          <th>Sr#</th>
                          <th className="bdr">Country Name</th>
                          <th className="bdr">Action</th>
                        </tr>
                      </thead>
                      {
                        result.map( ( country, index ) =>
                          <>
                            <tr className="text-center">
                              <td>{index + 1}</td>
                              <td className="bdr">{country.name}</td>
                              <td className="bdr"><i className="fa fa-eye" onClick={() => onOpenModalf( country._id, index, country.name )}></i></td>
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
