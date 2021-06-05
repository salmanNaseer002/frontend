import React from 'react';
import NavLink from '../NavLink/index';
import NavLinkData from '../SideNavData/index';
import logoImg from '../../images/logo-3.png';

const SideNav = ()=>{

    return(
        <>
            <aside>
            <div className="logo text-center">
                <img src={logoImg} alt="" width="133px" className="img-fluid pl-3 pr-3" />
            </div>
            {/* <!-- side-nav-link start --> */}
            {/* <!-- link-1 --> */}
            
            <div className="mb-2">
            {
                NavLinkData.map((val)=>{
                    return(
                        <NavLink
                    key={val.key}
                    navlinkdata={val.linkdata}
                    navicon={val.icon}
                    route={val.routes}
                    logout={val.fun}
                     />
                    )
                })
            }
          </div>

          
            {/* <!-- side-nav-link End --> */}
        </aside>
        </>
    )
};

export default SideNav;