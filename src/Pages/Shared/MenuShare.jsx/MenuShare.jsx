import React, { useEffect, useState } from 'react';

const MenuShare = () => {
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://bistro-boss-server-orcin-two.vercel.app/menu')
            .then(res => res.json())
            .then(data => {
                // const popularItems = data.filter(item => item.category === 'popular')
                setLoading(false)
                setMenu(data)
            })
    }, [])
    return [menu,loading];
};

export default MenuShare;