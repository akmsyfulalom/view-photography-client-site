import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/Hooks';
import { serviceContext } from '../ViewService/ViewService';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    // const { viewService } = useContext(serviceContext)
    // console.log(viewService);
    const [myReviews, setMyReviews] = useState([]);
    // ono service re ano
    useTitle('My Reviews')
    useEffect(() => {
        fetch(`https://view-photography-server.vercel.app/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data));
    }, [user?.email]);


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`https://view-photography-server.vercel.app/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = myReviews.filter(odr => odr._id !== id);
                        setMyReviews(remaining);
                    }
                })
        }
    }

    return (

        <div>
            {
                myReviews.length > 0 ? <>
                    <div className='container mx-auto space-y-10'>
                        {myReviews.map(myReview => <div className="card w-[70%] mx-auto bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className='flex items-center space-x-3'>
                                    <img className='w-14 h-14 rounded-full' src={myReview.img} alt="" />
                                    <span className='text-md font-semibold'>{myReview.name}</span>
                                </div>
                                <div className='h-[2px] w-full bg-gray-300 rounded-md'></div>
                                <div className='space-y-2'>
                                    <span className='text-md font-semibold block'>Service Name: {myReview.service_name}</span>
                                    <span className='text-sm font-semibold'>{myReview.title}</span>
                                    <p className='text-base text-gray-500 font-medium leading-2'>{myReview.review}</p>
                                </div>
                                <div className='space-x-3'>

                                    <button className="btn btn-error" onClick={() => handleDelete(myReview._id)}>Delete</button>
                                </div>
                            </div>
                        </div>)}
                    </div>

                </>
                    :
                    <>
                        <div className='text-3xl font-bold text-center my-20'>
                            <h1>You have not applied any review to this yet</h1>
                            <span className='text-base my-10'>Go to <button className='btn btn-ghost'><Link to="/">Home</Link></button></span>
                        </div>
                    </>
            }

        </div>
    );
};

export default MyReviews;