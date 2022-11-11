import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/Hooks';
import Service from '../Service/Service';
import headerImg from '../../assets/header-img.png'

const Home = () => {
    const services = useLoaderData();
    useTitle('Home')

    return (
        <div >
            <div className=' grid lg:grid-cols-4 gap-4  '>
                <div className='col-span-2 mt-28 mx-10'>
                    <h1 className=' text-7xl font-bold '>Hey!! I'm <span className='text-orange-500'>Harry </span></h1>
                    <h1 className='text-5xl'>Professional photographer</h1>
                    <p className='mt-10'>I use a high-quality Photography camera to take pictures. Having the best lens for any photography will help you capture those special moments, Remember happy times through pictures. I always try to capture my best picture</p>

                </div>

                <div className='col-span-2 '> <img src={headerImg} alt="headerImg" /></div>


            </div>

            <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-10  justify-items-center'>
                {
                    services.map(service => <Service
                        key={service.service_id}
                        service={service} />)
                }
            </div>

            <div className='text-center'>
                <Link to="/services"><button className="btn btn-success">See All</button></Link>
            </div>
        </div>
    );
};

export default Home;