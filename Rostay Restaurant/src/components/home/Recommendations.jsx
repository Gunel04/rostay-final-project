import React, { useState } from 'react'
import { GiShoppingCart } from 'react-icons/gi';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import { PiEyeThin } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist';
import slugify from 'slugify';
import Swal from 'sweetalert2';
import StaticLanguage from '../../utils/StaticLanguage';

const Recommendations = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  const products = useSelector(p => p.product);

  const { addItem, inCart, emptyCart } = useCart();
  const { addWishlistItem, inWishlist, removeWishlistItem } = useWishlist();

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
    <section className="recommendations-section container-fluid">
      <div className="recommendations-heading" data-aos='fade-up' data-aos-duration='2000'>
        <h5>
          <StaticLanguage en="Recommendations" az="Tövsiyələr"/>
        </h5>
        <h1>
          <StaticLanguage en="Best Speacialties" az="Seçilmiş təamlar"/>
        </h1>
      </div>
      <div className="recommend-products">
        <StaticLanguage
          en={
            <Slider {...settings}>
              {products.slice(0, 6).map((item, index) => (
                <div className='col-12 col-sm-6 col-md-6 col-lg-4' key={index} data-aos="fade-up" data-aos-duration="2000">
                  <div className="card" >
                    <div className="product-image-con">
                      <img src={item.image} height={370} className="card-img-top" alt={item.titleEn} />
                      <div className="hover-icons">
                        <button onClick={() => {
                          if (user) {
                            if (!inCart(item.id)) {
                              Swal.fire({
                                icon: "success",
                                title: "Product is added to cart!"
                              });
                              addItem(item)
                            }
                            else {
                              Swal.fire({
                                icon: "warning",
                                title: "Already in cart!"
                              })
                            }
                          }
                          else {
                            emptyCart();
                            Swal.fire({
                              icon: "warning",
                              title: "Please sign in to your account!"
                            })
                          }

                        }}><GiShoppingCart size={25} /></button>
                        <button onClick={() => {
                          if (user) {
                            if (!inWishlist(item.id)) {
                              addWishlistItem(item);
                            }
                            else {
                              removeWishlistItem(item.id);
                            }
                          }
                          else {
                            Swal.fire({
                              icon: "warning",
                              title: "Please sign in to your account!"
                            })
                          }

                        }}>{inWishlist(item.id) ? <IoIosHeart size={25} /> : <IoIosHeartEmpty size={25} />}</button>
                        <Link to={`/shop/${slugify(item.titleEn, { lower: true })}`}><PiEyeThin size={25} /></Link>
                      </div>
                    </div>
                    <div className="card-body">
                      <h6 className="card-category">{item.categoryEn}</h6>
                      <h5 className="card-title">{item.titleEn}</h5>
                      <p className="card-text">{item.descriptionEn.slice(0, 50)}...</p>
                      <p className="card-price">${item.price}</p>
                    </div>

                  </div>

                </div>
              ))}
            </Slider>}
          az={
            <Slider {...settings}>
              {products.slice(0, 6).map((item, index) => (
                <div className='col-12 col-sm-6 col-md-6 col-lg-4' key={index} data-aos="fade-up" data-aos-duration="2000">
                  <div className="card" >
                    <div className="product-image-con">
                      <img src={item.image} height={370} className="card-img-top" alt={item.titleAz} />
                      <div className="hover-icons">
                        <button onClick={() => {
                          if (user) {
                            if (!inCart(item.id)) {
                              Swal.fire({
                                icon: "success",
                                title: "Product is added to cart!"
                              });
                              addItem(item)
                            }
                            else {
                              Swal.fire({
                                icon: "warning",
                                title: "Already in cart!"
                              })
                            }
                          }
                          else {
                            emptyCart();
                            Swal.fire({
                              icon: "warning",
                              title: "Please sign in to your account!"
                            })
                          }

                        }}><GiShoppingCart size={25} /></button>
                        <button onClick={() => {
                          if (user) {
                            if (!inWishlist(item.id)) {
                              addWishlistItem(item);
                            }
                            else {
                              removeWishlistItem(item.id);
                            }
                          }
                          else {
                            Swal.fire({
                              icon: "warning",
                              title: "Please sign in to your account!"
                            })
                          }

                        }}>{inWishlist(item.id) ? <IoIosHeart size={25} /> : <IoIosHeartEmpty size={25} />}</button>
                        <Link to={`/shop/${slugify(item.titleAz, { lower: true })}`}><PiEyeThin size={25} /></Link>
                      </div>
                    </div>
                    <div className="card-body">
                      <h6 className="card-category">{item.categoryAz}</h6>
                      <h5 className="card-title">{item.titleAz}</h5>
                      <p className="card-text">{item.descriptionAz.slice(0, 50)}...</p>
                      <p className="card-price">${item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          }
        />

      </div>
    </section>
  )
}

export default Recommendations
