import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

const Footer = () => {
  return (
    <footer className='container-fluid'>
      <div className="first-footer">
        <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/footer-burger.png" alt="" />
        <div className="first-footer-right">
          <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/logo.svg" alt="" />
          <p>Delicios Restaurant & Fine dining, 71 Madison Ave, New York, USA</p>
          <p>Need help? Call us <span>+4800 567 8900</span></p>
          <p>support@example.com</p>
        </div>
      </div>
      <hr />
      <div className="second-footer">
        <div className="row">
          <div className="col">
            <h4>Useful links</h4>
            <ul>
              <li><a href="#">Favorite Place</a></li>
              <li><a href="#">Our History</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Places To Get Lost</a></li>
              <li><a href="#">Our Brand</a></li>
            </ul>
          </div>
          <div className="col">
            <h4>Favorite Picks</h4>
            <ul>
              <li><a href="#">Coffee Latte</a></li>
              <li><a href="#">Esspresso</a></li>
              <li><a href="#">Coffee Americano</a></li>
              <li><a href="#">Ice Coffee</a></li>
              <li><a href="#">Mocha</a></li>
            </ul>
          </div>
          <div className="col">
            <h4>Get News & Offers</h4>
            <p>Subscribe & get <span>10%</span> discount. Get E-mail updates about our latest shop and <span>special offers</span>.</p>
            <input type="text" placeholder='Your Email' />
            <button>Subscribe <HiOutlineArrowLongRight size={20} /></button>
          </div>
        </div>
      </div>
      <hr />
      <div className="third-footer">
        <ul className="icon-div">
          <li><a href="#"><FaFacebookF /></a></li>
          <li><a href="#"><FaXTwitter /></a></li>
          <li><a href="#"><FaLinkedinIn /></a></li>
          <li><a href="#"><FaInstagram /></a></li>
        </ul>
        <div className="rights-reserved">
          <p>© Copyright {new Date().getFullYear()} <a href="#">Rostay</a>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;