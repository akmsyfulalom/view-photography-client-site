import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Service from '../Service/Service';

const Home = () => {
    const services = useLoaderData();

    return (
        <>
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <Link to="" >
                                <button className="btn btn-primary">Get Started</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mx-auto grid grid-cols-3 gap-4 my-10'>
                {
                    services.map(service => <Service
                        key={service.service_id}
                        service={service} />)
                }
            </div>

            <div className='text-center'>
                <Link to="/services"><button className="btn btn-success">See All</button></Link>
            </div>
        </>
    );
};

export default Home;