import React from 'react'
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { IoIosHeartEmpty } from 'react-icons/io';
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
            {/* {singleProduct.map((item, index) => ( */}
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
            </main>
            {/* ))} */}
            <section>
                <div className="row">

                    {products.map((item, index) => {
                        if (item.category === singleProduct.category && item.title !== singleProduct.title) {
                            return (
                                <div className='col-12 col-sm-6 col-md-4 col-lg-4' key={item.id}>
                                    <div className="card">
                                        <img src={item.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )

                        }


                    })}
                </div>
            </section >
        </>
    )
}

export default MoreDetails