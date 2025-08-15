import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiEyeThin } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import slugify from "slugify";
import Swal from "sweetalert2";

const MoreDetails = () => {
  const products = useSelector((p) => p.product);
  const { title } = useParams();
  const { addItem, items, updateItemQuantity } = useCart();
  const singleProduct = products.find(
    (item) => slugify(item.title, { lower: true }) === title
  );
  const cartProduct = items.find(item => item.id === singleProduct.id);
  console.log(items);

  console.log(singleProduct.category);
  return (
    <>
      <main>
        <div className="more-details-top-part">
          <h1 data-aos="zoom-in" data-aos-duration="2000">
            {singleProduct.title}
          </h1>
          <h6 data-aos="zoom-in" data-aos-duration="2000">
            <Link to="/">Home</Link> &gt; <span>Shop</span>
          </h6>
        </div>
        <section className="more-details-section container-fluid" data-aos="fade-up" data-aos-duration="2000">
          <div className="left-image-part">
            <img src={singleProduct.image} alt="" />
          </div>
          <div className="right-info-part">
            <h1 className="product-title">{singleProduct.title}</h1>
            <p className="price">${singleProduct.price}</p>
            <hr />
            <p className="description">{singleProduct.description}</p>
            <h4>Quantity:</h4>
            <div className="btn-con">
              <div className="quantity-btn">
                <button onClick={() => updateItemQuantity(cartProduct.id, (cartProduct.quantity ?? 0) - 1)}>-</button>
                <span>{cartProduct.quantity}</span>
                <button onClick={() => updateItemQuantity(cartProduct.id, (cartProduct.quantity ?? 0) + 1)}>+</button>
              </div>
              <button className="add-to-cart-btn" onClick={() => {
                Swal.fire({
                  icon: "success",
                  title: "Product is add to the cart!"
                });
                addItem(singleProduct);
              }} >
                Add to Cart <HiOutlineArrowLongRight size={20} />
              </button>
            </div>

            <a href="#" className="add-wishlist">
              <IoIosHeartEmpty size={20} /> Add to Wishlist
            </a>
            <hr />
            <p className="category">
              Category: <span>{singleProduct.category}</span>
            </p>
          </div>
        </section>
        <section className="related-products-section container-fluid" data-aos="fade-up" data-aos-duration="2000">
          <h1>Related products</h1>
          <div className="related-products">
            <div className="row">
              {products.filter(
                (item) =>
                  item.category === singleProduct.category &&
                  item.title !== singleProduct.title
              ).length > 0 ? (
                products
                  .filter(
                    (item) =>
                      item.category === singleProduct.category &&
                      item.title !== singleProduct.title
                  )
                  .map((item, index) => (
                    <div
                      className="col-12 col-sm-6 col-md-4 col-lg-3"
                      key={item.id}
                    >
                      <div className="card">
                        <div className="product-image-con">
                          <img
                            src={item.image}
                            height={370}
                            className="card-img-top"
                            alt={item.title}
                          />
                          <div className="hover-icons">
                            <a href="#">
                              <GiShoppingCart size={25} />
                            </a>
                            <a href="#">
                              <IoIosHeartEmpty size={25} />
                            </a>
                            <Link
                              to={`/shop/${slugify(item.title, {
                                lower: true,
                              })}`}
                            >
                              <PiEyeThin size={25} />
                            </Link>
                          </div>
                        </div>
                        <div className="card-body">
                          <h6 className="card-category">{item.category}</h6>
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text">
                            {item.description.slice(0, 50)}...
                          </p>
                          <p className="card-price">${item.price}</p>
                        </div>
                      </div>
                    </div>
                  ))
              ) : (
                <h4 className="text-center">No related products</h4>
              )}
              {/* {products.map((item, index) => {
                                
                                if (item.category === singleProduct.category && item.title !== singleProduct.title) {
                                    return (
                                        
                                    )

                                }
                                else {
                                    return (
                                        <h1>No related products</h1>
                                    )
                                }
                            })}
                             */}
            </div>
          </div>
        </section>
      </main>
      {/* <section>
                <div className="row">

                    
                </div>
            </section > */}
    </>
  );
};

export default MoreDetails;
