import React from 'react';
import techDesktopBg from "../../../assets/technology/background-technology-desktop.jpg";
import spaceShuttle from "../../../assets/technology/image-launch-vehicle-portrait.jpg";

const Technology = () => {
    return (
        <div className='h-screen bg-cover' style={{ backgroundImage: `url(${techDesktopBg})` }}>
            <div className='pt-40'>
                <div className='lg:ml-40'>
                    <h4 className='text-white text-3xl tracking-widest uppercase' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}><span className='font-semibold opacity-25 mr-6'>03</span>SPACE LAUNCH 007</h4>
                </div>
                <div className='flex'>

                    <div className='flex flex-col items-end justify-center basis-1/5 gap-y-6 text-base-100 font-semibold text-xl' style={{ fontFamily: "'Bellefair', sans-serif" }}>
                        <h2 className='w-16 h-16 rounded-full bg-white flex justify-center items-center'>1</h2>
                        <h2 className='w-16 h-16 rounded-full text-white border-white border-[1px] flex justify-center items-center'>
                            2
                        </h2>
                        <h2 className='w-16 h-16 rounded-full text-white border-white border-[1px] flex justify-center items-center'>
                            3
                        </h2>
                    </div>

                    <div className='basis-2/5 flex flex-col justify-center ml-20'>
                        <p className='text-xs text-secondary' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>THE TERMINOLOGY ...</p>
                        <h2 className='text-5xl text-white' style={{ fontFamily: "'Bellefair', sans-serif" }}>DOUGLAS HARLEY</h2>
                        <p className='text-secondary text-xl leading-9 w-[444px]' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                    </div>

                    <div className='basis-2/5 flex justify-end'>
                        <img src={spaceShuttle} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technology;