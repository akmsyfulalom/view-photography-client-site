import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/Login/Login/Login";
import Services from "../../Pages/Services/Services";
import Register from "../../Pages/Login/Register/Register"
import Home from "../../Pages/Home/Home";
import ViewService from "../../Pages/ViewService/ViewService";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import AddService from "../../Pages/AddService/AddService";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>,
                loader: () => fetch('https://view-photography-server.vercel.app/services')
            },
            {
                path: '/services', element: <Services></Services>,
                loader: () => fetch('https://view-photography-server.vercel.app/allServices')
            },
            {
                path: '/blog', element: <Blog></Blog>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Register></Register>
            },
            {
                path: '/service/:id',
                element: <ViewService></ViewService>,
                loader: ({ params }) => fetch(`https://view-photography-server.vercel.app/service/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews /></PrivateRoute>,

            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            }


        ]

    }
])