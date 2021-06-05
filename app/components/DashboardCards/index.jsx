import React from 'react';

const DashboardCards= (props) => {
    return(
        <>
              <div className="col-xl-3 col-lg-6  mb-3">
           <div className="dash-card text-center p-4">
                 <h6 className="mt-4 dash-14">{props.title}</h6>
                 <h6 className="mt-4 dash-14">{props.value}</h6>
               </div>
               </div>
        </>
    )
};

export default DashboardCards;