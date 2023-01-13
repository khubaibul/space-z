import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../assets/shared/logo.svg";
import hamBurger from "../../../assets/shared/icon-hamburger.svg";
import menuCancel from "../../../assets/shared/icon-close.svg";

const Navbar = ({ setOpen, open }) => {

    const navLinkStyle = ({ isActive }) => {
        return {
            borderBottom: isActive ? "4px solid white" : "",
            backgroundColor: isActive ? "transparent" : "transparent",
            color: isActive ? "white" : ""
        }
    }


    const navLink = <>
        <li className='tracking-wide'><NavLink className="transition duration-500 hover:border-b-4 hover:border-gray-500" to="/" style={navLinkStyle}><span className='font-semibold tracking-widest'>00</span> HOME</NavLink></li>
        <li className='tracking-wide'><NavLink className="transition duration-500 hover:border-b-4 hover:border-gray-500" to="/destination" style={navLinkStyle}><span className='font-semibold tracking-widest'>01</span> DESTINATION</NavLink></li>
        <li className='tracking-wide'><NavLink className="transition duration-500 hover:border-b-4 hover:border-gray-500" to="/crew" style={navLinkStyle}><span className='font-semibold tracking-widest'>02</span> CREW</NavLink></li>
        <li className='tracking-wide'><NavLink className="transition duration-500 hover:border-b-4 hover:border-gray-500" to="/technology" style={navLinkStyle}><span className='font-semibold tracking-widest'>03</span> TECHNOLOGY</NavLink></li>
    </>
    return (
        <div className="navbar lg:pb-2 lg:pl-10 md:p-0 absolute lg:top-5 left-0 right-0 bg-transparent pr-0">
            <div className="form-control lg:w-56 lg:block md:block sm:block hidden md:pl-8 sm:ml-5">
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            <div className="navbar-start p-0 sm:justify-end justify-end sm:ml-40 w-full">
                <div className="dropdown">
                    <label onClick={() => setOpen(!open)} tabIndex={0} className="btn btn-ghost lg:hidden md:hidden">
                        <img className='w-5 h-5' src={open ? menuCancel : hamBurger} alt="collapse menu icon" />
                    </label>
                    {/* <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow backdrop-blur-[100px]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                        {navLink}
                    </ul> */}
                </div>
            </div>
            <div className='navbar-center hidden lg:flex md:flex'>
                <div className="w-[473px] h-[1px] opacity-25 bg-white left-72 z-50 absolute hidden lg:block"></div>
                <div className="lg:w-[800px] h-[96px] backdrop-blur-[80px] flex items-center">
                    <ul className="menu menu-horizontal p-0 m-0 text-white lg:ml-14 h-full gap-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                        {navLink}
                    </ul>
                </div>

                <div className="form-control lg:hidden md:hidden navbar-end">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;