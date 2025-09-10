import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import DashboardLogin from '../dashboard/auth/DashboardLogin'

const AuthLayout = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user' || null)));

    useEffect(() => {
        if (user && user.role === "admin") {
            setIsAuthenticated(true);
        }
        else {
            setIsAuthenticated(false);
        }
    }, [user])

    if (!isAuthenticated) {
        return <DashboardLogin isLogin={()=>{setIsAuthenticated(true)}}/>;
    }
    else {
        return <Outlet />;
    }


}

export default AuthLayout
