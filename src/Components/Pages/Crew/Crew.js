import React, { useEffect, useState } from 'react';
import crewDesktopBg from "../../../assets/crew/background-crew-desktop.jpg";
import SingleCrew from './SingleCrew';

const Crew = () => {
    const [allCrews, setAllCrews] = useState([]);
    const [crew, setCrew] = useState({});





    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => {
                setAllCrews(data.crew);
                setCrew(data.crew[0]);
            })
    }, []);



    const handleId = id => {
        setCrew(allCrews.find(c => c._id === id));
    }


    return (
        <div className="lg:h-screen bg-cover lg:bg-[url('https://i.ibb.co/4W6BpSR/background-crew-desktop.jpg')] md:bg-[url('https://i.ibb.co/jkhpx1z/background-crew-tablet.jpg')] sm:bg-[url('https://i.ibb.co/kx0MjBV/background-crew-mobile.jpg')]">
            <div className='pt-40'>
                <div className='lg:ml-40'>
                    <h4 className='text-white text-3xl md:text-2xl md:ml-14 tracking-widest uppercase' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}><span className='font-semibold opacity-25 mr-6'>02</span>MEET YOUR CREW</h4>
                </div>
                <div className='lg:w-[80%] lg:mx-auto'>
                    <SingleCrew handleId={handleId} crew={crew} />
                </div>
            </div>
        </div>
    );
};

export default Crew;