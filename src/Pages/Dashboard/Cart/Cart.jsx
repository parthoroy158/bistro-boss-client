import React from 'react';
import useCart from '../../../Hooks/useCart';
import { FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, refetch] = useCart()
    const axiosSecure = useAxiosSecure()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }
                    })

                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        })
    }
    return (
        <div className='m-10'>
            <div className='flex justify-between mt-10'>
                <h2 className='text-3xl font-bold'>Total Order: {cart.length}</h2>
                <h2 className='text-3xl font-bold'>Total Price: ${totalPrice}</h2>
                {
                    cart.length > 0 ?
                        <Link to='/dashboard/payment'>
                            <button className='btn'>Pay</button>
                        </Link>
                        :
                        <button disabled className='btn'>Pay</button>
                }
            </div>
            <div className="overflow-x-auto mt-5">
                <table className="table">
                    {/* head */}
                    <thead className='bg-orange-400 rounded-xl text-center' >
                        <tr >
                            <th>
                                <label>

                                </label>
                            </th>
                            <th>Item Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {/* row 1 */}

                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12 text-center">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component " />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold">{item.name}</div>
                                </td>
                                <td>${item.price}</td>
                                <th>
                                    <button className="btn btn-primary btn-s text-red-500 " onClick={() => handleDelete(item._id)}><FaTrash /></button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Cart;