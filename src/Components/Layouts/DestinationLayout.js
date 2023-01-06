import React from 'react';
import { Outlet } from 'react-router-dom';
import DestinationNavbar from '../Pages/Shared/DestinationNavbar';

const DestinationLayout = () => {
    return (
        <div>
            <DestinationNavbar />
            <Outlet />
        </div>
    );
};

export default DestinationLayout;