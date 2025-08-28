import { Select } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import { Button, Form, InputGroup, ListGroup, Modal } from 'react-bootstrap';
import { CiHeart, CiMenuFries, CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci'
import { FaDiamond } from 'react-icons/fa6'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist';
import slugify from 'slugify';
import Swal from 'sweetalert2';
import { LanguageContext } from '../context/LanguageContext';
import StaticLanguage from '../utils/StaticLanguage';

const Header = () => {
    const [language, setLanguage] = useContext(LanguageContext);
    console.log(language);

    const products = useSelector(p => p.product);
    console.log(products);
    const [searchKey, setSearchKey] = useState("");

    const [menuOpen, setMenuOpen] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const pathname = useLocation();
    console.log(pathname);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    const { totalUniqueItems } = useCart();
    const { totalWishlistItems } = useWishlist();

    const { emptyCart } = useCart();
    const { emptyWishlist } = useWishlist();
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
                emptyCart();
                emptyWishlist();
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
                    <li className="nav-links">
                        <Link to='/'>
                            <StaticLanguage az="Ana səhİfə" en="Home" /><FaDiamond size={6} style={{ color: "#f2b612" }} />
                        </Link>
                    </li>
                    <li className="nav-links">
                        <Link to='/about'>
                            <StaticLanguage en="About Us" az="Haqqımızda" /> <FaDiamond size={6} style={{ color: "#f2b612" }} />
                        </Link>
                    </li>
                    <li className="nav-links">
                        <Link to='/shop'>
                            <StaticLanguage en="Shop" az="Mağaza" /> <FaDiamond size={6} style={{ color: "#f2b612" }} />
                        </Link>
                    </li>
                    <li className="nav-links">
                        <Link to='/blog'>
                            <StaticLanguage en="Blog" az="Bloq" /> <FaDiamond size={6} style={{ color: "#f2b612" }} />
                        </Link>
                    </li>
                    <li className="nav-links">
                        <Link>
                            <StaticLanguage en="Contact" az="Əlaqə" /> <FaDiamond size={6} style={{ color: "#f2b612" }} />
                        </Link>
                        <ul className='dropdown'>
                            <li className='dropdown-items'>
                                <Link to='/contactus'>
                                    <FaDiamond size={6} style={{ color: "#f2b612", marginRight: "5px" }} /> <StaticLanguage en="Contact Us" az="Bİzİmlə Əlaqə" />
                                </Link>
                            </li>
                            <li className='dropdown-items'>
                                <Link to='/reservation'>
                                    <FaDiamond size={6} style={{ color: "#f2b612", marginRight: "5px" }} /> <StaticLanguage en="Reservation" az="Rezervasİya" /></Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className={`icon-part-list ${menuOpen ? "active" : ""}`}>
                    <li className="icon-items">
                        <Button onClick={handleShow} className='search-icon'>
                            <CiSearch size={25} />
                        </Button>

                        <Modal show={show} onHide={handleClose} className='search-modal'>
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    <StaticLanguage en="Search Product" az="Məhsul Axtarışı" />
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="Search products..."
                                        aria-describedby="basic-addon2"
                                        onChange={e => setSearchKey(e.target.value)}
                                    />
                                </InputGroup>
                                <ListGroup>
                                    {!searchKey ? "" : products.filter(p => p.titleEn.toLocaleLowerCase().includes(searchKey)).map((item, index) => (
                                        <span key={index} onClick={handleClose}><Link to={`/shop/${slugify(item.titleEn, { lower: true })}`} style={{ textDecoration: "none" }} >
                                            <ListGroup.Item > <img src={item.image} alt={item.titleEn} width={60} /> {item.titleEn}</ListGroup.Item>
                                        </Link></span>
                                    ))}

                                </ListGroup>
                            </Modal.Body>
                        </Modal>
                    </li>
                    <li className="icon-items">
                        {user ? <Link><CiUser /> <div className='account'><span>{user.username}</span> <span onClick={logOut}><StaticLanguage az="Çıxış" en="Log Out" /></span></div> </Link> : <Link to='/login'><CiUser /> <div className='account'><span><StaticLanguage az="Daxil ol" en="Sign in" /></span> <span><StaticLanguage az="Hesabım" en="Account" /></span></div> </Link>}
                    </li>
                    <li className="icon-items"><Link to='/wishlist' className="position-relative">
                        <CiHeart />
                        <span className="badge-icon position-absolute top-0 start-100 translate-middle badge rounded-pill">
                            {totalWishlistItems}
                        </span>
                    </Link></li>
                    <li className="icon-items"><Link to='cart' className="position-relative">
                        <CiShoppingCart />
                        <span className="badge-icon position-absolute top-0 start-100 translate-middle badge rounded-pill">
                            {totalUniqueItems}
                        </span>
                    </Link></li>
                    <li>
                        <Select
                            defaultValue={language}
                            style={{ width: 60 }}
                            options={[
                                { value: 'en', label: 'EN' },
                                { value: 'az', label: 'AZ' },
                            ]}
                            onChange={() => {
                                language === "AZ" ? setLanguage("EN") : setLanguage("AZ");
                                language === "AZ" ? localStorage.setItem('language', "EN") : localStorage.setItem('language', "AZ");
                            }}
                        />
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header