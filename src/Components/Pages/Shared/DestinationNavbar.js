import React from 'react';

const DestinationNavbar = ({ handleId, destination }) => {

    const { _id } = destination;

    const navLink = <>
        <li className='tracking-wide'><button onClick={() => handleId(1)}>MOON</button></li>
        <li className='tracking-wide'><button onClick={() => handleId(2)}>MARS</button></li>
        <li className='tracking-wide'><button onClick={() => handleId(3)}>EUROPA</button></li>
        <li className='tracking-wide'><button onClick={() => handleId(4)}>TITAN</button></li>
    </>



    return (
        <ul className='flex gap-x-5 text-white' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            <li className={`tracking-wide ${_id === 1 && "border-b-2 border-white"}  hover:border-b-2 hover:border-gray-500`}>
                <button onClick={() => handleId(1)}>MOON</button>
            </li>
            <li className={`tracking-wide ${_id === 2 && "border-b-2 border-white"}  hover:border-b-2 hover:border-gray-500`}>
                <button onClick={() => handleId(2)}>MARS</button>
            </li>
            <li className={`tracking-wide ${_id === 3 && "border-b-2 border-white"} hover:border-b-2 hover:border-gray-500`}>
                <button onClick={() => handleId(3)}>EUROPA</button>
            </li>
            <li className={`tracking-wide ${_id === 4 && "border-b-2 border-white"} hover:border-b-2 hover:border-gray-500`}>
                <button onClick={() => handleId(4)}>TITAN</button>
            </li>
        </ul>
    );
};

export default DestinationNavbar;