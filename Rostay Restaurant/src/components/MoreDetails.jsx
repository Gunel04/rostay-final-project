import React from 'react'
import { GiShoppingCart } from 'react-icons/gi';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { IoIosHeartEmpty } from 'react-icons/io';
import { PiEyeThin } from 'react-icons/pi';
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import slugify from 'slugify';

const MoreDetails = () => {
    const products = useSelector(p => p.product);
    const { title } = useParams();
    const singleProduct = products.find(item => slugify(item.title, { lower: true }) === title);
    console.log(singleProduct.category);
    return (
        <>
            <main>
                <div className="shop-top-part">
                    <h1 data-aos="zoom-in" data-aos-duration="2000">{singleProduct.title}</h1>
                    <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'>Home</Link> &gt; <span>Shop</span> </h6>
                </div>
                <section className="more-details-section container-fluid">
                    <div className="left-image-part">
                        <img src={singleProduct.image} alt="" />
                    </div>
                    <div className="right-info-part">
                        <h1 className='product-title'>{singleProduct.title}</h1>
                        <p className='price'>${singleProduct.price}</p>
                        <hr />
                        <p className="description">{singleProduct.description}</p>
                        <h4>Quantity:</h4>
                        <div className="btn-con">
                            <div className="quantity-btn">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <button className='add-to-cart-btn'>Add to Cart <HiOutlineArrowLongRight size={20} /></button>
                        </div>

                        <a href="#" className='add-wishlist'><IoIosHeartEmpty size={20} /> Add to Wishlist</a>
                        <hr />
                        <p className="category">Category: <span>{singleProduct.category}</span></p>
                    </div>
                </section>
                <section className="related-products-section container-fluid">
                    <h1>Related products</h1>
                    <div className="related-products">
                        <div className="row">
                            {products.map((item, index) => {
                                
                                if (item.category === singleProduct.category && item.title !== singleProduct.title) {
                                    return (
                                        <div className='col-12 col-sm-6 col-md-4 col-lg-3' key={item.id}>
                                            <div className="card" >
                                                <div className="product-image-con">
                                                    <img src={item.image} height={370} className="card-img-top" alt={item.title} />
                                                    <div className="hover-icons">
                                                        <a href="#"><GiShoppingCart size={25} /></a>
                                                        <a href="#"><IoIosHeartEmpty size={25} /></a>
                                                        <Link to={`/shop/${slugify(item.title, { lower: true })}`}><PiEyeThin size={25} /></Link>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <h6 className="card-category">{item.category}</h6>
                                                    <h5 className="card-title">{item.title}</h5>
                                                    <p className="card-text">{item.description.slice(0, 50)}...</p>
                                                    <p className="card-price">${item.price}</p>
                                                </div>

                                            </div>
                                        </div>
                                    )

                                }
                            })}
                            
                        </div>
                    </div>
                </section>
            </main>
            {/* <section>
                <div className="row">

                    
                </div>
            </section > */}
        </>
    )
}

export default MoreDetails