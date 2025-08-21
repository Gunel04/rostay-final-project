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
    const testimonials = [
        {
            testimonialText: '“With a capacity for 28 seated guests this option will suit larger gatherings. Smaller parties will benefit from the additional space area is required, available in combination with coffees and cold drinks to keep the team fueled.”',
            testimonialName: "Addie McKinney",
            major: "Pastry Chef"
        },
        {
            testimonialText: '“We carry Wellsford Cabinetry among several others for our kitchen design and remodel services. Wellsford has the best quality I have seen, excellent customer service. They are my “go to” line. ”',
            testimonialName: "Alfred Mason",
            major: "Ceo & Founder"
        },
        {
            testimonialText: '“I ate a taco from there and it came with pineapples and that was the first time I ever had pineapples with my el pastor tacos and it works really well and was delicious and made very rapidly per my request”',
            testimonialName: "Sharon Gunther",
            major: "Fresh Design"
        },
        {
            testimonialText: '““Perfect for all kinds of meetings including business sessions, strategy days and team bonding activities for up to 62. Available in with or with pastries, coffees and cold drinks to keep the team fueled.”',
            testimonialName: "Jordan Harper",
            major: "Master Chef"
        },
    ]
    return (
        <div className="testimonial-section container-fluid">
            <div className="testimonial-info" data-aos="zoom-in-up" data-aos-duration="1500">
                <h6>Our Happy Clients</h6>
                <h1>Customers Testimonials</h1>
            </div>
            <div className="testimonial-slider">
                <div className="slider-container" data-aos="zoom-in" data-aos-duration="1500">
                    <Slider {...settings}>
                        {testimonials.map((item, index) => (
                            <div className='slide-item'>
                                <FaStar color='#f2b612' />
                                <FaStar color='#f2b612' />
                                <FaStar color='#f2b612' />
                                <FaStar color='#f2b612' />
                                <FaStar color='#f2b612' />
                                <p>{item.testimonialText}</p>
                                <h5>{item.testimonialName}</h5>
                                <h6>{item.major}</h6>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>

    )
}

export default Testimonials