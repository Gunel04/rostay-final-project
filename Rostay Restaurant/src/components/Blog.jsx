import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import slugify from 'slugify';
import StaticLanguage from '../utils/StaticLanguage';

const Blog = () => {
    const blogs = useSelector(p => p.blog);

    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 3;

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const blogPageNumbers = [];

    for (let i = 1; i <= Math.ceil(blogs.length / blogsPerPage); i++) {
        blogPageNumbers.push(i);
    }

    return (
        <main>
            <div className="blog-top-part">
                <h1 data-aos="zoom-in" data-aos-duration="2000">
                    <StaticLanguage en="Blog" az="Bloq"/>
                </h1>
                <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'><StaticLanguage en="Home" az="Ana səhİfə"/></Link> &gt; <span><StaticLanguage en="Blog" az="Bloq"/></span> </h6>
            </div>
            <div className="blog-section container-fluid">
                <div className="row">
                    <StaticLanguage
                        en={currentBlogs.map((item, index) => (
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4" key={index} data-aos='fade-up-right' data-aos-duration='2000'>
                                <div className="card">
                                    <img src={item.image} className="card-img-top" alt={item.titleEn} height={270} style={{ objectFit: "cover" }} />
                                    <div className="card-body">
                                        <p className="blog-date">{item.dateEn}</p>
                                        <Link to={`/blog/${slugify(item.titleEn, { lower: true })}`} style={{ textDecoration: "none" }}>
                                            <h5 className="blog-title">{item.titleEn}</h5>
                                        </Link>
                                        <p className="blog-text">{item.descriptionEn.slice(0, 100)}...</p>
                                        <Link to={`/blog/${slugify(item.titleEn, { lower: true })}`} ><button>Read More</button></Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                        az={currentBlogs.map((item, index) => (
                            <div className="col-12 col-sm-6 col-md-6 col-lg-4" key={index} data-aos='fade-up-right' data-aos-duration='2000'>
                                <div className="card">
                                    <img src={item.image} className="card-img-top" alt={item.titleAz} height={270} style={{ objectFit: "cover" }} />
                                    <div className="card-body">
                                        <p className="blog-date">{item.dateAz}</p>
                                        <Link to={`/blog/${slugify(item.titleEn, { lower: true })}`} style={{ textDecoration: "none" }}>
                                            <h5 className="blog-title">{item.titleAz}</h5>
                                        </Link>
                                        <p className="blog-text">{item.descriptionAz.slice(0, 100)}...</p>
                                        <Link to={`/blog/${slugify(item.titleEn, { lower: true })}`} ><button>Ətraflı</button></Link>
                                    </div>
                                </div>
                            </div>
                        ))}


                    />


                    {/* {currentBlogs.map((item, index) => (
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4" key={index} data-aos='fade-up-right' data-aos-duration='2000'>
                            <div className="card">
                                <img src={item.image} className="card-img-top" alt="..." height={270} style={{ objectFit: "cover" }} />
                                <div className="card-body">
                                    <p className="blog-date">{item.dateEn}</p>
                                    <Link to={`/blog/${slugify(item.titleEn, { lower: true })}`} style={{ textDecoration: "none" }}>
                                        <h5 className="blog-title">{item.titleEn}</h5>
                                    </Link>
                                    <p className="blog-text">{item.descriptionEn.slice(0, 100)}...</p>
                                    <Link to={`/blog/${slugify(item.titleEn, { lower: true })}`} ><button>Read More</button></Link>
                                </div>
                            </div>
                        </div>
                    ))} */}
                    <div className="blog-pagination-con">
                        {blogPageNumbers.map((item, index) => (
                            <button className={`${item === currentPage ? 'active' : ""} m-2`} key={index} onClick={() => { setCurrentPage(item) }}>{item}</button>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Blog
