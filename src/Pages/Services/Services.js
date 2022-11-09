import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const allServices = useLoaderData();
    console.log(allServices);
    return (
        <div>
            <h1>services</h1>
        </div>
    );
};

export default Services;