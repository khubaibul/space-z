import React from 'react';
import moon from "../../../assets/destination/image-moon.png";


const SingleDestination = ({ destination }) => {
    const { _id, name, images, description, distance, travel } = destination;
    console.log(destination);

    return (
        <div className='flex justify-around'>
            <div className=''>
                <img src={images} alt="" />
            </div>
            <div className='w-1/3 mt-10'>
                <div>
                    <h1 className='text-white text-8xl uppercase' style={{ fontFamily: "'Bellefair', sans-serif" }}>{name}</h1>
                    <p className='text-secondary w-[85%] my-4 text-xl leading-10' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{description}</p>
                </div>
                <div className="w-[85%] h-[1px] opacity-25 bg-white"></div>
                <div className='flex gap-x-20 mt-7'>
                    <div>
                        <h5 className='text-sm text-secondary' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>AVG. DISTANCE</h5>
                        <h3 className='text-3xl text-white' style={{ fontFamily: "'Bellefair', sans-serif" }}>{distance}</h3>
                    </div>
                    <div>
                        <h5 className='text-sm text-secondary' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                            EST. TRAVEL TIME
                        </h5>
                        <h3 className='text-3xl text-white uppercase' style={{ fontFamily: "'Bellefair', sans-serif" }}>
                            {travel}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDestination;