import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaEdit, FaPeopleArrows, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })
    const handleDelete = e => {
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
                axiosSecure.delete(`/users/${e}`)
                    .then(res => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        console.log(res.data)
                        refetch()
                    })
            }
        });

    }
    const handleMakeAdmin = user => {
        console.log("This is the id of user:", user._id)
        Swal.fire({
            title: `${user.name} is going to be the Admin .Are you Sure??`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.patch(`/users/admin/${user._id}`)
                        .then(res => {
                            Swal.fire({
                                title: `${user.name} is Admin Now`,
                                icon: "success",
                                draggable: true
                            });
                            refetch()
                            console.log(res.data)
                        })
                }
            });


    }

    return (
        <div>
            {/* <h2>Total user:{data.length}</h2> */}
            <p className="text-center text-3xl mt-4">Here all the users: {users.length}</p>
            <div className="overflow-x-auto mt-5 ml-5">
                <table className="table text-center">
                    {/* head */}
                    <thead className="">
                        <tr className="bg-amber-600 ">
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete Users</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <th>{/* index if you really need it */}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>

                                {user.role === 'admin' ? (
                                    <td className="font-bold">Admin</td>
                                ) : (
                                    <td>
                                        <button
                                            className="btn btn-primary mt-2"
                                            onClick={() => handleMakeAdmin(user)}
                                        >
                                            <FaPeopleArrows />
                                        </button>
                                    </td>
                                )}

                                <td>
                                    <button
                                        className="btn btn-primary mt-2 bg-amber-800"
                                        onClick={() => handleDelete(user._id)}
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;