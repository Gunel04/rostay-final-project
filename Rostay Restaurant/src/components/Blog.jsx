import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import slugify from 'slugify';

const Blog = () => {
    const blogs = useSelector(p => p.blog);
    return (
        <main>
            <div className="blog-top-part">
                <h1 data-aos="zoom-in" data-aos-duration="2000">Blog</h1>
                <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'>Home</Link> &gt; <span>Blog</span> </h6>
            </div>
            <div className="blog-section container-fluid">
                <div className="row">
                    {blogs.map((item, index) => (
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4" key={index}>
                            <div className="card">
                                <img src={item.image} className="card-img-top" alt="..." height={270} style={{ objectFit: "cover" }} />
                                <div className="card-body">
                                    <p className="blog-date">{item.dateEn}</p>
                                    <Link to={`/blog/${slugify(item.titleEn, { lower: true })}`} style={{textDecoration:"none"}}>
                                        <h5 className="blog-title">{item.titleEn}</h5>
                                    </Link>
                                    <p className="blog-text">{item.descriptionEn.slice(0, 100)}...</p>
                                    <Link to={`/blog/${slugify(item.titleEn, { lower: true })}`} ><button>Read More</button></Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </main>
    )
}

export default Blog
