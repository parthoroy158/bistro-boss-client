import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import UseAxiosPublic from "../Pages/Shared/AxiosPublic/UseAxiosPublic";


const useMenu = () => {
    const axiosPublic = UseAxiosPublic()
    // const [menu, setMenu] = useState([])
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     fetch('https://bistro-boss-server-orcin-two.vercel.app/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             // const popularItems = data.filter(item => item.category === 'popular')
    //             setLoading(false)
    //             setMenu(data)
    //         })
    // }, [])

    const { data: menu = [], isPending: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menu')
            return res.data;
        }
    })

    return [menu, loading, refetch]
};

export default useMenu;