import React, { createContext, useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import Reviews from './Reviews';
import toast from 'react-hot-toast';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';


// export const serviceContext = createContext();

const ViewService = () => {
    const [reviews, setReviews] = useState([]);



    const { user } = useContext(AuthContext);
    console.log('hello', user);
    const viewService = useLoaderData();
    const { service_name, service_image, desc, price, rating, quality, _id } = viewService


    const eachReview = reviews.filter(review => review.id === _id);


    useEffect(() => {
        fetch('https://view-photography-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, []);

    const handleAddReview = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const img = e.target.photoUrl.value;
        const title = e.target.title.value;
        const review = e.target.review.value;
        const userReviews = { name: name, service_name: service_name, email: email, img: img, title: title, review: review, id: _id };

        fetch('https://view-photography-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Reviews added successfully');
                    e.target.reset();
                }
            })
    }



    return (
        <>
            {/* <serviceContext.Provider value={viewService}></serviceContext.Provider> */}
            <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 py-20'>
                <PhotoProvider>
                    <div className='col-span-2 w-full'>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <PhotoView src={service_image}><img className='cursor-zoom-in rounded-md' src={service_image} alt="Shoes" /></PhotoView>

                            <div className="card-body">
                                <h2 className="card-title">{service_name}</h2>
                                <div className='flex'>
                                    <p>Quality: <span className='text-base font-semibold text-orange-400'>{quality}</span></p>
                                    <p>Rating: <span className='text-base font-semibold text-orange-400'>{rating}</span></p>
                                    <p>Price: <span className='text-base font-semibold text-orange-400'>${price}</span></p>
                                </div>
                                <p>{desc}</p>

                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </PhotoProvider>

                <div className='col-span-1  h-screen w-full mb-20'>
                    <h1 className="text-4xl font-semibold text-gray-600 text-center my-4">Service Review</h1>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            {/*  */}
                            {
                                user?.uid ? <div>
                                    <div className='flex justify-center items-center space-x-2'>
                                        {/* { ? <img src="" alt="" /> : } */}
                                        {user?.photoURL ? <img className='w-8 h-8 rounded-full' src={user?.photoURL} alt="" />
                                            : <FaUser />}
                                        <span>{user?.displayName ? user?.displayName : 'Name'}</span>
                                    </div>
                                    {/* Modal */}
                                    <div>
                                        <label htmlFor="my-modal" className="btn btn-primary btn-block btn-sm my-5">Click to type review</label>


                                        <input type="checkbox" id="my-modal" className="modal-toggle" />
                                        <div className="modal">
                                            <div className="modal-box">
                                                <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                                                <form onSubmit={handleAddReview}>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Your Name</span>
                                                        </label>
                                                        <input name='name' value={user?.displayName} type="text" placeholder="Name" className="input input-bordered" />
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Email</span>
                                                        </label>
                                                        <input name='email' type="text" placeholder='Email' value={user?.email} className="input input-bordered" />
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Photo URL</span>
                                                        </label>
                                                        <input name='photoUrl' value={user?.photoURL} type="text" placeholder='Photo URL' className="input input-bordered" />
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Review Title</span>
                                                        </label>
                                                        <input name='title' type="text" placeholder="Title" className="input input-bordered" />
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Type Your review</span>
                                                        </label>
                                                        <textarea name='review' className="textarea textarea-bordered h-24" placeholder="Type Here"></textarea>
                                                    </div>

                                                    <div className="modal-action">
                                                        <button type="submit"><label htmlFor="my-modal" className="btn">Submit Review</label></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Review  */}

                                    <div className='space-y-10 overflow-y-scroll h-[93vh]'>
                                        {

                                            eachReview.map(review => <Reviews key={review._id} reviews={review} />)
                                        }
                                    </div>



                                </div>
                                    :
                                    <div className='text-center'>
                                        <h1 className="text-2xl font-semibold text-center">Login First to See Reviews</h1>
                                        <Link to={'/login'}><button className='btn btn-primary btn-sm my-4'>Login</button></Link>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ViewService;