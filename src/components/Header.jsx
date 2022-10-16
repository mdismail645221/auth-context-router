import React, { useContext } from 'react';
import { NavLink  } from "react-router-dom";
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    
    const {user} = useContext(AuthContext);

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1 hidden md:block">
                <a className="btn btn-ghost normal-case text-xl">Auth context router</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink  to='/home'>Home</NavLink ></li>
                    <li><NavLink  to='/register'>Register</NavLink ></li>
                    <li><NavLink to='/login'>Login</NavLink ></li>
                    {user?.displayName && <li><span>Welcome, {user.displayName}</span></li>}
                </ul>
            </div>
        </div>
    );
};

export default Header;