import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import slugify from 'slugify';
import StaticLanguage from '../utils/StaticLanguage';

const BlogDetails = () => {
    const blogs = useSelector(p => p.blog);
    const { slug } = useParams();
    const singleBlog = blogs.find(p => slugify(p.titleEn, { lower: true }) === slug);
    return (

        <StaticLanguage
            en={
                <main>
                    <div className="blog-details-top-part">
                        <h1 data-aos="zoom-in" data-aos-duration="2000" >{singleBlog.titleEn}</h1>
                        <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'>Home</Link> &gt; <span>Blog</span> </h6>
                    </div>

                    <div className="container-fluid blog-details-section">
                        <div className="left-blog-details" data-aos='fade-right' data-aos-duration='2000'>
                            <p className="blog-date">{singleBlog.dateEn}</p>
                            <h1 className='blog-title'>{singleBlog.titleEn}</h1>
                            <img src={singleBlog.image} alt="" />
                            <p className="blog-description">{singleBlog.descriptionEn}</p>
                        </div>
                        <div className="right-decor-part" data-aos='fade-up' data-aos-duration='2000'>
                            <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/demo-content-06.jpg" alt={singleBlog.titleEn} />
                            <div className="decor-part-text">
                                <h3>About Our Restaurant</h3>
                                <p>By day, Rostay provides a hub to meet friends and colleagues with a well-crafted wine list, discreet yet professional service and sophisticated menus all delivered in a relaxed setting.</p>
                                <Link to='/reservation'><button>Book a Table <HiOutlineArrowLongRight size={20} /></button></Link>
                            </div>
                        </div>
                    </div>
                </main>
            }

            az={
                <main>
                    <div className="blog-details-top-part">
                        <h1 data-aos="zoom-in" data-aos-duration="2000" >{singleBlog.titleAz}</h1>
                        <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'>Ana səhİfə</Link> &gt; <span>Bloq</span> </h6>
                    </div>

                    <div className="container-fluid blog-details-section">
                        <div className="left-blog-details" data-aos='fade-right' data-aos-duration='2000'>
                            <p className="blog-date">{singleBlog.dateAz}</p>
                            <h1 className='blog-title'>{singleBlog.titleAz}</h1>
                            <img src={singleBlog.image} alt={singleBlog.titleAz} />
                            <p className="blog-description">{singleBlog.descriptionAz}</p>
                        </div>
                        <div className="right-decor-part" data-aos='fade-up' data-aos-duration='2000'>
                            <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/demo-content-06.jpg" alt="" />
                            <div className="decor-part-text">
                                <h3>Restoranımız Haqqında</h3>
                                <p>Gündüzlər Rostay dostlar və həmkarlarla görüşmək üçün ideal məkandır – diqqətlə seçilmiş şərab siyahısı, incə amma peşəkar xidmət və zərif menyular hamısı rahat atmosferdə təqdim olunur.</p>
                                <Link to='/reservation'><button>Masa Sifarişi <HiOutlineArrowLongRight size={20} /></button></Link>
                            </div>
                        </div>
                    </div>
                </main>
            }
        />
    )
}

export default BlogDetails