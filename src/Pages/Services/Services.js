import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/Hooks';
import AllServices from './AllServices';

const Services = () => {
    useTitle('Services')
    const allServices = useLoaderData();

    return (
        <div>
            <div className='text-center my-20'>
                <h3 className='text-5xl font-bold text-red-200'>Service</h3>
                <p className='text-xl font-bold my-5'>View Photographer</p>
            </div>
            <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4 justify-items-center'>
                {
                    allServices.map(services => <AllServices key={services.service_id} services={services} />)
                }
            </div>
        </div>
    );
};

export default Services;