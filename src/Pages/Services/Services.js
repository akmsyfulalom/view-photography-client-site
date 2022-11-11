import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/Hooks';
import AllServices from './AllServices';

const Services = () => {
    useTitle('Services')
    const allServices = useLoaderData();

    return (
        <div className='container mx-auto grid grid-cols-3 gap-4'>
            {
                allServices.map(services => <AllServices key={services.service_id} services={services} />)
            }
        </div>
    );
};

export default Services;