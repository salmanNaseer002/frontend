import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { logout } from '../../services/authService';

const NavLink = (props) => {
    const history = useHistory();

    let doLogout = () => {
        logout();
        history.push('/login')
    }


    return (
        <>
            <Link to={props.route} className="nav-link mb-3" >
                <div className="row d-flex align-items-center" >
                    <div className="col-3 ">
                        <i className={props.navicon}></i>
                    </div>
                    <div className="col-9  p-0 mt-2">
                        <p onClick={() => props.logout ? doLogout() : null}>{props.navlinkdata}</p>
                    </div>
                </div>
            </Link>
        </>
    )
};



export default NavLink;

