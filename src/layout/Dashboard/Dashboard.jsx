import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaRebel, FaShoppingCart, FaStar, FaUser, FaUtensils } from "react-icons/fa";
import useCart from '../../Hooks/useCart';
import useAdmin from '../../Hooks/useAdmin';


const Dashboard = () => {
    const [cart] = useCart()
    // todo:get 
    const [isAdmin] = useAdmin()
    // const isAdmin = true;
    return (
        <div className='flex max-w-7xl mx-auto '>
            <div className='w-64 min-h-screen bg-blue-300'>
                <ul className='menu p-4 w-full text-center'>
                    {
                        isAdmin ?
                            <div>
                                <li className=' uppercase'><NavLink to='/'><FaHome /> Admin Home</NavLink></li>
                                <li className=' uppercase'><NavLink to='/dashboard/addItems'><FaUtensils /> Add Items</NavLink></li>
                                <li className=' uppercase'><NavLink to='/dashboard/manageItem'><FaList /> Manage Items</NavLink></li>
                                <li className=' uppercase'><NavLink to='/dashboard/home'><FaBook /> Manage Bookings</NavLink></li>
                                <li className=' uppercase'><NavLink to='/dashboard/allUsers'><FaUser /> All Users</NavLink></li>

                            </div>
                            :
                            <div>
                                <li className=' uppercase'><NavLink to='/dashboard/home'><FaHome /> User Home</NavLink></li>
                                <li className=' uppercase'><NavLink to='/dashboard/cart'><FaShoppingCart />My Cary ({cart.length})</NavLink></li>
                                <li className=' uppercase'><NavLink to='/dashboard/reservation'><FaCalendar />Reservation</NavLink></li>
                                <li className=' uppercase'><NavLink to='/dashboard/addReview'><FaStar />Add Review</NavLink></li>
                                <li className=' uppercase'><NavLink to='/dashboard/myBooking'><FaBook />My Booking</NavLink></li>
                            </div>
                    }
                    {/* Shared navLink */}
                    <div className="divider"></div>
                    <li className=' uppercase'><NavLink to='/'><FaHome />Home</NavLink></li>
                    <li className=' uppercase'><NavLink to='/ourMenu'><FaList />Menu</NavLink></li>
                    <li className=' uppercase'><NavLink to='/ourMenu'><FaEnvelope />Contact Us</NavLink></li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;