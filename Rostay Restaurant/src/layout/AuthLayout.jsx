import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import DashboardLogin from '../dashboard/auth/DashboardLogin'
import Swal from 'sweetalert2';

const AuthLayout = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
    const admin = JSON.parse(localStorage.getItem('admin') || null);
    const [isAuthenticated, setIsAuthenticated] = useState(user?.role === "admin");
    const navigate = useNavigate();

    useEffect(() => {
        if (admin && admin.role === "admin" || user && user.role === 'admin') {
            setIsAuthenticated(true);
        }
        else {
            setIsAuthenticated(false);
        }
    }, [user])
    const logoutDashboard = () => {
        Swal.fire({
            title: "Are you sure that you want to log out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#072b31",
            cancelButtonColor: "#072b31",
            confirmButtonText: "Yes, log out!"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('admin');
                setIsAuthenticated(false);
                navigate('/dashboard');
                setUser(null);
                emptyCart();
                emptyWishlist();
                Swal.fire({
                    title: "Logged Out!",
                    icon: "success"
                });
            }
        });
       
    }
    if (!isAuthenticated) {
        return <DashboardLogin isLogin={() => { setIsAuthenticated(true) }} />;
    }
    else {
        return <Outlet context={{ logoutDashboard }} />;
    }
}

export default AuthLayout