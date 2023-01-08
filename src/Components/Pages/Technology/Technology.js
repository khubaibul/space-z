import React, { useEffect, useState } from 'react';
import techDesktopBg from "../../../assets/technology/background-technology-desktop.jpg";
import SingleTechnology from './SingleTechnology';
import TechnologyNavbar from './TechnologyNavbar';

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
        <div className="lg:h-screen bg-cover lg:bg-[url('https://i.ibb.co/Pc3hpcp/background-technology-desktop.jpg')] md:bg-[url('https://i.ibb.co/zhfxd66/background-technology-tablet.jpg')] sm:bg-[url('https://i.ibb.co/Bt0yY6p/background-technology-mobile.jpg')]" style={{ backgroundImage: `url(${techDesktopBg})` }}>
            <div className='pt-40'>
                <div className='lg:ml-40'>
                    <h4 className='text-white text-3xl md:text-2xl md:ml-14 tracking-widest uppercase' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}><span className='font-semibold opacity-25 mr-6'>03</span>SPACE LAUNCH 007</h4>
                </div>
                <div className='flex md:mt-20 lg:mt-0'>
                    <div className='hidden lg:flex items-center justify-end -mt-16 basis-1/5'><TechnologyNavbar handleId={handleId} technology={technology} /></div>
                    <div className='md:basis-full'><SingleTechnology handleId={handleId} technology={technology} /></div>
                </div>
            </div>
        </div>
    );
};

export default Technology;