import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardLogin from '../dashboard/auth/DashboardLogin'

const AuthLayout = () => {
    return (
        <>
            <DashboardLogin />
            <Outlet />
        </>
    )
}

export default AuthLayout
