import Aos from 'aos';
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import StaticLanguage from '../utils/StaticLanguage';

const Footer = (props) => {
  console.log(props.mode);
  
  Aos.init();
  return (
    <footer className='container-fluid'>
      <div className="first-footer" data-aos="fade-up" data-aos-duration="1500">
        <img className='plate' src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/footer-burger.png" alt="" />
        <div className="first-footer-right">
          {props.mode === "light" ? <img src="src/assets/lightmodelogo.png" alt="" /> : <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/logo.svg" alt="" />}
          <p><StaticLanguage en="Delicios Restaurant & Fine dining, 71 Madison Ave, New York, USA" az="Delicios Restoranı – Zərif Yeməklər, 71 Madison Ave, New York, ABŞ" /></p>
          <p> <StaticLanguage en="Need help? Call us:" az="Köməyə ehtiyacınız var? Zəng edin:" /><span>+4800 567 8900</span></p>
          <p>support@example.com</p>
        </div>
      </div>
      <hr />
      <div className="second-footer" data-aos="fade-up" data-aos-duration="1500">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-4">
            <h4>
              <StaticLanguage en="Useful links" az="Faydalı linklər" />
            </h4>
            <ul>
              <li>
                <a href="#">
                  <StaticLanguage en="Favorite Places" az="Sevimli Məkanlar" />
                </a>
              </li>
              <li>
                <a href="#">
                  <StaticLanguage en="Our History" az="Tariximiz" />
                </a>
              </li>
              <li>
                <a href="#">
                  <StaticLanguage en="Contact Us" az="Bizimlə Əlaqə" />
                </a>
              </li>
              <li>
                <a href="#">
                  <StaticLanguage en="Places To Get Lost" az="Kəşf Ediləcək Yerlər" />
                </a>
              </li>
              <li>
                <a href="#">
                  <StaticLanguage en="Our Brand" az="Brendimiz" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4">
            <h4>
              <StaticLanguage en="Favorite Picks" az="Sevimli Seçimlər" />
            </h4>
            <ul>
              <li>
                <a href="#">
                  <StaticLanguage en="Coffee Latte" az="Kofe Latte" />
                </a>
              </li>
              <li>
                <a href="#">
                  <StaticLanguage en="Esspresso" az="Espresso" />

                </a>
              </li>
              <li>
                <a href="#">
                  <StaticLanguage en="Coffee Americano" az="Kofe Americano" />

                </a>
              </li>
              <li>
                <a href="#">
                  <StaticLanguage en="Ice Coffee" az="Soyuq Kofe" />
                </a>
              </li>
              <li>
                <a href="#">Mocha</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4">
            <h4>
              <StaticLanguage en="Get News & Offers" az="Xəbərlər & Təkliflər" />
            </h4>
            <p><StaticLanguage en="Subscribe & get" az="Abunə olun və" /> <span>10%</span> <StaticLanguage en="discount. Get E-mail updates about our latest shop and " az="endirim qazanın. Ən son məhsullarımız və " /><span><StaticLanguage en="speacial offers" az="xüsusi təkliflər " />
            </span><StaticLanguage en="" az="haqqında e-poçt yenilikləri alın" />.
              <StaticLanguage />
            </p>
            <StaticLanguage en={<input type="text" placeholder='Your Email' />} az={<input type="text" placeholder='Email Ünvanın' />} />

            <button className='footer-subscribe-btn'><StaticLanguage en="Subscribe" az="Abunə ol" /> <HiOutlineArrowLongRight size={20} /></button>
          </div>
        </div>
      </div>
      <hr />
      <div className="third-footer" >
        <ul className="icon-div">
          <li><a href="#"><FaFacebookF /></a></li>
          <li><a href="#"><FaXTwitter /></a></li>
          <li><a href="#"><FaLinkedinIn /></a></li>
          <li><a href="#"><FaInstagram /></a></li>
        </ul>
        <div className="rights-reserved">
          <p>© Copyright {new Date().getFullYear()} <a href="#">Rostay</a>. <StaticLanguage en="All rights reserved." az="Bütün hüquqlar qorunur." /></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;