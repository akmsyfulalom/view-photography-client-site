import React from 'react';
import { Link } from 'react-router-dom';


const Service = ({ service }) => {

    const { service_name, service_image, desc, quality, rating } = service;

    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={service_image} alt="serviceImage" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service_name}</h2>
                    <p title={desc}>{desc.slice(0, 100) + '...'}</p>
                    <div className='flex'>
                        <p className='flex  mx-10  font-bold ' > Quality:  <span className=' font-bold text-orange-500 pl-1 '>{quality}</span></p>
                        <p className='flex mx-10 font-bold '>Rating: <span className='  font-bold text-orange-500 pl-1'>{rating}</span></p>
                    </div>
                    <Link to={`/service/${service._id}`}>
                        <div className="card-actions">
                            <button className="btn btn-primary">Show Details</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;