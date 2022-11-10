import React from 'react';

const Reviews = ({ reviews }) => {
    const { name, img, review, title } = reviews;
    console.log(reviews)
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className='flex items-center space-x-3'>
                        <img className='w-14 h-14 rounded-full' src={img} alt="" />
                        <span className='text-md font-semibold'>{name}</span>
                    </div>
                    <div className='h-[2px] w-full bg-gray-300 rounded-md'></div>
                    <div className='space-y-2'>
                        <span className='text-sm font-semibold'>{title}</span>
                        <p className='text-base text-gray-500 font-medium leading-2'>{review}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;