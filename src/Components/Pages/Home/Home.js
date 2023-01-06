import React from 'react';
import desktopBg from "../../../assets/home/background-home-desktop.jpg"

const Home = () => {
    return (
        <div className='lg:h-screen bg-cover lg:flex justify-around items-end' style={{ backgroundImage: `url(${desktopBg})` }}>
            <div className='flex flex-col lg:w-[450px] lg:mb-[131px]'>
                <h4 className='text-secondary text-2xl tracking-widest' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    SO, YOU WANT TO TRAVEL TO
                </h4>
                <h1 className='text-[150px] text-white' style={{ fontFamily: "'Bellefair', sans-serif" }}>SPACE</h1>
                <p className='text-secondary font-light'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and n ot hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>

            <div className='mb-[131px]'>
                <div className='w-64 h-64 rounded-full bg-white flex justify-center items-center text-4xl'>
                    <h3 className='text-accent' style={{ fontFamily: "'Bellefair', sans-serif" }}>EXPLORE</h3>
                </div>
            </div>
        </div>
    );
};

export default Home;