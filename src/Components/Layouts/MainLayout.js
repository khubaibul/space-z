import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';

const MainLayout = () => {
    return (
        <div className=''>
            <div className=''>
                <Navbar />
            </div>
            <Outlet />
        </div>
    );
};

export default MainLayout;