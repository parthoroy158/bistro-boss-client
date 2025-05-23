import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaCalendar, FaHome, FaList, FaRebel, FaShoppingCart, FaStar } from "react-icons/fa";


const Dashboard = () => {
 
    return (
        <div className='flex max-w-7xl mx-auto '>
            <div className='w-64 min-h-screen bg-blue-300'>
                <ul className='menu p-4 w-full text-center'>
                    <li className=' uppercase'><NavLink to='/dashboard/home'><FaHome /> User Home</NavLink></li>
                    <li className=' uppercase'><NavLink to='/dashboard/cart'><FaShoppingCart />My Cary</NavLink></li>
                    <li className=' uppercase'><NavLink to='/dashboard/reservation'><FaCalendar />Reservation</NavLink></li>
                    <li className=' uppercase'><NavLink to='/dashboard/addReview'><FaStar />Add Review</NavLink></li>
                    <li className=' uppercase'><NavLink to='/dashboard/myBooking'><FaBook />My Booking</NavLink></li>
                    <div className="divider"></div>
                    <li className=' uppercase'><NavLink to='/'><FaHome />Home</NavLink></li>
                    <li className=' uppercase'><NavLink to='/ourMenu'><FaList />Menu</NavLink></li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;