import React, { useEffect, useState } from 'react'
import { CiHeart, CiMenuFries, CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci'
import { FaDiamond } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const pathname = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])


    // const user = JSON.parse(localStorage.getItem('user'))

    const logOut = () => {
        Swal.fire({
            title: "Are you sure that you want to log out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#072b31",
            cancelButtonColor: "#072b31",
            confirmButtonText: "Yes, log out!"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('user')
                setUser(null);
                Swal.fire({
                    title: "Logged Out!",
                    icon: "success"
                });
            }
        });
    }
    return (
        <header>
            <div className="header-div container-fluid">
                <div className="rostay-icon">
                    <Link to='/'>
                        <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/logo.svg" alt="" />
                    </Link>
                </div>
                <div className="hamburger-menu" onClick={toggleMenu}><CiMenuFries /></div>
                <ul className={`nav-link-list ${menuOpen ? "active" : ""}`}>
                    <li className="nav-links"><Link to='/'>Home <FaDiamond size={6} style={{ color: "#f2b612" }} /></Link></li>
                    <li className="nav-links"><Link to='/about'>About us <FaDiamond size={6} style={{ color: "#f2b612" }} /></Link></li>
                    <li className="nav-links"><a href="#">Menu <FaDiamond size={6} style={{ color: "#f2b612" }} /></a></li>
                    <li className="nav-links"><Link to='/shop'>Shop <FaDiamond size={6} style={{ color: "#f2b612" }} /></Link></li>
                    <li className="nav-links"><a href="#">Blog <FaDiamond size={6} style={{ color: "#f2b612" }} /></a></li>
                    <li className="nav-links">
                        <a href="#">Contact <FaDiamond size={6} style={{ color: "#f2b612" }} /></a>
                        <ul className='dropdown'>
                            <li className='dropdown-items'><Link to='/contactus'><FaDiamond size={6} style={{ color: "#f2b612", marginRight: "5px" }} /> Contact Us</Link></li>
                            <li className='dropdown-items'><Link to='/reservation'><FaDiamond size={6} style={{ color: "#f2b612", marginRight: "5px" }} /> Reservation</Link></li>
                        </ul>
                    </li>
                </ul>
                <ul className={`icon-part-list ${menuOpen ? "active" : ""}`}>
                    <li className="icon-items"><a href="#"><CiSearch /></a></li>
                    <li className="icon-items">{user ? <Link><CiUser /> <div className='account'><span>{user.username}</span> <span onClick={logOut}>Log Out</span></div> </Link> : <Link to='/login'><CiUser /> <div className='account'><span>Sign in</span> <span>Account</span></div> </Link>}</li>
                    <li className="icon-items"><Link to='/wishlist' className="position-relative">
                        <CiHeart />
                        <span className="badge-icon position-absolute top-0 start-100 translate-middle badge rounded-pill">
                            0
                            {/* <span class="visually-hidden">unread messages</span> */}
                        </span>
                    </Link></li>
                    <li className="icon-items"><Link to='cart' className="position-relative">
                        <CiShoppingCart />
                        <span className="badge-icon position-absolute top-0 start-100 translate-middle badge rounded-pill">
                            0
                            {/* <span class="visually-hidden">unread messages</span> */}
                        </span>
                    </Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header