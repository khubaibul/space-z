import React from 'react';
import { NavLink } from 'react-router-dom';
import cancelIcon from "../../../assets/shared/icon-close.svg";

const SmallNavbar = ({ setOpen, open }) => {

    const navLinkStyle = ({ isActive }) => {
        return {
            borderBottom: isActive ? "4px solid white" : "",
            backgroundColor: isActive ? "transparent" : "transparent"
        }
    }


    const navLink = <>
        <li className='tracking-wide'><NavLink className="transition duration-500 text-white" to="/" style={navLinkStyle}><span className='font-semibold tracking-widest'>00</span> HOME</NavLink></li>
        <li className='tracking-wide'><NavLink className="transition duration-500 text-white" to="/destination" style={navLinkStyle}><span className='font-semibold tracking-widest'>01</span> DESTINATION</NavLink></li>
        <li className='tracking-wide'><NavLink className="transition duration-500 text-white" to="/crew" style={navLinkStyle}><span className='font-semibold tracking-widest'>02</span> CREW</NavLink></li>
        <li className='tracking-wide'><NavLink className="transition duration-500 text-white" to="/technology" style={navLinkStyle}><span className='font-semibold tracking-widest'>03</span> TECHNOLOGY</NavLink></li>
    </>
    return (

        <div className='top-0 right-0 fixed h-full w-[70vw] ease-in-out duration-500 translate-y-0 z-10 p-4 backdrop-blur-[100px]'>
            <div className='flex justify-end mt-1'>
                <button onClick={() => setOpen(!open)}><img src={cancelIcon} alt="" /></button>
            </div>
            <ul className="mt-3 p-2 backdrop-blur-[100px] gap-y-16 flex flex-col" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {navLink}
            </ul>
        </div>
    );
};

export default SmallNavbar;