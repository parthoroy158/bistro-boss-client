import React from 'react';
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';
import { Navigate } from 'react-router-dom';


const AdminRoute = ({ children }) => {

    const { user, loading } = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()

    if (user && isAdmin) {
        return children
    }
    if (loading || isAdminLoading) {
        return <span className="loading loading-spinner loading-xl"></span>
    }
    return <Navigate to='/home'></Navigate>
};

export default AdminRoute;