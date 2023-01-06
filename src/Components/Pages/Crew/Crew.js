import React from 'react';
import crewDesktopBg from "../../../assets/crew/background-crew-desktop.jpg";
import SingleCrew from './SingleCrew';

const Crew = () => {
    return (
        <div className='h-screen bg-cover' style={{ backgroundImage: `url(${crewDesktopBg})` }}>
            <div className='pt-40'>
                <div className='lg:ml-40'>
                    <h4 className='text-white text-3xl tracking-widest uppercase' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}><span className='font-semibold opacity-25 mr-6'>02</span>MEET YOUR CREW</h4>
                </div>
                <div className='w-[80%] mx-auto'>
                    <SingleCrew />
                </div>
            </div>
        </div>
    );
};

export default Crew;