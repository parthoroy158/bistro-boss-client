import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: isAdmin, refetch,isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            console.log("This is the admin console:", res.data)
            return res.data?.admin
        }
    })
    return [isAdmin, refetch, isAdminLoading]
};

export default useAdmin;