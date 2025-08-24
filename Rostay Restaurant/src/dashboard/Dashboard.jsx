import { Link, Outlet } from 'react-router-dom'
import ProductDashboard from './product/ProductDashboard'

const Dashboard = () => {
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
                        <Link to='/dashboard/blog' style={{ textDecoration: "none" }}>
                            <li>Blog</li>
                        </Link>
                    </ul>
                </aside>
                <Outlet />
            </div>
        </>
    )
}

export default Dashboard