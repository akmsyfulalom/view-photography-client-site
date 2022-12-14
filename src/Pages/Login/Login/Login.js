// import { useContext } from "react";
// import { FaGoogle } from "react-icons/fa";
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
// import toast from 'react-hot-toast';
// import { GoogleAuthProvider } from "firebase/auth";
// import useTitle from "../../../Hooks/Hooks";


// const Login = () => {
//     useTitle('Login')
//     const { userLogin, providerLogin,  } = useContext(AuthContext)
//     const navigate = useNavigate()
//     const location = useLocation();
//     console.log(location);

//     const from = location.state?.from?.pathname || '/';


//     const handleLogin = (event) => {
//         event.preventDefault()
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         userLogin(email, password)
//             .then((result) => {
//                 const user = result.user;
//                 console.log(user);
//                 form.reset()


//                 if (user) {
//                     navigate(from, { replace: true });
//                 }
//                 toast.success('Login Success')
//             })
//             .catch(error => {
//                 toast.error(error.message)
//             })

//     }

//     const googleProvider = new GoogleAuthProvider()
//     const handleGoogleSignIn = () => {
//         providerLogin(googleProvider)
//             .then((result) => {
//                 const user = result.user;
//                 console.log(user.uid);
//                 toast.success('Login success with Google')

//                 navigate(from, { replace: true });
//             })
//             .catch(error => {
//                 toast.error(error.message)
//             })
//     }

//     return (
//         <div>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

//                     <div className="card-body">

//                         <h1 className="text-4xl font-bold">Login now!</h1>
//                         <form onSubmit={handleLogin}>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input name='email' type="email" placeholder="email" className="input input-bordered" />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input name='password' type="password" placeholder="password" className="input input-bordered" />
//                                 <label className="label">
//                                     <span className='label-text-alt '>You don't have account  <Link to="/register" className='link link-hover text-indigo-600'>Register</Link></span>
//                                 </label>
//                             </div>
//                             <div className="form-control mt-6">
//                                 <button type='submit' className="btn btn-primary mb-5">Login</button>
//                             </div>
//                         </form>
//                         <button onClick={handleGoogleSignIn} className="btn btn-primary"><span className='mr-2'><FaGoogle></FaGoogle></span>  GOOGLE LOGIN</button>
//                     </div>

//                 </div>

//             </div>
//         </div>

//     );
// };

// export default Login;





import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from "firebase/auth";
import useTitle from "../../../Hooks/Hooks";


const Login = () => {
    useTitle('Login')
    const { userLogin, providerLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset()

                toast.success('Login Success')
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error.message)
            })

    }

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user.uid);
                toast.success('Login success with Google')

                navigate(from, { replace: true });
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

                        <h1 className="text-4xl font-bold">Login now!</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <span className='label-text-alt '>You don't have account  <Link to="/register" className='link link-hover text-indigo-600'>Register</Link></span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary mb-5">Login</button>
                            </div>
                        </form>
                        <button onClick={handleGoogleSignIn} className="btn btn-primary"><span className='mr-2'><FaGoogle></FaGoogle></span>  GOOGLE LOGIN</button>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Login;