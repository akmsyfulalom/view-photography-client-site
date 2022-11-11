import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../../../Hooks/Hooks';





const Register = () => {
    useTitle('Register')
    const { createUser } = useContext(AuthContext)



    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const displayName = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password, displayName, photoURL)
            .then((result) => {
                const user = result.user;
                console.log(user)
                form.reset()
                toast.success('Successfully Registered')


            })
            .catch(error => {
                toast.error(error.message)
            })


    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">


                    <div className="card-body">
                        <h1 className="text-4xl font-bold">Register now!</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photoURL</span>
                                </label>
                                <input name='photo' type="text" placeholder="photoURL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <span className='label-text-alt '>Already you have account <Link to="/login" className='link link-hover text-indigo-600'>Login</Link></span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary ">Register</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;