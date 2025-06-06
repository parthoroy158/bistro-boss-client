import React from 'react';
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle.jsx/SectionTitle';

const ManageItem = () => {
    const [menu] = useMenu()
    return (
        <div>
            <SectionTitle subHeading='Hurry up' heading='Manage Items'></SectionTitle>
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
                                    <button className="btn btn-ghost btn-xs bg-red-600">Delete</button>
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