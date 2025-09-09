import React from 'react'
import Slider from 'react-slick'
import SingleProduct from './SingleProduct'
import { useSelector } from 'react-redux'
import StaticLanguage from '../utils/StaticLanguage'
import { Link } from 'react-router-dom'

const SuccessfulCheckout = () => {
  const products = useSelector(p => p.product);

  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <main>
      <div className="cart-wishlist-checkout-top-part">
        <h1 data-aos="zoom-in" data-aos-duration="2000"><StaticLanguage en="Checkout" az="Sİfarİş" /></h1>
        <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'><StaticLanguage en="Home" az="Ana səhİfə" /></Link> &gt; <span><StaticLanguage en="Checkout" az="Sİfarİş" /></span> </h6>
      </div>
      <div className="success-alert container-fluid">
        <h1>
          <StaticLanguage en="Congratulations!!! Your order has been placed successfully!!!" az="Təbriklər!!! Sifarişiniz uğurla tamamlandı!!!"/>
        </h1>
        {/* <img src="https://i.pinimg.com/originals/4a/10/e3/4a10e39ee8325a06daf00881ac321b2f.gif" alt="" /> */}
      </div>
      <div className="recommended-products-part container-fluid">
        <h1>
          <StaticLanguage en="Recommended products" az="Tövsİyə olunan məhsullar"/>
        </h1>
        <div className="recommended-products">
          <Slider {...settings}>
            {products.slice(0, 6).map((item, index) => (
              <div className='col-12 col-sm-6 col-md-6 col-lg-4' key={index} data-aos="fade-up" data-aos-duration="2000">
                <SingleProduct item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </main>
  )
}

export default SuccessfulCheckout
