import React from 'react';
import CardFood from '../../../Components/CardFood/CardFood';

const CardShare = ({ item }) => {
    return (
        <div className='grid md:grid-cols-3 gap-5'>
            {
                item.map(item => <CardFood item={item}></CardFood>)
            }
        </div>
    );
};

export default CardShare;