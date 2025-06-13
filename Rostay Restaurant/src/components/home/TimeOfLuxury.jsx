import Aos from 'aos';
import React from 'react'
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import Slider from 'react-slick';

const TimeOfLuxury = () => {
    Aos.init();
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1.6,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1002,
                settings: {
                    slidesToShow: 1.1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            {/* <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/h1-banner02.png" alt="" /> */}
            <section className='luxury-section container-fluid'>
                <div className="luxury-left-part" data-aos="zoom-in" data-aos-duration="2000">
                    <div className="luxury-left-text">
                        <h6>Time Of Luxury</h6>
                        <h1>Opening Time Hours</h1>
                        <ul>
                            <li>Monday - Friday : 7:00 am - 22:00 pm</li>
                            <li>Saturday: 8:00 am - 23:00 pm</li>
                            <li>Sunday: 6:30 pm - 23:00 pm</li>
                            <li>Holidays: Closed</li>
                        </ul>
                    </div>
                    <div className="luxury-image" data-aos="fade-up" data-aos-duration="2000">
                        <Slider {...settings}>
                            <div className='luxury-image-slider'>
                                <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-1.jpg" alt="" />
                            </div>
                            <div className='luxury-image-slider'>
                                <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-2.jpg" alt="" />
                            </div>
                            <div className='luxury-image-slider'>
                                <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-3.jpg" alt="" />
                            </div>
                            <div className='luxury-image-slider'>
                                <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-4.jpg" alt="" />
                            </div>
                            <div className='luxury-image-slider'>
                                <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-5.jpg" alt="" />
                            </div>
                            <div className='luxury-image-slider'>
                                <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-6.jpg" alt="" />
                            </div>
                            <div className='luxury-image-slider'>
                                <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-7.jpg" alt="" />
                            </div>
                            <div className='luxury-image-slider'>
                                <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-8.jpg" alt="" />
                            </div>
                            <div className='luxury-image-slider'>
                                <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-9.jpg" alt="" />
                            </div>
                            <div className='luxury-image-slider'>
                                <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-10.jpg" alt="" />
                            </div>
                        </Slider>
                    </div>

                </div>
                <div className="luxury-right-part">
                    <div className="luxury-right-image" data-aos="fade-up" data-aos-duration="2000">
                        <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/h1-banner03.jpg" alt="" />
                    </div>
                    <div className="luxury-right-text" data-aos="zoom-in" data-aos-duration="2000">
                        <div className="breakfast">
                            <h5>Breakfast</h5>
                            <ul>
                                <li>Monday - Friday : 7:00 am - 11:30 pm</li>
                                <li>Saturday: 8:00 am - 11:30 pm</li>
                                <li>Sunday: 6:30 pm - 11:30 pm</li>
                                <li>Holidays: Closed</li>
                            </ul>
                        </div>
                        <div className="lunch-dinner">
                            <h5>Lunch and Dinner</h5>
                            <ul>
                                <li>Monday - Friday : 11:30 am - 22:00 pm</li>
                                <li>Saturday: 10:30 am - 23:00 pm</li>
                                <li>Sunday: 10:00 pm - 23:00 pm</li>
                                <li>Holidays: Closed</li>
                            </ul>
                        </div>
                    </div>
                    <button data-aos="fade-up" data-aos-duration="1500">Book a Table <HiOutlineArrowLongRight size={20} /></button>
                </div>
            </section>
        </>

    )
}

export default TimeOfLuxury;