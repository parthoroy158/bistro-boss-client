import React from 'react';
import useMenu from '../../../Hooks/useMenu';

const MenuCategoryTwo = ({items}) => {
     const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
 
    return (
        <div>
            {

            }

        </div>
    );
};

export default MenuCategoryTwo;