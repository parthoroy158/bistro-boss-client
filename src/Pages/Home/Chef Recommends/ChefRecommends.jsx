import React from 'react';
import { Link } from 'react-router-dom';

const ChefRecommends = ({ item }) => {
    const { image, name, recipe, price } = item
    return (
        <div className="card w-mx bg-base-100 shadow-xl">
            <figure className="h-40 overflow-hidden">
                {/* Using object‑cover ensures we keep aspect ratio and fill the frame */}
                <img src={image} className="object-cover w-full h-full object-cover" />
            </figure>

            <div className="card-body items-center text-center gap-3 p-4">
                <h2 className="card-title text-lg font-semibold">{name}</h2>

                <p className="text-sm leading-snug opacity-80">
                    {recipe}
                </p>

                <div className="card-actions mt-2">
                    <Link to='/ourMenu'>
                    <button
                        className="btn bg-[#BB8506] normal-case tracking-wider text-white hover:bg-black uppercase "
                    >
                        Add to Cart
                    </button>
                </Link>
            </div>
        </div>
        </div >
    );
};

export default ChefRecommends;