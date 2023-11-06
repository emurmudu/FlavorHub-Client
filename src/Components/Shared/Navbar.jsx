import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOUt = () => {
        logOut()
            .then(() => toast('You are logged out'))
            .catch(error => {
                console.error(error);
                toast.error('Error during logout');
            })
    }


    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/allFoods'>All Foods</NavLink></li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                        <li>
                            <a>My Profile</a>
                            <ul className="p-2">
                                <li><NavLink to='/myAddedFoods'>My Added Foods</NavLink></li>
                                <li><NavLink to='/addFoodItem'>Add a Food</NavLink></li>
                                <li><NavLink to='/myOrders'>My Orders</NavLink></li>
                            </ul>
                        </li>

                    </ul>
                </div>
                <a className=" cursor-pointer normal-case font-bold text-2xl md:text-3xl"><span className="text-yellow-700">Flavor</span><span><span className="">H</span>ub</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/allFoods'>All Foods</NavLink></li>
                    <li><NavLink to='/blog'>Blog</NavLink></li>
                    <li tabIndex={0} >
                        <details>
                            <summary className="relative ">My Profile</summary>
                            <ul className="p-2 absolute w-max bg-white mt-2">
                                <li><NavLink to='/myAddedFoods'>My Added Food Items</NavLink></li>
                                <li><NavLink to='/addFoodItem'>Add a Food Item</NavLink></li>
                                <li><NavLink to='/myOrders'>My Ordered Food Items</NavLink></li>
                            </ul>
                        </details>
                    </li>

                </ul>
            </div>

            <div className="navbar-end">
                {
                    user ? <>
                        <span className=" hidden lg:block font-bold p-2">{user.displayName
                        }</span>
                        <div className="flex items-center gap-1">

                            <img className="hidden md:block btn btn-ghost btn-circle avatar" src={user.photoURL
                            } />
                            <a onClick={handleLogOUt} className="btn btn-sm font-bold dark:text-white dark:bg-zinc-700">Logout</a>
                        </div>
                    </>
                        :
                        <NavLink to="/login">
                            <a className=" font-bold">Login</a>
                        </NavLink>
                }
            </div>
            <ToastContainer />
        </div>
    );

};

export default Navbar;