import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import DashboardLogin from '../dashboard/auth/DashboardLogin'

const AuthLayout = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
    const admin = JSON.parse(localStorage.getItem('admin') || null);
    const [isAuthenticated, setIsAuthenticated] = useState(user?.role === "admin");
    const navigate = useNavigate();
    // console.log(admin);

    useEffect(() => {
        if (admin && admin.role === "admin" || user && user.role === 'admin') {
            setIsAuthenticated(true);
            // isLogin();
        }
        else {
            setIsAuthenticated(false);
        }
    }, [user])
    const logoutDashboard = () => {
        localStorage.removeItem('admin');
        setIsAuthenticated(false);
        navigate('/dashboard');
    }
    console.log("1 ",isAuthenticated);
    
    if (!isAuthenticated) {
        return <DashboardLogin isLogin={() => { setIsAuthenticated(true) }} />;
    }
    else {
        return <Outlet context={{logoutDashboard}} />;
    }


}

export default AuthLayout
