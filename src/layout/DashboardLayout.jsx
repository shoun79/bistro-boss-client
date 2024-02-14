import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendar, FaCartShopping, FaUsers, FaWallet } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import useCart from "../hooks/useCart";
import { IoMdMenu } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { ImSpoonKnife } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    //TODO:Load data from the server to have dynamic admin based on data
    // const isAdmin = true;

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="mt-2 btn btn-outline btn-primary drawer-button lg:hidden">X</label>
                {/* Page content here */}
                <Outlet></Outlet>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-[#D1A054]">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li className="mb-2 "><NavLink to='/dashboard/admin-home' ><FaHome />Admin Home</NavLink></li>
                            <li className="mb-2"><NavLink to='/dashboard/add-item'><ImSpoonKnife /> Add Items</NavLink></li>
                            <li className="mb-2"><NavLink to='/dashboard/manage-items'><GiHamburgerMenu /> Manage Items</NavLink></li>
                            <li className="mb-2"><NavLink to='/'><FaBook /> Manage bookings</NavLink></li>
                            <li className="mb-2"><NavLink to='/dashboard/allusers'><FaUsers /> All Users</NavLink></li>
                        </> :

                            <>
                                <li className="mb-2 "><NavLink to='/dashboard/user-home' ><FaHome />User Home</NavLink></li>
                                <li className="mb-2"><NavLink to='/wallet'><FaWallet /> Wallet</NavLink></li>
                                <li className="mb-2" ><NavLink to='/dashboard/my-cart'><FaCartShopping /> My Cart<span className="badge badge-sm indicator-item">{cart?.length || 0}</span></NavLink></li>
                                <li className="mb-2"><NavLink to='/'><FaCalendar /> Reservations</NavLink></li>
                            </>
                    }


                    <div className="divider"></div>
                    <li className="mb-2"><NavLink to='/'><FaHome /> Home</NavLink></li>
                    <li className="mb-2"><NavLink to='/menu'><IoMdMenu /> Our Menu</NavLink></li>
                    <li className="mb-2"><NavLink to='/order/salad'><IoFastFoodOutline /> Order Food</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;