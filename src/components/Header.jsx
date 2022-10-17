import React, { useContext } from 'react';
import { Link, NavLink  } from "react-router-dom";
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () =>{
        logOut()
        .then(()=>{

        })
        .catch(error=> console.error(error))
    }

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1 hidden md:block">
                <a className="btn btn-ghost normal-case text-xl">Auth context router</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink  to='/home'>Home</NavLink ></li>
                    <li><NavLink  to='/orders'>Orders</NavLink ></li>
                    <li><NavLink  to='/register'>Register</NavLink ></li>
                    <li><NavLink to='/login'>Login</NavLink ></li>
                    {user?.email && <li><span>Welcome, {user.email}</span></li>}
                    {
                        user?.email ?
                            <button onClick={handleSignOut} type='submit' className="btn btn-success bg-green-600 text-white font-semibold mx-2">Log Out</button>
                            :
                            <Link to='/login'></Link>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;