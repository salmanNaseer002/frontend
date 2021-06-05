import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Modal } from 'react-responsive-modal';
import SideNav from '../../../components/SideNav/index';
import TopNav from '../../../components/TopNav/index';
import 'react-responsive-modal/styles.css';
import './industries.css';
import '../css/side-nav.css';
// importing modules
import { getIndustriesData, addIndustry, updateIndustry, deleteIndustry } from './../../../services/industriesService';
import { setIndustriesData, setIndustry, selectIndustriesData, setUpdateIndustry, delIndustry } from './../../../slice/industriesSlice';

var index = null;
var dataId = null;

export default function Company ()
{
  const [open, setOpen] = useState( false );
  const [openf, setOpenf] = useState( false );
  const [industr, setIndustr] = useState( '' )
  const result = useSelector( selectIndustriesData );
  const dispatch = useDispatch();

  useEffect( () =>
  {
    ( async () =>
    {
      const data = await getIndustriesData() || null;
      if ( data )
        dispatch( setIndustriesData( data ) )
      else return null
    } )();
  }, [] )


  const onOpenModal = () => setOpen( true );
  const onCloseModal = () => setOpen( false );
  const onOpenModalf = ( id, ind, indd ) =>
  {
    index = ind;
    dataId = id;
    setIndustr( indd )
    setOpenf( true )
  };
  const onCloseModalf = () => setOpenf( false );

  let doAdd = async ( data ) =>
  {
    console.log( data );
    let cred = await addIndustry( data );
    cred.message == 'success' ?
      dispatch( setIndustry( cred.data ) ) : null
    setOpen( false )
  }

  let doDel = async () =>
  {
    let message = await deleteIndustry( dataId );
    message == 'success' ?
      dispatch( delIndustry( { index: index } ) ) : null
    setOpenf( false )
  }

  let doUpdate = async ( data ) =>
  {
    console.log( data );
    let message = await updateIndustry( data, dataId );
    console.log( message )
    message == 'success' ?
      dispatch( setUpdateIndustry( { data, index } ) ) : null
    setOpenf( false )
  }

  return (
    <>
      {/* Dashboard page start */}
      <div className="dashboard-container">
        {/* <!-- side-bar-start --> */}

        <SideNav />

        {/* <!-- side-bar--End --> */}
        {/* <!-- right-sec-start --> */}
        <div className="right-sec">
          <TopNav pageName="Industries" />

          <div className="mb-5">
            {/* <!-- content-part-start --> */}
            <div className="industry-page-content mt-5">

              <div className="container-fluid  mt-5">
                {/* <form className=" d-flex justify-content-end  pt-4"> */}
                <div className="d-flex justify-content-end pr-5">
                  <button onClick={onOpenModal} className="add-industry-btn">Add Industry</button>
                </div>
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
                    <Form className="p-4 add-industry-model">
                      <h1 className="heading mb-5">Add Industry</h1>
                      <Field name='name' placeholder="Industry Name" className="add-i-input" /><br />
                      <button onClose={onCloseModalf} type='submit' className="mt-4">Add</button>
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
                    initialValues={{ name: industr }}
                    onSubmit={async ( user ) => await doUpdate( user )}
                  >
                    <Form className="p-4 edit-industry-model">
                      <h1 className="heading mb-5">Edit Industry</h1>
                      <Field name='name' placeholder="Industry Name" className="edit-i-input" /><br />
                      <button type='submit' className="mt-4">Update</button>
                    </Form>

                  </Formik>
                  <button onClick={() => doDel()}>Delete</button>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </Modal>

                {/* <div className="search-input-div mr-5">
                   <i className="fa fa-search"></i>
                   <input type="text" name="" id="" placeholder="Search Industry" className="search"/>
                 </div>
                 </form> */}
                <div className="row table-row mt-4">
                  {/* <!-- table-container-start --> */}
                  <div className="table-container container-fluid mb-5 mr-3 ">
                    <table className="w-100 industry-table">
                      <thead>
                        <tr className="text-center">
                          <th>Sr#</th>
                          <th className="bdr">Industry Name</th>
                          <th className="bdr">Action</th>
                        </tr>
                      </thead>
                      {
                        result.map( ( industry, index ) =>
                          <>
                            <tr className="text-center">
                              <td>{index + 1}</td>
                              <td className="bdr">{industry.name}</td>
                              <td className="bdr"><i className="fa fa-eye" onClick={() => onOpenModalf( industry._id, index, industry.name )}></i></td>
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
