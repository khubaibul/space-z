import React from 'react';
import TechnologyNavbar from './TechnologyNavbar';


const SingleTechnology = ({ handleId, technology }) => {

    const { _id, name, images, description } = technology;


    return (
        <div className='lg:basis-full flex md:flex-col-reverse lg:flex-row'>
            <div className='lg:basis-2/4 flex flex-col lg:justify-center lg:items-start lg:ml-20 md:items-center md:mt-10'>
                <p className='lg:text-xs text-secondary lg:text-start md:mb-3 md:text-base' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>THE TERMINOLOGY ...</p>
                <h2 className='lg:text-5xl md:text-4xl  text-white uppercase' style={{ fontFamily: "'Bellefair', sans-serif" }}>{name}</h2>
                <p className='text-secondary text-xl leading-9 w-[444px] md:text-center md:mt-5 lg:text-start' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{description}</p>
            </div>

            <div className='lg:basis-2/4 lg:flex lg:justify-end'>
                <img className='hidden lg:block' src={images?.portrait} alt="Space Shuttle" />
                <img className='md:w-full hidden md:block lg:hidden' src={images?.landscape} alt="Space Shuttle" />
                <div className='hidden md:block lg:hidden'><TechnologyNavbar handleId={handleId} technology={technology} /></div>
            </div>
        </div>
    );
};

export default SingleTechnology;