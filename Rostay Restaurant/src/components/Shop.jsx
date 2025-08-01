import React from 'react'
import { GiShoppingCart } from 'react-icons/gi';
import { IoIosHeartEmpty } from 'react-icons/io';
import { PiEyeThin } from 'react-icons/pi';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import slugify from 'slugify';

const Shop = () => {
  const categories = useSelector(p => p.category);
  const products = useSelector(p => p.product);

  return (
    <>
      <main>
        <div className="shop-top-part">
          <h1 data-aos="zoom-in" data-aos-duration="2000">Shop</h1>
          <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'>Home</Link> &gt; <span>Shop</span> </h6>
        </div>
        <section className='shop-section container-fluid d-flex'>
          {/* <div className="col-3"> */}
            <div className="left-filter-part">
              <div className="category-filter">
                <h4>Product Categories</h4>
                <ul>
                  {categories.map((item, index) => (
                    <li key={index}>{item.categoryName}</li>
                  ))}
                </ul>
              </div>
              <hr />
              <div className="price-filter">
                <h4>Filter by Price</h4>
                <input type="range" name="vol" id="vol" min={0} max={100} className='range-input' />
                <input type="submit" className='submit-input' />
              </div>
            </div>
          {/* </div>
          <div className="col-9"> */}
            <div className="right-products-part">
              <div className="row g-4">
                {products.map((item) => (
                  <div className='col-12 col-sm-6 col-md-6 col-lg-4' key={item.id}>
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
                ))}
              </div>
            </div>
          {/* </div> */}
        </section>
      </main>
    </>
  )
}

export default Shop