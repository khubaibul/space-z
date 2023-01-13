import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import SmallNavbar from '../Pages/Shared/SmallNavbar';

const MainLayout = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className=''>
            <div className=''>
                <Navbar setOpen={setOpen} open={open} />
            </div>
            <div>
                {
                    open && <SmallNavbar setOpen={setOpen} open={open} />
                }
            </div>
            <Outlet />
        </div>
    );
};

export default MainLayout;