import React, { useEffect, useState } from 'react'
import { CiHeart, CiMenuFries, CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci'
import { FaDiamond } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const pathname = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])
    return (
        <header>
            <div className="header-div container-fluid">
                <div className="rostay-icon">
                    <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/logo.svg" alt="" />
                </div>
                <div className="hamburger-menu" onClick={toggleMenu}><CiMenuFries /></div>
                <ul className={`nav-link-list ${menuOpen ? "active" : ""}`}>
                    <li className="nav-links"><Link to='/'>Home <FaDiamond size={6} style={{ color: "#f2b612" }} /></Link></li>
                    <li className="nav-links"><Link to='/about'>About us <FaDiamond size={6} style={{ color: "#f2b612" }} /></Link></li>
                    <li className="nav-links"><a href="#">Menu <FaDiamond size={6} style={{ color: "#f2b612" }} /></a></li>
                    <li className="nav-links"><a href="#">Shop <FaDiamond size={6} style={{ color: "#f2b612" }} /></a></li>
                    <li className="nav-links"><a href="#">Blog <FaDiamond size={6} style={{ color: "#f2b612" }} /></a></li>
                    <li className="nav-links"><a href="#">Contact <FaDiamond size={6} style={{ color: "#f2b612" }} /></a></li>
                </ul>
                <ul className={`icon-part-list ${menuOpen ? "active" : ""}`}>
                    <li className="icon-items"><a href="#"><CiSearch /></a></li>
                    <li className="icon-items"><Link to='/login'><CiUser /> <div className='account'><span>Sign in</span> <span>Account</span></div> </Link></li>
                    <li className="icon-items"><a href="#"><CiHeart /></a></li>
                    <li className="icon-items"><a href="#"><CiShoppingCart /></a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header