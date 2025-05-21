import React from 'react';
import useMenu from '../../../Hooks/useMenu';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items,title }) => {
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-10 mt-10 mb-10'>
                {
                    items.map(item => <MenuItems item={item}></MenuItems>)
                }

            </div>
            <div className='flex justify-center'>
                <Link to={`/ourShope/${title}`}>
                    <button className='btn btn-ghost w-[366px] mb-5 border-b-2 border-black border-0 uppercase'>Order Now</button>
                </Link>
            </div>

        </div>
    );
};

export default MenuCategory;