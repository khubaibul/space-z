import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../assets/shared/logo.svg";

const Navbar = () => {
    // let activeStyle = {
    //     backgroundColor: "#002233",
    //     color: "white"
    // };
    // let activeClassName = "underline";

    const navLinkStyle = ({ isActive }) => {
        return {
            // textDecoration: isActive ? 'underline' : 'none',
            // textDecorationColor: isActive ? '#ce048e' : 'none',
            // textDecorationThickness: isActive ? "6px" : "",
            // textUnderlineOffset: isActive ? "7px" : "",
            borderBottom: isActive ? "4px solid white" : "",
            backgroundColor: isActive ? "transparent" : "transparent",
            color: isActive ? "white" : ""
        }
    }


    const navLink = <>
        <li className='tracking-wide'><NavLink to="/" style={navLinkStyle}><span className='font-semibold tracking-widest'>00</span> HOME</NavLink></li>
        <li className='tracking-wide'><NavLink to="/destination" style={navLinkStyle}><span className='font-semibold tracking-widest'>01</span> DESTINATION</NavLink></li>
        <li className='tracking-wide'><NavLink to="/crew" style={navLinkStyle}><span className='font-semibold tracking-widest'>02</span> CREW</NavLink></li>
        <li className='tracking-wide'><NavLink to="/technology" style={navLinkStyle}><span className='font-semibold tracking-widest'>03</span> TECHNOLOGY</NavLink></li>
    </>
    return (
        <div className="navbar pb-2 lg:px-10 absolute top-0 left-0 right-0 bg-transparent">
            <div className="form-control hidden lg:block navbar-start">
                <img src={logo} alt="" />
            </div>
            <div className="navbar-start p-0">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow w-52" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                        {navLink}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex bg-slate-600">
                <ul className="menu menu-horizontal p-0" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {navLink}
                </ul>
            </div>
            <div className="form-control lg:hidden navbar-end">
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Navbar;