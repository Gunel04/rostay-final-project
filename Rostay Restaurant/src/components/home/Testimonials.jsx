import Aos from 'aos';
import React from 'react'
import { FaStar } from 'react-icons/fa';
import Slider from 'react-slick';

const Testimonials = () => {
    Aos.init();
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: true,
        centerPadding: "0px",
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false

                }
            }
        ]
    };
    return (
        <div className="testimonial-section container-fluid">
            <div className="testimonial-info" data-aos="zoom-in-up" data-aos-duration="1500">
                <h6>Our Happy Clients</h6>
                <h1>Customers Testimonials</h1>
            </div>
            <div className="testimonial-slider">
                <div className="slider-container" data-aos="zoom-in" data-aos-duration="1500">
                    <Slider {...settings}>
                        <div className='slide-item'>
                            <FaStar color='#f2b612' />
                            <FaStar color='#f2b612' />
                            <FaStar color='#f2b612' />
                            <FaStar color='#f2b612' />
                            <FaStar color='#f2b612' />
                            <p>“ With a capacity for 28 seated guests this option will suit larger gatherings. Smaller parties will benefit from the additional space area is required, available in combination with coffees and cold drinks to keep the team fueled.”</p>
                            <h5>Addie Mckinney</h5>
                            <h6>Pastry Chef</h6>
                        </div>
                        <div className='slide-item'>
                            <FaStar color='#f2b612' />
                            <FaStar color='#f2b612' />
                            <FaStar color='#f2b612' />
                            <FaStar color='#f2b612' />
                            <FaStar color='#f2b612' />
                            <p>“ We carry Wellsford Cabinetry among several others for our kitchen design and remodel services. Wellsford has the best quality I have seen, excellent customer service. They are my “go to” line. ”</p>
                            <h5>Alfred Mason</h5>
                            <h6>Ceo & Founder</h6>
                        </div>
                        <div className='slide-item'>
                            <FaStar color='#f2b612' />
                            <FaStar color='#f2b612' />
                            <FaStar color='#f2b612' />
                            <FaStar color='#f2b612' />
                            <FaStar color='#f2b612' />
                            <p>“I ate a taco from there and it came with pineapples and that was the first time I ever had pineapples with my el pastor tacos and it works really well and was delicious and made very rapidly per my request”</p>
                            <h5>Sharon Gunther</h5>
                            <h6>Fresh Design</h6>
                        </div>
                        <div className='slide-item'>
                            <FaStar color='#f2b612' />
                            <FaStar color='#f2b612' />
                            <FaStar color='#f2b612' />
                            <FaStar color='#f2b612' />
                            <FaStar color='#f2b612' />
                            <p>“ Perfect for all kinds of meetings including business sessions, strategy days and team bonding activities for up to 62. Available in with or with pastries, coffees and cold drinks to keep the team fueled.”</p>
                            <h5>Jordan Harper</h5>
                            <h6>Master Chef</h6>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>

    )
}

export default Testimonials