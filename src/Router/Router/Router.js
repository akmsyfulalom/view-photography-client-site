import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Faq from "../../Pages/Faq/Faq";
import Login from "../../Pages/Login/Login/Login";
import Services from "../../Pages/Services/Services";
import Register from "../../Pages/Login/Register/Register"
import Home from "../../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/services', element: <Services></Services>
            },
            {
                path: '/blog', element: <Blog></Blog>
            },
            {
                path: '/faq', element: <Faq></Faq>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Register></Register>
            }

        ]

    }
])