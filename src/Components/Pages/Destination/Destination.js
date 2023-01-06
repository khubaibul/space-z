import React, { useEffect, useState } from 'react';
import destinationBgDesktop from "../../../assets/destination/background-destination-desktop.jpg";
import DestinationNavbar from '../Shared/DestinationNavbar';
import SingleDestination from './SingleDestination';

const Destination = () => {
    const [allDestinations, setAllDestinations] = useState([]);
    const [destination, setDestination] = useState({});
    const [destinationId, setDestinationId] = useState(1);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => {
                setAllDestinations(data.destinations);
                setDestination(data.destinations[0]);
            })
    }, []);


    const handleId = id => {
        setDestinationId(id);
        const destinationById = allDestinations.find(d => d._id === destinationId);
        setDestination(destinationById)
    }

    return (
        <div className='lg:h-screen bg-cover' style={{ backgroundImage: `url(${destinationBgDesktop})` }}>
            <div className='pt-40'>
                <div className='lg:ml-40 mb-16'>
                    <h4 className='text-white text-3xl tracking-widest' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}><span className='font-semibold opacity-25 mr-6'>01</span>PICK YOUR DESTINATION</h4>
                </div>
                <div>
                    <div className='ml-[882px]'>
                        <DestinationNavbar handleId={handleId} />
                    </div>
                    <div>
                        {
                            destination.name && <SingleDestination destination={destination} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;