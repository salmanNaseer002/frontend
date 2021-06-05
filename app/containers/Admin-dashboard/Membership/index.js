import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'react-responsive-modal';
import SideNav from '../../../components/SideNav/index';
import TopNav from '../../../components/TopNav/index';
import 'react-responsive-modal/styles.css';
import './membership.css';
import '../css/side-nav.css';
// importing modules
import { getMembershipData, addMembership, deleteMembership, updateMembership } from './../../../services/membershipService';
import { setMembershipData, selectMembershipData, setMembership, delMembership, setUpdateMembership, searchResult } from './../../../slice/membershipSlice';

let index = null;
let dataId = null;

export default function Membership ()
{
  const [open, setOpen] = useState( false );
  const [openf, setOpenf] = useState( false );
  const [n, setN] = useState( '' );
  const [d, setD] = useState( '' );
  const [p, setP] = useState( '' );
  const [dur, setDur] = useState( '' );
  const result = useSelector( selectMembershipData );

  const dispatch = useDispatch();
  const [search, setSearch] = useState( '' );

  useEffect( () =>
  {
    ( async () =>
    {
      const data = await getMembershipData() || null;
      if ( data )
        dispatch( setMembershipData( data ) )
      else return null;
    }
    )();
  }, [] );

  const onOpenModal = () => setOpen( true );
  const onCloseModal = () => setOpen( false );
  const onOpenModalf = ( id, ind, name, des, pri, du ) =>
  {
    index = ind;
    dataId = id;
    setN( name );
    setD( des );
    setP( pri );
    setDur( du );
    setOpenf( true )

  };
  const onCloseModalf = () => setOpenf( false );

  let doAdd = async ( data ) =>
  {
    console.log( data );
    let cred = await addMembership( data );
    console.log( cred );
    cred.message == 'success' ?
      dispatch( setMembership( cred.data ) ) : null
    setOpen( false );
  }

  let doDel = async () =>
  {
    let message = await deleteMembership( dataId );
    message == 'success' ?
      dispatch( delMembership( { index: index } ) ) : null
    setOpenf( false );
  }

  let doUpdate = async ( data ) =>
  {
    console.log( data );
    let message = await updateMembership( data, dataId );
    console.log( message )
    message == 'success' ?
      dispatch( setUpdateMembership( { data, index } ) ) : null
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
          <TopNav pageName="Membership" />
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
                    name: '',
                    description: '',
                    price: '',
                    duration: '',

                  }}
                  onSubmit={async ( user ) => await doAdd( user )}
                >
                  <Form className="company-add-modal p-5">

                    <div className="container-fluid">

                      <h1 className="m-0 heading">Add Membership</h1>
                      <div className="row mt-5">
                        <div className="col-lg-6">
                          <div>
                            <label htmlFor=""> Title</label><br />
                            <Field className="add-c-input" name='name' placeholder="Membership Title" /><br />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div>
                            <label htmlFor="">Description</label><br />
                            <Field className="add-c-input" name='description' placeholder="Description" /><br />
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-lg-6">
                          <div>
                            <label htmlFor="">Price</label><br />
                            <Field className="add-c-input" name='price' placeholder="Price" /><br />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div>
                            <label htmlFor="">Duration</label><br />
                            <Field className="add-c-input" name='duration' placeholder="Duration" /><br />
                          </div>
                        </div>
                      </div>
                      {/* <div className="row mt-3">
                        <div className="col-lg-6">
                          <div>
                            <label htmlFor="">Contact Person</label><br />
                            <Field className="add-c-input" name='email' placeholder="Contact Person" /><br />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div>
                            <label htmlFor="">Website</label><br />
                            <Field className="add-c-input" name='website' placeholder="https://" /><br />
                          </div>
                        </div>
                      </div> */}
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
                {openf && <Formik
                  initialValues={{
                    name: n,
                    description: d,
                    price: p,
                    duration: dur,

                  }}
                  onSubmit={async ( user ) => await doUpdate( user )}
                >
                  <Form className="company-edit-modal p-5">

                    <div className="container-fluid">

                      <h1 className="m-0 heading">Edit Membership</h1>
                      <div className="row mt-5">
                        <div className="col-lg-6">
                          <div>
                            <label htmlFor=""> Name</label><br />
                            <Field className="edit-c-input" name='name' placeholder="Membership Name" /><br />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div>
                            <label htmlFor="">Description</label><br />
                            <Field className="edit-c-input" name='description' placeholder="description" /><br />
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-lg-6">
                          <div>
                            <label htmlFor="">Price</label><br />
                            <Field className="edit-c-input" name='price' placeholder="Price" /><br />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div>
                            <label htmlFor="">Duration</label><br />
                            <Field className="edit-c-input" name='duration' placeholder="Duration" /><br />
                          </div>
                        </div>
                      </div>
                      {/* <div className="row mt-3">
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
                      </div> */}
                      <div className="d-flex justify-content-end mt-5">
                        <button type='submit' >Update</button>
                      </div>
                    </div>
                  </Form>

                </Formik>
                }
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
                          {/* <th className="bdr">User Name</th> */}
                          <th className="bdr">Membership</th>
                          <th className="bdr">Description</th>
                          <th className="bdr">Price</th>
                          <th className="bdr">Duration</th>
                          {/* <th className="bdr">Start Date</th>
                          <th className="bdr">End Date</th> */}
                          <th className="bdr">Action</th>
                        </tr>
                      </thead>
                      {
                        result.map( ( cc, index ) =>
                          cc.name ?
                            <>
                              <tr className="text-center">
                                <td>{index + 1}</td>
                                <td className="bdr">{cc.name}</td>
                                <td className="bdr">{cc.description}</td>
                                <td className="bdr">{cc.price}</td>
                                <td className="bdr">{cc.duration}</td>
                                <td className="bdr"><i className="fa fa-eye" onClick={() => onOpenModalf( cc._id, index, cc.name, cc.description, cc.price, cc.duration )}></i></td>
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
