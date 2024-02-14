import { FaTrash } from "react-icons/fa6";
import PageTitle from "../../../components/PageTitle/PageTitle";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {
    const [menu, refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

    const hendleDelete = item => {

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
                // fetch(`https://bistro-boss-server-nine-sigma.vercel.app/menu/${item._id}`)
                //     .then(res => res.json())
                //     .then(data => {
                //         if (data.deletedCount) {
                //             refetch()
                //             Swal.fire({
                //                 title: "Deleted!",
                //                 text: "Your file has been deleted.",
                //                 icon: "success"
                //             });
                //         }
                //     })
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="w-[95%] mx-auto">
            <PageTitle pageName='Manage Items'></PageTitle>
            <SectionTitle
                heading={'MANAGE ALL ITEMS'}
                subHeading={'Hurry Up!'}
            ></SectionTitle>
            <h3 className="text-3xl font-bold">Total Users: {menu.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.category}
                                </td>
                                <td className="text-right">${item.price}</td>
                                <td>
                                    <button className="btn  btn-sm bg-[#D1A054] text-white"><FaRegEdit /></button>
                                    {/* {
                                    user.role === 'admin' ? 'Admin' : <button onClick={() => hendleMakeAdmin(user)} className="btn  btn-sm bg-[#D1A054] text-white"><FaUserShield /></button>
                                } */}
                                </td>
                                <td><button onClick={() => hendleDelete(item)} className="btn  btn-sm bg-red-600  text-white"><FaTrash /></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageItems;