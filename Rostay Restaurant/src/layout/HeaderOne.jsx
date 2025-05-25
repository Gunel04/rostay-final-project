import React from 'react'
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci'

const HeaderOne = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg header-div">
                <div className="container-fluid d-flex justify-content-between align-items-center inner-header-div">
                    <a className="navbar-brand" href="#">
                        <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/logo.svg" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse lists-part" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-link-list">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Contact Us
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a  href="#">Reservation (Open Table)</a></li>
                                    <li><a  href="#">Reservation (Contact Form)</a></li>
                                    
                                </ul>
                            </li>
                            
                        </ul>
                        <ul className={`icon-part-list`}>
                            <li className="icon-items"><a href="#"><CiSearch /></a></li>
                            <li className="icon-items"><a href="#"><CiUser /></a></li>
                            <li className="icon-items"><a href="#"><CiHeart /></a></li>
                            <li className="icon-items"><a href="#"><CiShoppingCart /></a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default HeaderOne