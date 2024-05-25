import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"

const PrivateRoute = ({children}) => {
    const user = useSelector((state) => state.user);
    let location = useLocation();

    if(!user.state) {
        return <Navigate to="/Signin" state={{ from: location}} replace />
    }
 return children

};

export default PrivateRoute;