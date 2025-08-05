import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DashboardLayout = () => {
    return (
        <>
            <div className='container-fluid py-3 dashboard-section'>
                <aside>
                    <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/logo.svg" alt="" />
                    <ul>
                        <Link to='/dashboard/products' style={{ textDecoration: "none" }}>
                            <li>Products</li>
                        </Link>
                        <Link to='/dashboard/category' style={{ textDecoration: "none" }}>
                            <li>Category</li>
                        </Link>
                    </ul>
                </aside>
                {/* <ProductDashboard /> */}
                <Outlet />
            </div>
        </>
    )
}

export default DashboardLayout