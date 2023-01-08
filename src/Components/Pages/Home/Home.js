import React from 'react';
import desktopBg from "../../../assets/home/background-home-desktop.jpg"
import tabletBg from "../../../assets/home/background-home-tablet.jpg"
// style={{ backgroundImage: `url(${desktopBg})` }}
const Home = () => {
    return (
        <div className="lg:h-screen bg-cover lg:flex justify-around items-end md:pt-40  lg:bg-[url('https://i.ibb.co/2S9XqF1/background-home-desktop.jpg')] md:bg-[url('https://i.ibb.co/s1YD90Z/background-home-tablet.jpg')] sm:bg-[url('https://i.ibb.co/ggwhVBG/background-home-mobile.jpg')]">
            <div className='flex flex-col lg:w-[450px] lg:mb-[131px]'>
                <h4 className='text-secondary text-2xl tracking-widest lg:text-start md:text-center' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    SO, YOU WANT TO TRAVEL TO
                </h4>
                <h1 className='lg:text-[150px] lg:-mt-0 md:text-[180px] md:text-center md:-mt-10 text-white m-0 p-0' style={{ fontFamily: "'Bellefair', sans-serif" }}>SPACE</h1>
                <p className='text-secondary font-light lg:w-full lg:text-start md:w-[50%] md:mx-auto md:text-center md:text-lg'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and n ot hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>

            <div className='lg:mb-[131px] md:mt-14 md:flex justify-center '>
                <div className='w-64 h-64 rounded-full bg-white flex justify-center items-center text-4xl'>
                    <h3 className='text-accent' style={{ fontFamily: "'Bellefair', sans-serif" }}>EXPLORE</h3>
                </div>
            </div>
        </div>
    );
};

export default Home;