import React from 'react';
import TechnologyNavbar from './TechnologyNavbar';


const SingleTechnology = ({ handleId, technology }) => {

    const { _id, name, images, description } = technology;


    return (
        <div className='lg:basis-full flex md:flex-col-reverse sm:flex-col-reverse flex-col-reverse lg:flex-row'>
            <div className='lg:basis-2/4 flex flex-col lg:justify-center lg:items-start lg:ml-20 md:items-center md:mt-10 sm:items-center sm:mt-8 items-center mt-8'>
                <p className='lg:text-xs text-secondary lg:text-start md:mb-3 md:text-base sm:mb-3 sm:text-base' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>THE TERMINOLOGY ...</p>
                <h2 className='lg:text-5xl md:text-4xl sm:text-3xl text-3xl text-white uppercase' style={{ fontFamily: "'Bellefair', sans-serif" }}>{name}</h2>
                <p className='text-secondary text-xl leading-9 lg:w-[444px] md:w-[80%] sm:[80%] w-[90%] md:text-center md:mt-5 lg:text-start sm:text-center sm:mt-4 text-center mt-4' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{description}</p>
            </div>

            <div className='lg:basis-2/4 lg:flex lg:justify-end'>
                <img className='hidden lg:block' src={images?.portrait} alt="Space Shuttle" />
                <img className='md:w-full md:block lg:hidden sm:w-full sm:block w-full block' src={images?.landscape} alt="Space Shuttle" />
                <div className='block md:block lg:hidden sm:flex sm:justify-center'><TechnologyNavbar handleId={handleId} technology={technology} /></div>
            </div>
        </div>
    );
};

export default SingleTechnology;