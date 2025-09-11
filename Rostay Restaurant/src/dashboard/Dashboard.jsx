import { Link, Outlet } from 'react-router-dom'
import ProductDashboard from './product/ProductDashboard'
import { IoMdSunny } from 'react-icons/io';
import { IoMoon } from 'react-icons/io5';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import StaticLanguage from '../utils/StaticLanguage';

const Dashboard = (props) => {
    const [language, setLanguage] = useContext(LanguageContext);
    return (
        <>
            <div className='container-fluid py-3 dashboard-section'>
                <div className="dashboard-header">
                    <div className="dashboard-logo">
                        <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/logo.svg" alt="" />
                    </div>
                    <div className="dashboard-items">
                        <select value={language} onChange={() => {
                            language === "AZ" ? setLanguage("EN") : setLanguage("AZ");
                            language === "AZ" ? localStorage.setItem('language', "EN") : localStorage.setItem('language', "AZ");
                        }}>
                            <option value="AZ">AZ</option>
                            <option value="EN">EN</option>
                        </select>
                        <button className='mode-btn' onClick={props.modeFunction}>
                            {props.mode === "light" ? <IoMdSunny className='icon' /> : <IoMoon className='icon' />}
                        </button>
                    </div>
                </div>

                <div className="dashboard-body">
                    <ul className='dashboard-list'>
                        <Link to='/dashboard/products' style={{ textDecoration: "none" }}>
                            <li>
                                <StaticLanguage en="Products" az="Məhsullar"/>
                            </li>
                        </Link>
                        <Link to='/dashboard/category' style={{ textDecoration: "none" }}>
                            <li>
                                <StaticLanguage en="Categories" az="Kateqorİyalar"/>
                            </li>
                        </Link>
                        <Link to='/dashboard/blog' style={{ textDecoration: "none" }}>
                            <li>
                                <StaticLanguage en="Blogs" az="Bloqlar"/>
                            </li>
                        </Link>
                    </ul>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Dashboard