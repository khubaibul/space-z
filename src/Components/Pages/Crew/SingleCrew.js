import React from 'react';

const SingleCrew = ({ handleId, crew }) => {
    const { _id, name, role, bio, images } = crew;
    return (
        <div className='lg:flex lg:items-center lg:justify-between md:mt-20 lg:m-0 lg:ml-14'>
            <div className='lg:w-1/2 flex flex-col lg:justify-center lg:items-start md:items-center'>
                <h3 className='text-3xl text-white opacity-50 mb-4 uppercase' style={{ fontFamily: "'Bellefair', sans-serif" }}>{role}</h3>
                <h2 className='text-5xl text-white mb-6 uppercase' style={{ fontFamily: "'Bellefair', sans-serif" }}>{name}</h2>
                <p className='text-secondary text-xl leading-10 w-[444px] md:text-center lg:text-start' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{bio}</p>
                <div className='flex gap-x-4 lg:mt-96 lg:fixed md:my-10'>
                    <button
                        onClick={() => handleId(1)}
                        className={`w-3 h-3 rounded-full bg-white ${_id === 1 ? "opacity-100" : "opacity-25"}`}>
                    </button>
                    <button
                        onClick={() => handleId(2)}
                        className={`w-3 h-3 rounded-full bg-white ${_id === 2 ? "opacity-100" : "opacity-25"}`}>
                    </button>
                    <button
                        onClick={() => handleId(3)}
                        className={`w-3 h-3 rounded-full bg-white ${_id === 3 ? "opacity-100" : "opacity-25"}`}>
                    </button>
                    <button
                        onClick={() => handleId(4)}
                        className={`w-3 h-3 rounded-full bg-white ${_id === 4 ? "opacity-100" : "opacity-25"}`}>
                    </button>
                </div>
            </div>
            <div className='md:flex justify-center'>
                <img className='w-[420px] h-[570px]' src={images?.png} alt="Crew" />
            </div>
        </div>
    );
};

export default SingleCrew;