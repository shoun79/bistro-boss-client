import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import { FaTrash, FaUserShield } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data;
        },
    })
    const hendleMakeAdmin = user => {
        fetch(`https://bistro-boss-server-nine-sigma.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    //TODO: implement delete action
    const hendleDelete = user => {

    }
    return (
        <div className="w-[95%] mx-auto">
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
            <SectionTitle
                heading={"MANAGE ALL USERS"}
                subHeading={"How many??"}
            >
            </SectionTitle>
            <h3 className="text-3xl font-bold">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{
                                    user.role === 'admin' ? 'Admin' : <button onClick={() => hendleMakeAdmin(user)} className="btn  btn-sm bg-[#D1A054] text-white"><FaUserShield /></button>
                                }</td>
                                <td><button onClick={() => hendleDelete(user)} className="btn  btn-sm bg-red-600  text-white"><FaTrash /></button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;