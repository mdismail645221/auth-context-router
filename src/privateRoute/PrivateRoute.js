import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const PrivateRoute = ({children}) =>{

    const { user, loading } = useContext(AuthContext);
        
    if (loading){
        return (<button type="button" class="bg-indigo-500" disabled> 
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
            Processing...
        </button>
        )
    }

        if(user && user?.uid){
            return children;
        }


        return <Navigate to='/login'></Navigate>
}

export default PrivateRoute;