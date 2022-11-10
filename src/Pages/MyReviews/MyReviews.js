import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    // console.log(myReviews)
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data));
    }, [user?.email])
    return (
        <div className='container mx-auto space-y-10'>
            {myReviews.map(myReview => <div className="card w-[70%] mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className='flex items-center space-x-3'>
                        <img className='w-14 h-14 rounded-full' src={myReview.img} alt="" />
                        <span className='text-md font-semibold'>{myReview.name}</span>
                    </div>
                    <div className='h-[2px] w-full bg-gray-300 rounded-md'></div>
                    <div className='space-y-2'>
                        <span className='text-sm font-semibold'>{myReview.title}</span>
                        <p className='text-base text-gray-500 font-medium leading-2'>{myReview.review}</p>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default MyReviews;