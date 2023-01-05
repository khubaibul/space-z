import React from 'react';
import desktopBg from "../../../assets/home/background-home-desktop.jpg"

const Home = () => {
    return (
        <div className='h-screen flex justify-center items-center' style={{ backgroundImage: `url(${desktopBg})` }}>
            <p>Home</p>
        </div>
    );
};

export default Home;