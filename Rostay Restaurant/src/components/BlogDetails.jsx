import React from 'react'
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import slugify from 'slugify';

const BlogDetails = () => {
    const blogs = useSelector(p => p.blog);
    const { slug } = useParams();
    const singleBlog = blogs.find(p => slugify(p.titleEn, { lower: true }) === slug);
    return (
        <main>
            <div className="blog-details-top-part">
                <h1 data-aos="zoom-in" data-aos-duration="2000" >{singleBlog.titleEn}</h1>
                <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'>Home</Link> &gt; <span>Blog</span> </h6>
            </div>
            <div className="container-fluid blog-details-section">
                <div className="left-blog-details">
                    <p className="blog-date">{singleBlog.dateEn}</p>
                    <h1 className='blog-title'>{singleBlog.titleEn}</h1>
                    <img src={singleBlog.image} alt="" />
                    <p className="blog-description">{singleBlog.descriptionEn}</p>
                </div>
                <div className="right-decor-part">
                    <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/demo-content-06.jpg" alt="" />
                    <div className="decor-part-text">
                        <h3>About Our Restaurant</h3>
                        <p>By day, Rostay provides a hub to meet friends and colleagues with a well-crafted wine list, discreet yet professional service and sophisticated menus all delivered in a relaxed setting.</p>
                        <Link to='/reservation'><button>Book a Table <HiOutlineArrowLongRight size={20} /></button></Link>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default BlogDetails
