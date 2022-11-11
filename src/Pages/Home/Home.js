import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/Hooks';
import Service from '../Service/Service';
import headerImg from '../../assets/header-img.png'
import importImg from '../../assets/sectionImg.jpg'
import weddingImg from '../../assets/wedding.jpg'
import eventImg from '../../assets/event.jpg'
import travelImg from '../../assets/travel.png'


const Home = () => {
    const services = useLoaderData();
    useTitle('Home')

    return (
        <div >

            <div className=' grid lg:grid-cols-4 gap-4  '>
                <div className='col-span-2 mt-28 mx-10'>
                    <h1 className=' text-7xl font-bold '>Hey!! I'm <span className='text-orange-500'>Harry </span></h1>
                    <h1 className='text-5xl my-5 text-red-200'>Professional photographer</h1>
                    <p className='mt-10'>I use a high-quality Photography camera to take pictures. Having the best lens for any photography will help you capture those special moments, Remember happy times through pictures. I always try to capture my best picture</p>

                </div>

                <div className='col-span-2 '> <img src={headerImg} alt="headerImg" /></div>


            </div>

            <div className='grid lg:grid-cols-4 gap-4 mx-5 '>
                <div className='col-span-2 '>
                    <img className='p-20 rounded-full' src={importImg} alt="" />
                </div>
                <div className='col-span-2  py-56'>
                    <p className='text-orange-400 font-bold  '>Here is about me</p>
                    <h1 className='text-2xl font-bold text-red-200 py-5'>About</h1>
                    <p className='font-bold text-sm'>I am a professional photographer. I have been doing photography professionally and successfully for the last five years.Photography is not just my profession it is my passion. You can see in my services what kind of photos I can take and I am very interested in taking these photos. Thank you so much</p>
                </div>

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

            <div className='mt-10 justify-items-center '>

                <h1 className='text-red-200 text-5xl font-bold text-center'>Some favorite pictures</h1>
                <p className='text-center text font-bold text-xl my-5'>View PhotoGrapher</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-10 mx-10 justify-items-center'>

                <div>
                    <img className='justify-center items-center' src={weddingImg} alt="" />
                </div>
                <div>
                    <img src={eventImg} alt="" />
                </div>
                <div>
                    <img src={travelImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;