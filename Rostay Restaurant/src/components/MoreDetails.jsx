import React from 'react'
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { IoIosHeartEmpty } from 'react-icons/io';
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import slugify from 'slugify';

const MoreDetails = () => {
    const products = useSelector(p => p.product);
    const { title } = useParams();
    const singleProduct = products.filter(item => slugify(item.title, { lower: true }) === title);
    console.log(singleProduct);
    return (
        <>
            {singleProduct.map((item, index) => (
                <main>
                    <div className="shop-top-part">
                        <h1 data-aos="zoom-in" data-aos-duration="2000">{item.title}</h1>
                        <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'>Home</Link> &gt; <span>Shop</span> </h6>
                    </div>
                    <section className="more-details-section container-fluid">
                        <div className="left-image-part">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="right-info-part">
                            <h2>{item.title}</h2>
                            <p className='price'>${item.price}</p>
                            <hr />
                            <p className="description">{item.description}</p>
                            <h4>Quantity:</h4>
                            <div className="quantity-btn">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <button>Add to Cart <HiOutlineArrowLongRight size={20} /></button>
                            <a href="#"><IoIosHeartEmpty size={25} /> Add to Wishlist</a>
                            <hr />
                            <div className="category">Category: {item.category}</div>
                        </div>
                    </section>
                </main>
            ))}
        </>
    )
}

export default MoreDetails