import { NavLink } from "react-router";
import './Header.css';

const Header = () => {
    return (
        <div className="navbar bg-base-100 px-0 my-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </ul>
                </div>
                <h2 className="font-extrabold text-3xl text-[#1A1919]">CareerHub</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex justify-center items-center gap-6 ">
                    <NavLink className={"font-bold text-base"} to="/">Home</NavLink>
                    <NavLink className={"font-bold text-base"} to="/about">About</NavLink>
                    <NavLink className={"font-bold text-base"} to="/contact">Contact</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-6 py-3 rounded-lg font-extrabold text-xl text-white">Start Applying</a>
            </div>
        </div>
    );
};

export default Header;