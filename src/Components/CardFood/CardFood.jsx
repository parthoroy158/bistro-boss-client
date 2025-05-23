import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';


const CardFood = ({ item }) => {
    const { image, name, recipe, price, _id } = item
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()

    const handleAddCart = food => {
        // console.log(item)
        if (user && user.email) {
            // console.log("This is the user email:", user.email ,"This the food menu:", food)
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }

            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `<p classname="text-blue-300">${name}</p> Added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()

                })

        }
        else {
            Swal.fire({
                title: "You are not log in",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log In"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/logIn', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className=" relative card w-75  bg-base-100 shadow-xl">
            <figure className="h-40 overflow-hidden">
                {/* Using object‑cover ensures we keep aspect ratio and fill the frame */}
                <img src={image} className="object-cover w-full h-full  p-2" />
            </figure>

            <div className=" card-body items-center text-center gap-3 p-4">
                <h2 className="card-title text-lg font-semibold">{name}</h2>

                <p className="text-sm leading-snug opacity-80">
                    {recipe}
                </p>
                <p className='absolute top-2 right-3 bg-[#111827] text-white p-2'>${price}</p>

                <div className="card-actions mt-2">
                    <button
                        onClick={() => handleAddCart(item)}
                        className="btn bg-[#BB8506] normal-case tracking-wider text-white hover:bg-black uppercase "
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardFood;