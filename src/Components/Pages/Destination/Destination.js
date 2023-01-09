import React, { useEffect, useState } from 'react';
import DestinationNavbar from '../Shared/DestinationNavbar';
import SingleDestination from './SingleDestination';

const Destination = () => {
    const [allDestinations, setAllDestinations] = useState([]);
    const [destination, setDestination] = useState({});

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => {
                setAllDestinations(data.destinations);
                setDestination(data.destinations[0]);
            })
    }, []);


    const handleId = id => {
        setDestination(allDestinations.find(d => d._id === id))
    }

    return (
        <div className="lg:h-screen bg-cover lg:bg-[url('https://i.ibb.co/bPzrLys/background-destination-desktop.jpg')] md:bg-[url('https://i.ibb.co/dJg5PMY/background-destination-tablet.jpg')] sm:bg-[url('https://i.ibb.co/yNZBsQf/background-destination-mobile.jpg')]">
            <div className='pt-40'>
                <div className='lg:ml-40 mb-16'>
                    <h4 className='text-white text-3xl md:text-2xl md:ml-14 tracking-widest' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}><span className='font-semibold opacity-25 mr-6'>01</span>PICK YOUR DESTINATION</h4>
                </div>
                <div>
                    <div className='lg:ml-[882px] hidden lg:block'>
                        <DestinationNavbar handleId={handleId} destination={destination} />
                    </div>
                    <div>
                        {
                            destination.name && <SingleDestination
                                destination={destination} handleId={handleId}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;