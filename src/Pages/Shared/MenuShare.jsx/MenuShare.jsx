import React, { useEffect, useState } from 'react';

const MenuShare = () => {
     const [menu, setMenu] = useState([])
    
        useEffect(() => {
            fetch('menu.json')
                .then(res => res.json())
                .then(data => {
                    // const popularItems = data.filter(item => item.category === 'popular')
                    setMenu(data)
                })
        }, [])
    return {menu};
};

export default MenuShare;