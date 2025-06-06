import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (user) {
        return children;
    }

    if (loading) {
        return <span className="loading loading-spinner loading-xl"></span>
    }
    return <Navigate to='/logIn' state={{ from: location }} replace ></Navigate >
};

export default PrivateRoute;