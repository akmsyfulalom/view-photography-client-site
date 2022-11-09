import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServices from './AllServices';

const Services = () => {
    const allServices = useLoaderData();
    console.log(allServices);
    return (
        <div className='container mx-auto grid grid-cols-3 gap-4'>
            {
                allServices.map(services => <AllServices services={services} />)
            }
        </div>
    );
};

export default Services;