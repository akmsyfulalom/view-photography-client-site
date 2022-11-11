import React from 'react';
import toast from 'react-hot-toast';


const AddService = () => {




    const handleServiceAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const service_name = form.title.value;
        const service_image = form.photo.value;
        const price = form.price.value;
        const desc = form.desc.value;
        const quality = form.quality.value;
        const rating = form.rating.value;

        const addService = {
            service_name: service_name,
            service_image: service_image,
            price: price,
            desc: desc,
            quality: quality,
            rating: rating
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Successfully added your a service');
                    e.target.reset();
                }
            })
    }



    return (
        <div className='bg-base-200'>
            <h1 className="text-4xl font-bold text-center pt-20 ">Add a service</h1>
            <div className='py-1'> < hr /></div>
            <div className="hero min-h-screen bg-base-200">

                <div className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">


                    <div className="card-body w-full">

                        <form onSubmit={handleServiceAdd}>
                            <div className='lg:flex lg:space-x-5 '>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Service Title</span>
                                    </label>
                                    <input name='title' type="text" placeholder="title" className="input input-bordered " required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Booking Price</span>
                                    </label>
                                    <input name='price' type="text" placeholder="booking price" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service image</span>
                                </label>
                                <input name='photo' type="text" placeholder="service image" className="input input-bordered" required />
                            </div>
                            <div className='lg:flex lg:space-x-5'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Quality</span>
                                    </label>
                                    <input name='quality' type="text" placeholder="Quality" className="input input-bordered" required />

                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input name='rating' type="text" placeholder="Rating" className="input input-bordered" required />

                                </div>

                            </div>
                            <label className="label">
                                <span className="label-text">Service description</span>
                            </label>
                            <textarea name='desc' className="textarea textarea-bordered w-full " placeholder="Description"></textarea>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary ">Submit a service</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;