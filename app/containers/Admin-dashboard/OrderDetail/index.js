import React from 'react';
import SideNav from '../../../components/SideNav/index';
import TopNav from '../../../components/TopNav/index';
import './order-detail.css';
import '../css/side-nav.css';


export default function OrderDetail ( { location } )
{
    console.log( location )
    let OrderDetailInfo = [
        {
            title: 'Order ID:',
            discription: location.data._id
        },
        {
            title: 'Order Date:',
            discription: location.data.date
        },
        {
            title: 'Canadian Company:',
            discription: location.data.companyId ? ( location.data.companyId.businessName ) : ''
        },
        {
            title: 'Service Provider:',
            discription: location.data.serviceProviderId.businessName ? ( location.data.serviceProviderId.businessName ) : ''
        },
        {
            title: 'Country:',
            discription: location.data.originalCountry
        },
        {
            title: 'Industry:',
            discription: location.data.industry
        },
        {
            title: 'Quantity:',
            discription: location.data ? ( location.data.quantity ) : ''
        },
        {
            title: 'Product Name:',
            discription: location.data.productName
        },
        {
            title: 'Total Amount:',
            discription: location.data ? ( location.data.totalAmount ) : ''
        }
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
                    <TopNav pageName="Order Detail" />
                    <div className="mb-5">
                        {/* <!-- content-part-start --> */}
                        <div className="o-detail-page-content">

                            <div className="o-detail-card ">
                                <div className="card p-5 mt-5 border-0">
                                    <h1 className="heading mb-5">Business Details</h1>
                                    {
                                        OrderDetailInfo.map( ( val, i ) =>
                                            OrderDetailInfo ?
                                                <div className="row py-1" key={i}>
                                                    <div className="col-sm-4">
                                                        <p className="o-title">{val.title}</p>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <p className="o-discription">{val.discription}</p>
                                                    </div>
                                                </div>
                                                :
                                                null
                                        )
                                    }
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
