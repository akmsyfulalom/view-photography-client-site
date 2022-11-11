import { useContext } from "react";
import { Navigate, useLocation, } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { PropagateLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation()
    console.log(location)
    if (loading) {
        return <div className="flex justify-center h-[70vh] items-center">
            <PropagateLoader color="#36d7b7"></PropagateLoader>
        </div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
    }


    return children
};

export default PrivateRoute;




