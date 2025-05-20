import React from 'react';
import useMenu from '../../../Hooks/useMenu';
import MenuItems from '../../Shared/MenuItems/MenuItems';

const MenuCategory = ({ items }) => {
    return (
        <div className='grid md:grid-cols-2 gap-10 mt-10 mb-10'>
            {
                items.map(item => <MenuItems item={item}></MenuItems>)
            }
        </div>
    );
};

export default MenuCategory;