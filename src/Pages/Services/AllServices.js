import React from 'react';

const AllServices = ({ services }) => {
    const { service_name, service_image, desc, price } = services;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={service_image} alt="serviceImage" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service_name}</h2>
                    <p title={desc}>{desc.slice(0, 100) + '...'}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Show Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllServices;