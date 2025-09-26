import { useEffect, useState } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import slugify from "slugify";
import Swal from "sweetalert2";
import StaticLanguage from "../utils/StaticLanguage";
import SingleProduct from "./SingleProduct";

const MoreDetails = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  const products = useSelector((p) => p.product);
  const { title } = useParams();
  const { addItem, items, inCart } = useCart();
  const { inWishlist, addWishlistItem, removeWishlistItem } = useWishlist();
  const [counter, setCounter] = useState(1);

  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState("");


  const singleProduct = products.find(
    (item) => slugify(item.titleEn, { lower: true }) === title
  );

  useEffect(() => {
    const storedReviews = localStorage.getItem(`review-${singleProduct.id}`);

    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, [singleProduct.id])

  const handleReview = (e) => {
    e.preventDefault();

    if (user) {
      const newReview = {
        user: user.username || "Guest",
        date: new Date().toLocaleString(),
        comment
      }

      const updatedReviews = [...reviews, newReview];
      setReviews(updatedReviews);

      localStorage.setItem(`review-${singleProduct.id}`, JSON.stringify(updatedReviews));

      setComment("");
    }
    else {
      Swal.fire({
        icon: "warning",
        title: "Please sign in to leave review for products!"
      })
    }

  }



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

            <section className="review-section container-fluid">
              <h1>Reviews</h1>
              <ul className="review-list">
                {reviews.length === 0 ? <p>No reviews yet!</p> :
                  reviews.map((item, index) => (
                    <li key={index}>
                      <h4>{item.user}</h4>
                      <p className="review-date">{item.date}</p>
                      <p className="review-comment">{item.comment}</p>
                      <hr />
                    </li>
                  ))
                }
              </ul>
              <div className="review-form-con">
                <h4>Add a Review for Product</h4>
                <form action="" className="review-form" onSubmit={handleReview}>
                  <textarea name="" id="" placeholder="Comment..." value={comment} onChange={e => { setComment(e.target.value) }}></textarea>
                  <button className="submit-review-btn" type="submit">Submit Review <HiOutlineArrowLongRight size={20} /></button>
                </form>
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

            <section className="review-section container-fluid">
              <h1>Rəylər</h1>
              <ul className="review-list">
                {reviews.length === 0 ? <li>Hələ rəy yoxdur!</li> :
                  reviews.map((item, index) => (
                    <li key={index}>
                      <h4>{item.user}</h4>
                      <p className="review-date">{item.date}</p>
                      <p className="review-comment">{item.comment}</p>
                      <hr />
                    </li>

                  ))
                }
              </ul>
              <div className="review-form-con">
                <h4>Məhsul üçün rəy əlavə edin</h4>
                <form action="" className="review-form" onSubmit={handleReview}>
                  <textarea name="" id="" placeholder="Rəyiniz..." value={comment} onChange={e => { setComment(e.target.value) }}></textarea>
                  <button type="submit">Rəyi göndər <HiOutlineArrowLongRight size={20} /></button>
                </form>
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