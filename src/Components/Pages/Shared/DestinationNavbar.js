import React from 'react';

const DestinationNavbar = ({ handleId }) => {


    const navLink = <>
        <li className='tracking-wide'><button onClick={() => handleId(1)}>MOON</button></li>
        <li className='tracking-wide'><button onClick={() => handleId(2)}>MARS</button></li>
        <li className='tracking-wide'><button onClick={() => handleId(3)}>EUROPA</button></li>
        <li className='tracking-wide'><button onClick={() => handleId(4)}>TITAN</button></li>
    </>



    return (
        <ul className='flex gap-x-5 text-white' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            <li className='tracking-wide'><button onClick={() => handleId(1)}>MOON</button></li>
            <li className='tracking-wide'><button onClick={() => handleId(2)}>MARS</button></li>
            <li className='tracking-wide'><button onClick={() => handleId(3)}>EUROPA</button></li>
            <li className='tracking-wide'><button onClick={() => handleId(4)}>TITAN</button></li>
        </ul>
    );
};

export default DestinationNavbar;