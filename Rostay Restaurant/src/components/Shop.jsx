import React, { useState } from 'react'
import { GiShoppingCart } from 'react-icons/gi';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import { PiEyeThin } from 'react-icons/pi';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist';
import slugify from 'slugify';
import Swal from 'sweetalert2';

const Shop = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  const [filteredData, setFilteredData] = useState([]);
  const [active, setActive] = useState("");

  const categories = useSelector(p => p.category);
  const [products, setProducts] = useState(useSelector(p => p.product));

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);



  const { addItem, inCart, emptyCart } = useCart();
  const { addWishlistItem, inWishlist, removeWishlistItem } = useWishlist();

  const filterProducts = (category) => {
    const filteringProcess = products.filter(p => p.category === category);
    setFilteredData(filteringProcess);
    setActive(category);
  }

  const sortProducts = (sortingType) => {
    const sortedProducts = [...products];
    if (sortingType === 'price-asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    }
    else if (sortingType === 'price-desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    else if (sortingType === 'name-asc') {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    }
    else if (sortingType === 'name-desc') {
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    }
    setProducts(sortedProducts);

  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  console.log(currentProducts);

  const pageNumbers = [];
  
  for(let i=1; i<=Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <main>
        <div className="shop-top-part">
          <h1 data-aos="zoom-in" data-aos-duration="2000">Shop</h1>
          <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'>Home</Link> &gt; <span>Shop</span> </h6>
        </div>
        <section className='shop-section container-fluid d-flex'>
          <div className="left-filter-part" data-aos="fade-right" data-aos-duration='2000'>
            <div className="category-filter">
              <h4>Product Categories</h4>
              <ul>
                {categories.map((item, index) => (
                  <li key={index} className={`${active === item.categoryName ? "active-category" : ""}`} style={{ cursor: "pointer" }} onClick={() => { filterProducts(item.categoryName) }}>{item.categoryName} ({products.filter(p=>p.category === item.categoryName).length})</li>
                ))}
                <li style={{ color: "#f2b612", cursor: "pointer" }} onClick={() => { filterProducts() }}>All Products</li>
              </ul>
            </div>
            <hr />
            <div className="price-filter">
              <h4>Filter by Price</h4>
              <input type="range" name="vol" id="vol" min={0} max={100} className='range-input' />
              <input type="submit" className='submit-input' />
            </div>
          </div>
          <div className="right-products-part" >
            <select name="" id="" className='sorting-selection' onChange={e => sortProducts(e.target.value)}>
              <option value="sort-by">Sort By</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
            <div className="row g-4">

              {filteredData.length === 0 ? currentProducts.map((item) => (
                <div className='col-12 col-sm-6 col-md-6 col-lg-4' key={item.id} data-aos="fade-up" data-aos-duration="2000">
                  <div className="card" >
                    <div className="product-image-con">
                      <img src={item.image} height={370} className="card-img-top" alt={item.title} />
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
              )) : filteredData.map((item) => (
                <div className='col-12 col-sm-6 col-md-6 col-lg-4' key={item.id} data-aos="fade-up" data-aos-duration="2000">
                  <div className="card" >
                    <div className="product-image-con">
                      <img src={item.image} height={370} className="card-img-top" alt={item.title} />
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
            <div className="pagination-btn-con" data-aos="fade-up" data-aos-duration="2000">
              {pageNumbers.map((item,index)=>(
                <button className={`pagination-button m-2 ${item===currentPage?"active":""}`} key={index} onClick={()=>{setCurrentPage(item)}}>{item}</button>
              ))}
            </div>
          </div>

        </section>
      </main>
    </>
  )
}

export default Shop