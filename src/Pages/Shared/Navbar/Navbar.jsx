import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const navOptions =
        <>
            <div className='md:flex  justify-end'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/contactUs'>CONTACT US</NavLink></li>
                <li><NavLink to='/dashBoard'>DASHBOARD</NavLink></li>
                <li><NavLink to='/ourMenu'>OUR MENU</NavLink></li>
                <li><NavLink to='/ourShope/Salad'>OUR SHOP</NavLink></li>
                <li><NavLink to='/logIn'>LOGIN</NavLink></li>
            </div>
        </>
    return (
        <div className="navbar fixed bg-black/50 z-10 max-w-screen-xl text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm  bg-black/50 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-base-500 ">Button</a>
            </div>
        </div>
    );
};

export default Navbar;