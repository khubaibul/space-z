import React, { useEffect, useState } from 'react';
import techDesktopBg from "../../../assets/technology/background-technology-desktop.jpg";
import SingleTechnology from './SingleTechnology';

const Technology = () => {

    const [allTechnology, setAllTechnology] = useState([]);
    const [technology, setTechnology] = useState({});





    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => {
                setAllTechnology(data.technology);
                setTechnology(data.technology[0]);
            })
    }, []);



    const handleId = id => {
        setTechnology(allTechnology.find(c => c._id === id));
    }



    return (
        <div className='h-screen bg-cover' style={{ backgroundImage: `url(${techDesktopBg})` }}>
            <div className='pt-40'>
                <div className='lg:ml-40'>
                    <h4 className='text-white text-3xl tracking-widest uppercase' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}><span className='font-semibold opacity-25 mr-6'>03</span>SPACE LAUNCH 007</h4>
                </div>
                <div className='flex'>
                    <div className='flex flex-col items-end justify-center basis-1/5 gap-y-6 font-semibold text-xl' style={{ fontFamily: "'Bellefair', sans-serif" }}>
                        <button
                            onClick={() => handleId(1)}
                            className={`w-16 h-16 rounded-full flex justify-center items-center ${technology._id === 1 ? "bg-white text-base-100" : "bg-transparent text-white border-white border-[1px]"}`}>
                            1
                        </button>
                        <button
                            onClick={() => handleId(2)}
                            className={`w-16 h-16 rounded-full flex justify-center items-center ${technology._id === 2 ? "bg-white text-base-100" : "bg-transparent text-white border-white border-[1px]"}`}>
                            2
                        </button>
                        <button
                            onClick={() => handleId(3)}
                            className={`w-16 h-16 rounded-full flex justify-center items-center ${technology._id === 3 ? "bg-white text-base-100" : "bg-transparent text-white border-white border-[1px]"}`}>
                            3
                        </button>
                    </div>
                    <SingleTechnology technology={technology} />
                </div>
            </div>
        </div>
    );
};

export default Technology;