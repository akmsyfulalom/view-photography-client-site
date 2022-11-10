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
                                <label htmlFor="my-modal" className="btn btn-primary btn-block btn-sm my-5">Click to type review</label>


                                <input type="checkbox" id="my-modal" className="modal-toggle" />
                                <div className="modal">
                                    <div className="modal-box">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Review Title</span>
                                            </label>
                                            <input type="text" placeholder="Title" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Type Your review</span>
                                            </label>
                                            <textarea className="textarea textarea-bordered h-24" placeholder="Type Here"></textarea>
                                        </div>

                                        <div className="modal-action">
                                            <label htmlFor="my-modal" className="btn">Submit Review</label>
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