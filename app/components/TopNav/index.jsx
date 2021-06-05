import React from 'react';

const TopNav = (props)=>{
    return(
        <>
               <div className="row m-0 p-0 top-navbar">
                    <div className="col-12 m-0 d-flex align-items-center">
                  <h1 className="top-nav-30 pl-sm-5">{props.pageName}</h1>
                    </div>
                 
                </div>
        </>
    )
};

export default TopNav;