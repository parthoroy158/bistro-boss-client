import React from 'react';
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle.jsx/SectionTitle';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const ManageItem = () => {
    const [menu,  ,refetch] = useMenu()
    const axiosSecure = useAxiosSecure()

    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                console.log('This is the item:', item._id)
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: `${item.name} have been deleted`,
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    refetch()
                }


            }
        })
    }
    return (
        <div>
            <SectionTitle subHeading='Hurry up' heading='Manage Items'></SectionTitle>
            <p>{menu.length}</p>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Item Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th> delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            menu.map(item => <tr key={item._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                    <br />
                                </td>
                                <td>{item.price}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs bg-green-800">Update/Edit</button>
                                </th>
                                <th>
                                    <button className="btn btn-ghost btn-xs bg-red-600" onClick={() => handleDelete(item)}>Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageItem;