import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../assets/shared/logo.svg";
import hamBurger from "../../../assets/shared/icon-hamburger.svg";

const Navbar = () => {

    const navLinkStyle = ({ isActive }) => {
        return {
            borderBottom: isActive ? "4px solid white" : "",
            backgroundColor: isActive ? "transparent" : "transparent",
            color: isActive ? "white" : ""
        }
    }


    const navLink = <>
        <li className='tracking-wide'><NavLink className="transition duration-500" to="/" style={navLinkStyle}><span className='font-semibold tracking-widest'>00</span> HOME</NavLink></li>
        <li className='tracking-wide'><NavLink className="transition duration-500" to="/destination" style={navLinkStyle}><span className='font-semibold tracking-widest'>01</span> DESTINATION</NavLink></li>
        <li className='tracking-wide'><NavLink className="transition duration-500" to="/crew" style={navLinkStyle}><span className='font-semibold tracking-widest'>02</span> CREW</NavLink></li>
        <li className='tracking-wide'><NavLink className="transition duration-500" to="/technology" style={navLinkStyle}><span className='font-semibold tracking-widest'>03</span> TECHNOLOGY</NavLink></li>
    </>
    return (
        <div className="navbar lg:pb-2 lg:pl-10 md:p-0 absolute lg:top-5 left-0 right-0 bg-transparent pr-0">
            <div className="form-control hidden lg:block md:block md:pl-8 navbar-start">
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            <div className="navbar-start p-0">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden md:hidden">
                        <img className='w-5 h-5' src={hamBurger} alt="collapse menu icon" />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow w-52" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                        {navLink}
                    </ul>
                </div>
            </div>
            <div className='navbar-center hidden lg:flex md:flex'>
                <div className="w-[473px] h-[1px] opacity-25 bg-white left-72 z-50 absolute hidden lg:block"></div>
                <div className="lg:w-[800px] h-[96px] backdrop-blur-[80px] flex items-center">
                    <ul className="menu menu-horizontal p-0 m-0 text-white lg:ml-14" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
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