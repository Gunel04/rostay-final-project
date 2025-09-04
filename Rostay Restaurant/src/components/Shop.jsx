import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import StaticLanguage from '../utils/StaticLanguage';

const Shop = () => {

  const [filteredData, setFilteredData] = useState([]);
  const [active, setActive] = useState("");

  const categories = useSelector(p => p.category);
  const [products, setProducts] = useState(useSelector(p => p.product));

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const filterProductsEn = (category) => {
    const filteringProcess = products.filter(p => p.categoryEn === category);
    setFilteredData(filteringProcess);
    setActive(category);
  }

  const filterProductsAz = (category) => {
    const filteringProcess = products.filter(p => p.categoryAz === category);
    setFilteredData(filteringProcess);
    setActive(category);
  }

  const sortProductsEn = (sortingType) => {
    const sortedProducts = [...products];
    if (sortingType === 'price-asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    }
    else if (sortingType === 'price-desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    else if (sortingType === 'name-asc') {
      sortedProducts.sort((a, b) => a.titleEn.localeCompare(b.titleEn));
    }
    else if (sortingType === 'name-desc') {
      sortedProducts.sort((a, b) => b.titleEn.localeCompare(a.titleEn));
    }
    setProducts(sortedProducts);
  }

  const sortProductsAz = (sortingType) => {
    const sortedProducts = [...products];
    if (sortingType === 'price-asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    }
    else if (sortingType === 'price-desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    else if (sortingType === 'name-asc') {
      sortedProducts.sort((a, b) => a.titleAz.localeCompare(b.titleAz));
    }
    else if (sortingType === 'name-desc') {
      sortedProducts.sort((a, b) => b.titleAz.localeCompare(a.titleAz));
    }
    setProducts(sortedProducts);
  }


  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {/* <main> */}
        <div className="shop-top-part">
          <h1 data-aos="zoom-in" data-aos-duration="2000"><StaticLanguage en="Shop" az="Mağaza" /></h1>
          <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'><StaticLanguage en="Home" az="Ana səhİfə" /></Link> &gt; <span><StaticLanguage en="Shop" az="Mağaza" /></span> </h6>
        </div>
        <section className='shop-section container-fluid d-flex'>
          <div className="left-filter-part" data-aos="fade-right" data-aos-duration='2000'>
            <div className="category-filter">
              <h4>
                <StaticLanguage en="Product Categories" az="Məhsul kateqoriyaları"/>
              </h4>
              <StaticLanguage
                en={
                  <ul>
                    {categories.map((item, index) => (
                      <li key={index} className={`${active === item.categoryNameEn ? "active-category" : ""}`} style={{ cursor: "pointer" }} onClick={() => { filterProductsEn(item.categoryNameEn) }}>{item.categoryNameEn} ({products.filter(p => p.categoryEn === item.categoryNameEn).length})</li>
                    ))}
                    <li style={{ color: "#f2b612", cursor: "pointer" }} onClick={() => { filterProductsEn() }}>All Products</li>
                  </ul>
                }
                az={
                  <ul>
                    {categories.map((item, index) => (
                      <li key={index} className={`${active === item.categoryNameAz ? "active-category" : ""}`} style={{ cursor: "pointer" }} onClick={() => { filterProductsAz(item.categoryNameAz) }}>{item.categoryNameAz} ({products.filter(p => p.categoryAz === item.categoryNameAz).length})</li>
                    ))}
                    <li style={{ color: "#f2b612", cursor: "pointer" }} onClick={() => { filterProductsAz() }}>Bütün məhsullar</li>
                  </ul>
                }
              />
            </div>
            <hr />
            <div className="price-filter">
              <h4>
                <StaticLanguage en="Filter by Price" az="Qiymətə görə çeşidlə"/>
              </h4>
              <input type="range" name="vol" id="vol" min={0} max={100} className='range-input' />
              <input type="submit" className='submit-input' />
            </div>
          </div>
          <div className="right-products-part" >
            <StaticLanguage
              en={
                <select name="" id="" className='sorting-selection' onChange={e => sortProductsEn(e.target.value)}>
                  <option value="sort-by">Sort By</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              }
              az={
                <select name="" id="" className='sorting-selection' onChange={e => sortProductsAz(e.target.value)}>
                  <option value="sort-by">Sırala</option>
                  <option value="name-asc">Ad: A-dan Z-yə</option>
                  <option value="name-desc">Ad: Z-dən A-ya</option>
                  <option value="price-asc">Qiymət: Aşağıdan Yuxarıya</option>
                  <option value="price-desc">Qiymət: Yuxarıdan Aşağıya</option>
                </select>
              }

            />
            <div className="row g-4">

              {filteredData.length === 0 ? currentProducts.map((item, index) => (
                <SingleProduct key={index} item={item} />
              )) : filteredData.map((item, index) => (
                <SingleProduct key={index} item={item} />
              ))}
            </div>
            <div className="pagination-btn-con" data-aos="fade-up" data-aos-duration="2000">
              {pageNumbers.map((item, index) => (
                <button className={`pagination-button m-2 ${item === currentPage ? "active" : ""}`} key={index} onClick={() => { setCurrentPage(item) }}>{item}</button>
              ))}
            </div>
          </div>
        </section>
      {/* </main> */}
    </>
  )
}

export default Shop