import React, { useContext } from 'react';
import { Authcontex } from '../Contex/UserContex';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(Authcontex)
    const location=useLocation();
    if(loading){
        return <div>Loading....</div>
    }
    if(user && user.uid)
    {
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>

};

export default PrivateRoutes;