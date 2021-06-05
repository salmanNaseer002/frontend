import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// importing modules
import { Link } from 'react-router-dom';
import SideNav from '../../../components/SideNav/index';
import TopNav from '../../../components/TopNav/index';
import './sale-rep-detail.css';
import '../css/side-nav.css';
import { getServiceData } from './../../../services/serviceProviderService';
import { selectServiceProviderData, setServiceData } from './../../../slice/serviceProviderSlice';

export default function SalesRepDetail ( { location } )
{
    console.log( location )



    const result = useSelector( selectServiceProviderData );
    console.log( result );

    const dispatch = useDispatch();
    // const [search, setSearch] = useState( '' );

    useEffect( () =>
    {
        ( async () =>
        {
            const data = await getServiceData( location.data._id ) || null;
            console.log( data );
            if ( data )
                dispatch( setServiceData( data ) )
            else return null;
        }
        )();
    }, [] );
    const BusinessDetail = [
        {
            title1: 'Name:',
            title2: 'Address',
            discription1: location.data.chargePerson.firstName,
            discription2: location.data.address
        },
        {
            title1: 'Website:',
            title2: 'Email:',
            discription1: location.data.website,
            discription2: location.data.email
        },
        {
            title1: 'Password:',
            title2: 'Membership:',
            discription1: location.data.password,
            discription2: location.data.membership == "false" ? 'He does not buy Any Membership' : "True"
        }
    ];



    const PackageDetail = [
        {
            // industory: location.data.personRep.industry + ',' + ' ' + location.data.personRep.country,
            packageTabel: [
                {
                    name: 'package-1',
                    discription: 'lorem acca cjakca',
                    amount: '123$',
                    quantity: '100',
                    price: '200$',
                    duration: '10 days'
                },
                {
                    name: 'package-1',
                    discription: 'lorem acca cjakca',
                    amount: '123$',
                    quantity: '100',
                    price: '200$',
                    duration: '10 days'
                }
            ]
        },

    ]
    return (
        <>
            {/* Dashboard page start */}
            <div className="dashboard-container">
                {/* <!-- side-bar-start --> */}

                <SideNav />

                {/* <!-- side-bar-End --> */}
                {/* <!-- right-sec-start --> */}
                <div className="right-sec">
                    <TopNav pageName="Custom Brokers" />
                    <div className="mb-5">
                        {/* <!-- content-part-start --> */}
                        <div className="c-broker-detail-page-content">
                            {/* Business-detail-card-start */}
                            <div className="c-b-detail-card">
                                <div className="card p-5 mt-5 border-0">
                                    <h1 className="heading mb-5">Business Details</h1>

                                    {
                                        BusinessDetail.map( ( val, i ) =>
                                        {
                                            return (
                                                <div className="row py-1" key={i}>
                                                    <div className="col-lg-6 ">
                                                        <div className="row">
                                                            <div className="col-sm-5 ">
                                                                <p className="title">{val.title1}</p>
                                                            </div>
                                                            <div className="col-sm-7 ">
                                                                <p className="discription">{val.discription1}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 ">
                                                        <div className="row">
                                                            <div className="col-sm-5 ">
                                                                <p className="title">{val.title2}</p>
                                                            </div>
                                                            <div className="col-sm-7 ">
                                                                <p className="discription">{val.discription2}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        } )
                                    }


                                </div>
                            </div>
                            {/* Business-detail-card-End */}
                            {/* Contact-detail-card-start */}
                            {/* <div className="c-b-detail-card">
                                <div className="card p-5 mt-5 border-0">
                                    <h1 className="heading mb-5">Contact Details</h1> */}
                            {/* 
                                    {
                                        ContactDetail.map( ( val, i ) =>
                                        {
                                            return (
                                                <div className="row py-1" key={i}>
                                                    <div className="col-lg-6 ">
                                                        <div className="row">
                                                            <div className="col-sm-5 ">
                                                                <p className="title">{val.title1}</p>
                                                            </div>
                                                            <div className="col-sm-7 ">
                                                                <p className="discription">{val.discription1}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 ">
                                                        <div className="row">
                                                            <div className="col-sm-5 ">
                                                                <p className="title">{val.title2}</p>
                                                            </div>
                                                            <div className="col-sm-7 ">
                                                                <p className="discription">{val.discription2}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        } )
                                    } */}


                            {/* </div> */}
                            {/* </div> */}
                            {/* Contact-detail-card-End */}
                            {/* Packages-detail-card-start */}
                            <div className="c-b-detail-card">
                                <div className="card p-5 mt-5 border-0">
                                    <h1 className="heading mb-5">Packages</h1>

                                    {
                                        PackageDetail.map( ( val, i ) =>
                                        {
                                            return (
                                                <div key={i}>
                                                    {/* <div className="row mt-5">
                                                        <div className="col-lg-2 col-sm-4 title">Industry:</div>
                                                        <div className="col-sm-8 discription">{val.industory}</div>
                                                    </div> */}

                                                    <div className="table-row mt-4">
                                                        <table className="w-100 table-container">
                                                            <thead>
                                                                <tr>
                                                                    <th className="bdr">Package Name</th>
                                                                    <th className="bdr">Discription</th>
                                                                    <th className="bdr">Amount</th>
                                                                    <th className="bdr">Quantity</th>
                                                                    <th className="bdr">Price</th>
                                                                    <th className="bdr">Duration</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    result.map( ( val ) =>
                                                                    {
                                                                        return (
                                                                            <tr>
                                                                                <td>{val.title}</td>
                                                                                <td className="bdr">{val.description}</td>
                                                                                <td className="bdr">{val.amount}</td>
                                                                                <td className="bdr">{val.quantity}</td>
                                                                                <td className="bdr">{val.amount}</td>
                                                                                <td className="bdr">{val.duration}</td>
                                                                            </tr>
                                                                        )
                                                                    } )
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                            )
                                        } )
                                    }

                                </div>
                            </div>
                            {/* Packages-detail-card-End */}


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
