import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const AdminHome = () => {
    const { user } = useAuth()

    return (
        <div>
            {
                user?.displayName? user.displayName : <p>Hi Welcome Back</p>
            }
        </div>
    );
};

export default AdminHome;