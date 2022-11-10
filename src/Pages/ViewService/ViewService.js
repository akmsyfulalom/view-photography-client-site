import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';



const ViewService = () => {
    const { user } = useContext(AuthContext);
    console.log('hello', user);
    const viewService = useLoaderData();
    const { service_name, service_image, desc, price, rating, quality } = viewService
    console.log(viewService)
    return (
        <div className='container mx-auto grid grid-cols-3 gap-4'>
            <div className='col-span-2 w-full'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <img src={service_image} alt="Shoes" />
                    <div className="card-body">
                        <h2 className="card-title">{service_name}</h2>
                        <p>{desc}</p>
                        <div>
                            <p>Quality: <span className='text-base font-semibold text-orange-400'>{quality}</span></p>
                            <p>Rating: <span className='text-base font-semibold text-orange-400'>{rating}</span></p>
                            <p>Price: <span className='text-base font-semibold text-orange-400'>${price}</span></p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-span-1  h-screen w-full'>
                <h1 className="text-4xl font-semibold text-gray-600 text-center my-4">Service Review</h1>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        {/*  */}
                        {
                            user?.uid ? <div>
                                <div className='flex justify-center items-center space-x-2'>
                                    {user?.photoURL ? <img src="" alt="" /> : <FaUser />}
                                    <span>{user?.displayName ? user?.displayName : 'AKM Syful'}</span>
                                </div>
                                {/* Modal */}
                                <div className=''>

                                    <label className='btn btn-sm btn-block btn-primary my-5' htmlFor="my-modal-6">Type Your review here</label>
                                    <div>
                                        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                                        <div className="modal modal-bottom sm:modal-middle">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                                                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                                <div className="modal-action">
                                                    <label htmlFor="my-modal-6" className="btn">Yay!</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                :
                                <div>

                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ViewService;