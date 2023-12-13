import { useContext } from "react";
import { AuthContext } from "../providerss/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";


const PrivateOrders = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <div className="mt-52 text-center"><span className="loading loading-ring loading-lg"></span></div>
    }

    if(user){
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateOrders;


PrivateOrders.propTypes = {
    children: PropTypes.node
}