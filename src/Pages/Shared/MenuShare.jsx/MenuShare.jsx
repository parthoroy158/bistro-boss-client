import React, { useEffect, useState } from 'react';

const MenuShare = () => {
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/menu')
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