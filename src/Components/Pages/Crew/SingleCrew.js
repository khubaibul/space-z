import React from 'react';
import crewImg from "../../../assets/crew/image-douglas-hurley.png";

const SingleCrew = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className='w-1/2 flex flex-col justify-center'>
                <h3 className='text-3xl text-white opacity-50 mb-4' style={{ fontFamily: "'Bellefair', sans-serif" }}>COMMANDER</h3>
                <h2 className='text-5xl text-white mb-6' style={{ fontFamily: "'Bellefair', sans-serif" }}>DOUGLAS HARLEY</h2>
                <p className='text-secondary text-xl leading-10 w-[444px]' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
            </div>
            <div>
                <img className='w-[420px]' src={crewImg} alt="Crew" />
            </div>
        </div>
    );
};

export default SingleCrew;