import React from 'react';


const SingleTechnology = ({ technology }) => {

    const { _id, name, images, description } = technology;


    return (
        <div className='basis-4/5 flex'>
            <div className='basis-2/4 flex flex-col justify-center ml-20'>
                <p className='text-xs text-secondary absolute -mt-64' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>THE TERMINOLOGY ...</p>
                <h2 className='text-5xl text-white uppercase absolute -mt-44' style={{ fontFamily: "'Bellefair', sans-serif" }}>{name}</h2>
                <p className='text-secondary text-xl leading-9 w-[444px] mt-10' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{description}</p>
            </div>

            <div className='basis-2/4 flex justify-end'>
                <img src={images?.portrait} alt="Space Shuttle" />
            </div>
        </div>
    );
};

export default SingleTechnology;