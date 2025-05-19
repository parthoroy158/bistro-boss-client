import React from 'react';

const MenuItems = ({ item }) => {
    const { image, name, recipe, price } = item
    return (
        <div>
            <div className='flex gap-10'>
                <h1>
                    <img
                        style={{ borderRadius: '0 250px 200px 250px' }}
                        className='w-[120px] '
                        src={image} alt="" />
                </h1>
                <div>
                    <h1 className='font-bold'>{name}--------</h1>
                    <h3>{recipe}--------</h3>
                </div>
                <div>
                    <h3 className='text-orange-500'>${price}</h3>
                </div>
            </div>
           
        </div>
    );
};

export default MenuItems;