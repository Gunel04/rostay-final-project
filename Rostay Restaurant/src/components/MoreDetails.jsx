import { useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { PiEyeThin } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import slugify from "slugify";
import Swal from "sweetalert2";
import StaticLanguage from "../utils/StaticLanguage";
import SingleProduct from "./SingleProduct";

const MoreDetails = () => {
  const products = useSelector((p) => p.product);
  const { title } = useParams();
  const { addItem, items, updateItemQuantity, inCart } = useCart();
  const { inWishlist, addWishlistItem, removeWishlistItem } = useWishlist();
  const [counter, setCounter] = useState(1);
  const singleProduct = products.find(
    (item) => slugify(item.titleEn, { lower: true }) === title
  );
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  // const cartProduct = items.find(item => item.id === singleProduct.id);
  console.log(items);

  console.log(singleProduct.categoryEn);
  return (
    <>
      <StaticLanguage
        en={
          <>
            <div className="more-details-top-part">
              <h1 data-aos="zoom-in" data-aos-duration="2000">
                {singleProduct.titleEn}
              </h1>
              <h6 data-aos="zoom-in" data-aos-duration="2000">
                <Link to="/">Home</Link> &gt; <span>Shop</span>
              </h6>
            </div>
            <section className="more-details-section container-fluid" data-aos="fade-up" data-aos-duration="2000">
              <div className="left-image-part">
                <img src={singleProduct.image} alt={singleProduct.titleEn} />
              </div>
              <div className="right-info-part">
                <h1 className="product-title">{singleProduct.titleEn}</h1>
                <p className="price">${singleProduct.price}</p>
                <hr />
                <p className="description">{singleProduct.descriptionEn}</p>
                <h4>Quantity:</h4>
                <div className="btn-con">
                  <div className="quantity-btn">
                    <button onClick={() => { setCounter(counter => counter - 1) }}>-</button>
                    <span>{counter}</span>
                    <button onClick={() => { setCounter(counter => counter + 1) }}>+</button>
                  </div>
                  <button className="add-to-cart-btn" onClick={() => {
                    if (user) {
                      if (!inCart(singleProduct.id)) {
                        Swal.fire({
                          icon: "success",
                          title: "Product is added to the cart!"
                        });
                        addItem(singleProduct, counter);
                      }
                      else {
                        Swal.fire({
                          icon: "warning",
                          title: "Already in cart!"
                        })
                      }
                    }
                    else {
                      Swal.fire({
                        icon: "warning",
                        title: "Please sign in to your account!"
                      })
                    }
                  }} >
                    Add to Cart <HiOutlineArrowLongRight size={20} />
                  </button>
                </div>

                <button className="add-wishlist" onClick={() => {
                  if (user) {
                    if (!inWishlist(singleProduct.id)) {
                      addWishlistItem(singleProduct);
                    }
                    else {
                      removeWishlistItem(singleProduct.id);
                    }
                  }
                  else {
                    Swal.fire({
                      icon: "warning",
                      title: "Please sign in to your account!"
                    })
                  }
                }}>
                  {inWishlist(singleProduct.id) ? <IoIosHeart size={20} /> : <IoIosHeartEmpty size={20} />} Add to Wishlist
                </button>
                <hr />
                <p className="category">
                  Category: <span>{singleProduct.categoryEn}</span>
                </p>
              </div>
            </section>

            <section className="related-products-section container-fluid" data-aos="fade-up" data-aos-duration="2000">
              <h1>Related products</h1>
              <div className="related-products">
                <div className="row">
                  {products.filter(
                    (item) =>
                      item.categoryEn === singleProduct.categoryEn &&
                      item.titleEn !== singleProduct.titleEn
                  ).length > 0 ? (
                    products
                      .filter(
                        (item) =>
                          item.categoryEn === singleProduct.categoryEn &&
                          item.titleEn !== singleProduct.titleEn
                      )
                      .map((item, index) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                          <SingleProduct item={item} />
                        </div>
                      ))
                  ) : (<h4 className="text-center">No related products</h4>)}
                </div>
              </div>
            </section>
          </>
        }

        az={
          <>
            <div className="more-details-top-part">
              <h1 data-aos="zoom-in" data-aos-duration="2000">
                {singleProduct.titleAz}
              </h1>
              <h6 data-aos="zoom-in" data-aos-duration="2000">
                <Link to="/">Ana səhifə</Link> &gt; <span>Mağaza</span>
              </h6>
            </div>
            <section className="more-details-section container-fluid" data-aos="fade-up" data-aos-duration="2000">
              <div className="left-image-part">
                <img src={singleProduct.image} alt="" />
              </div>
              <div className="right-info-part">
                <h1 className="product-title">{singleProduct.titleAz}</h1>
                <p className="price">${singleProduct.price}</p>
                <hr />
                <p className="description">{singleProduct.descriptionAz}</p>
                <h4>Miqdar:</h4>
                <div className="btn-con">
                  <div className="quantity-btn">
                    <button onClick={() => { setCounter(counter => counter - 1) }}>-</button>
                    <span>{counter}</span>
                    <button onClick={() => { setCounter(counter => counter + 1) }}>+</button>
                  </div>
                  <button className="add-to-cart-btn" onClick={() => {
                    if (user) {
                      if (!inCart(singleProduct.id)) {
                        Swal.fire({
                          icon: "success",
                          title: "Məhsul səbətə əlavə edildi!"
                        });
                        addItem(singleProduct, counter);
                      }
                      else {
                        Swal.fire({
                          icon: "warning",
                          title: "Məhsul artıq səbətdədir!"
                        })
                      }
                    }
                    else {
                      Swal.fire({
                        icon: "warning",
                        title: "Zəhmət olmasa hesabınıza daxil olun!"
                      })
                    }


                  }} >
                    Səbətə Əlavə Et <HiOutlineArrowLongRight size={20} />
                  </button>
                </div>

                <button className="add-wishlist" onClick={() => {
                  if (user) {
                    if (!inWishlist(singleProduct.id)) {
                      addWishlistItem(singleProduct);
                    }
                    else {
                      removeWishlistItem(singleProduct.id);
                    }
                  }
                  else {
                    Swal.fire({
                      icon: "warning",
                      title: "Zəhmət olmasa hesabınıza daxil olun!"
                    })
                  }
                }}>
                  {inWishlist(singleProduct.id) ? <IoIosHeart size={20} /> : <IoIosHeartEmpty size={20} />} Siyahıya Əlavə Et
                </button>
                <hr />
                <p className="category">
                  Kateqoriya: <span>{singleProduct.categoryAz}</span>
                </p>
              </div>
            </section>


            <section className="related-products-section container-fluid" data-aos="fade-up" data-aos-duration="2000">
              <h1>Əlaqəlİ Məhsullar</h1>
              <div className="related-products">
                <div className="row">
                  {products.filter(
                    (item) =>
                      item.categoryEn === singleProduct.categoryEn &&
                      item.titleEn !== singleProduct.titleEn
                  ).length > 0 ? (
                    products
                      .filter(
                        (item) =>
                          item.categoryEn === singleProduct.categoryEn &&
                          item.titleEn !== singleProduct.titleEn
                      )
                      .map((item, index) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                          <SingleProduct item={item} />
                        </div>
                      ))
                  ) : (<h4 className="text-center">Əlaqəli məhsul yoxdur</h4>)}
                </div>
              </div>
            </section>
          </>
        }
      />
    </>
  );
};
export default MoreDetails;