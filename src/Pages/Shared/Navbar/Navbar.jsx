import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { FaShoppingCart } from "react-icons/fa";
import useCart from '../../../Hooks/useCart';


const Navbar = () => {
    const { userSignOut, user } = useAuth()
    const [cart] = useCart()

    const navOptions =
        <>
            <div className='md:flex items-center'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/'>CONTACT US</NavLink></li>
                <li><NavLink to='/'>DASHBOARD</NavLink></li>
                <li><NavLink to='/ourMenu'>OUR MENU</NavLink></li>
                <li><NavLink to='/secret'>SECRET</NavLink></li>
                <li><NavLink to='/ourShope/Salad'>OUR SHOP</NavLink></li>
                <li>
                    <button className="btn btn-outline">
                        <FaShoppingCart /> <span className="badge badge-sm badge-secondary  ">+{cart.length}</span>
                    </button>
                </li>

                {
                    user ?
                        <>
                            <button className='btn btn-ghost uppercase bg-transparent text-lime-400 ml-4'>{user.displayName
                            }</button>
                            <img className='w-8 rounded-xl' src={user.photoURL} alt="" />
                        </> :
                        <>

                            <li><NavLink to='/signUp'>SIGN UP</NavLink></li>
                            <li><NavLink to='/logIn'>LOG IN</NavLink></li>
                        </>
                }
            </div>
        </>


    const handleLogOut = () => {
        userSignOut()
            .then(result => {
                console.log("Sign Out Successfully")
            })
            .catch(error => {
                console.log("error", error)
            })
    }
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
                {
                    user ? <button className='btn  bg-base-500' onClick={handleLogOut}>Log Out</button> : <button className='btn bg-base-300'>Button</button>
                }
            </div>
        </div>
    );
};

export default Navbar;