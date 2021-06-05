import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'react-responsive-modal';
import SideNav from '../../../components/SideNav/index';
import TopNav from '../../../components/TopNav/index';
import 'react-responsive-modal/styles.css';
import './company.css';
import '../css/side-nav.css';
// importing modules
import { getCanadianCompanyData, addCompany, deleteCompany, updateCompany } from './../../../services/canadianCompanyService';
import { setCanadianCompanyData, selectCanadianCompanyData, setCompany, delCompany, setUpdateCompany, searchResult } from './../../../slice/canadianCompanySlice';

let index = null;
let dataId = null;

export default function Company ()
{
  const [open, setOpen] = useState( false );
  const [openf, setOpenf] = useState( false );
  const result = useSelector( selectCanadianCompanyData );
  const dispatch = useDispatch();
  const [search, setSearch] = useState( '' )
  const [values, setValues] = useState( {
    f: '',
    l: '',
    b: '',
    a: '',
    e: '',
    w: '',
    p: ''
  } )
  const { f, l, b, a, e, w, p } = values;

  useEffect( () =>
  {
    ( async () =>
    {
      const data = await getCanadianCompanyData() || null;
      if ( data )
        dispatch( setCanadianCompanyData( data ) )
      else return null;
    }
    )();
  }, [] );

  const onOpenModal = () => setOpen( true );
  const onCloseModal = () => setOpen( false );
  const onOpenModalf = ( id, ind, f, l, b, a, e, w, p ) =>
  {
    index = ind;
    dataId = id;
    setValues( { f: f, l: l, b: b, a: a, e: e, w: w, p: p } )
    setOpenf( true )
  };
  const onCloseModalf = () => setOpenf( false );

  let doAdd = async ( data ) =>
  {
    console.log( data );
    let cred = await addCompany( data );
    console.log( cred );
    cred.message == 'success' ?
      dispatch( setCompany( cred.data ) ) : null
    setOpen( false );
  }

  let doDel = async () =>
  {
    let message = await deleteCompany( dataId );
    message == 'success' ?
      dispatch( delCompany( { index: index } ) ) : null
    setOpenf( false );
  }

  let doUpdate = async ( data ) =>
  {
    console.log( data );
    let message = await updateCompany( data, dataId );
    console.log( message )
    message == 'success' ?
      dispatch( setUpdateCompany( { data, index } ) ) : null
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
      {/* Dashboard page start */}
      <div className="dashboard-container">
        {/* <!-- side-bar-start --> */}

        <SideNav />

        {/* <!-- side-bar-End --> */}
        {/* <!-- right-sec-start --> */}
        <div className="right-sec">
          <TopNav pageName="Canadian Company" />
          <div className="mb-5">
            {/* <!-- content-part-start --> */}
            <div className="company-page-content mt-5">

              <Modal open={open} onClose={onCloseModal}
                showCloseIcon={false}
                center
                aria-labelledby="my-modal-title"
                aria-describedby="my-modal-description"
              >
                <Formik
                  initialValues={{
                    businessName: '',
                    address: '',
                    website: '',
                    email: '',
                    chargePerson: {
                      firstName: '',
                      lastName: ''
                    },
                    password: ''
                  }}
                  onSubmit={async ( user ) => await doAdd( user )}
                >
                  <Form className="company-add-modal p-5">

                    <div className="container-fluid">

                      <h1 className="m-0 heading">Add Company</h1>
                      <div className="row mt-5">
                        <div className="col-lg-6">
                          <div>
                            <label htmlFor="">Business Name</label><br />
                            <Field className="add-c-input" name='businessName' placeholder="Business Name" /><br />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div>
                            <label htmlFor="">Address</label><br />
                            <Field className="add-c-input" name='address' placeholder="Address" /><br />
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-lg-6">
                          <div>
                            <label htmlFor="">First Name</label><br />
                            <Field className="add-c-input" name='chargePerson.firstName' placeholder="First Name" /><br />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div>
                            <label htmlFor="">Last Name</label><br />
                            <Field className="add-c-input" name='chargePerson.lastName' placeholder="Last Name" /><br />
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-lg-6">
                          <div>
                            <label htmlFor="">Email</label><br />
                            <Field className="add-c-input" name='email' placeholder="something@gmail.com" /><br />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div>
                            <label htmlFor="">Website</label><br />
                            <Field className="add-c-input" name='website' placeholder="https://" /><br />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div>
                            <label htmlFor="">Password</label><br />
                            <Field className="add-c-input" name='password' type="password" /><br />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end mt-5">
                        <button type='submit'>Add</button>
                      </div>
                    </div>

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
                  initialValues={{
                    businessName: b,
                    address: a,
                    website: w,
                    email: e,
                    chargePerson: {
                      firstName: f,
                      lastName: l,
                      password: p
                    }
                  }}
                  onSubmit={async ( user ) => await doUpdate( user )}
                >
                  <Form className="company-edit-modal p-5">

                    <div className="container-fluid">

                      <h1 className="m-0 heading">Edit Company</h1>
                      <div className="row mt-5">
                        <div className="col-lg-6">
                          <div>
                            <label htmlFor="">Business Name</label><br />
                            <Field className="edit-c-input" name='businessName' placeholder="Business Name" /><br />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div>
                            <label htmlFor="">Address</label><br />
                            <Field className="edit-c-input" name='address' placeholder="Address" /><br />
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-lg-6">
                          <div>
                            <label htmlFor="">First Name</label><br />
                            <Field className="edit-c-input" name='chargePerson.firstName' placeholder="First Name" /><br />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div>
                            <label htmlFor="">Last Name</label><br />
                            <Field className="edit-c-input" name='chargePerson.lastName' placeholder="Last Name" /><br />
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-lg-6">
                          <div>
                            <label htmlFor="">Contact Person</label><br />
                            <Field className="edit-c-input" name='email' placeholder="Contact Person" /><br />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div>
                            <label htmlFor="">Website</label><br />
                            <Field className="edit-c-input" name='website' placeholder="https://" /><br />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end mt-5">
                        <button type='submit' >Update</button>
                      </div>
                    </div>
                  </Form>

                </Formik>
                <button onClick={() => doDel()}>Delete</button>
                <br />
                <br />
                <br />
                <br />
                <br />
              </Modal>

              <div className="container-fluid  mt-5">

                <div className=" d-flex justify-content-end flex-column flex-sm-row align-items-start pt-4">
                  <button onClick={onOpenModal} className="mr-4 add-company-btn mb-3">Add</button>
                  <form onSubmit={doSearch} className=" d-flex justify-content-end  pt-4">
                    <div className="search-input-div mr-5">
                      <i className="fa fa-search"></i>
                      <input type="text" name="" id="" placeholder="Search Order by company" className="search" onChange={handleChangeSearch} />

                    </div>

                  </form>

                </div>

                <div className="row table-row">
                  {/* <!-- table-container-start --> */}
                  <div className="table-container container-fluid mb-5 mr-3 mt-4">
                    <table className="w-100 comapny-table">
                      <thead>
                        <tr className="text-center">
                          <th>Sr#</th>
                          <th className="bdr">First Name</th>
                          <th className="bdr">Last Name</th>
                          <th className="bdr">Business Name</th>
                          <th className="bdr">Business Address</th>
                          <th className="bdr">Email</th>
                          <th className="bdr">Website</th>
                          <th className="bdr">Action</th>
                        </tr>
                      </thead>
                      {
                        result.map( ( cc, index ) =>
                          cc.chargePerson ?
                            <>
                              <tr className="text-center">
                                <td>{index + 1}</td>
                                <td className="bdr">{cc.chargePerson.firstName}</td>
                                <td className="bdr">{cc.chargePerson.lastName}</td>
                                <td className="bdr">{cc.businessName}</td>
                                <td className="bdr">{cc.address}</td>
                                <td className="bdr">{cc.email}</td>
                                <td className="bdr">{cc.website}</td>
                                <td className="bdr"><i className="fa fa-eye" onClick={() => onOpenModalf( cc._id, index, cc.chargePerson.firstName, cc.chargePerson.lastName, cc.businessName, cc.address, cc.email, cc.website, cc.password )}></i></td>
                              </tr>
                            </>
                            :
                            null
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
