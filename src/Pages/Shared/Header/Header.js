import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { LogOut, user } = useContext(AuthContext);


    const handleLogOut = () => {
        LogOut()
            .then(() => {

            })
            .then(error => console.log(error));
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            {
                                user && <>
                                    <li><Link to="/myreviews">My Reviews</Link></li>
                                    <li><Link to="/addservice">Add Service</Link></li>
                                </>

                            }

                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case lg:text-xl md:text-xl sm:text-sm">View Photography</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        {
                            user && <>
                                <li><Link to="/myreviews">My Reviews</Link></li>
                                <li><Link to="/addservice">Add Service</Link></li>
                            </>

                        }


                    </ul>
                </div>
                {
                    user?.uid ? <>
                        <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>

                        {
                            user?.photoURL ? <>
                                <img className='w-8 h-8 rounded-full' src={user?.photoURL} alt="" />

                            </>
                                :
                                <>
                                    <FaUser></FaUser>
                                </>
                        }

                    </>
                        :
                        <>
                            <div className="navbar-end">
                                <li className="btn btn-ghost"> <Link to="/login">Login</Link></li>
                                <li className="btn btn-ghost"><Link to="/register">Register</Link></li>
                            </div>
                        </>
                }

            </div>
        </div >
    );
};

export default Header;