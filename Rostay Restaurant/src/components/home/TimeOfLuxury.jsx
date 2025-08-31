import Aos from 'aos';
import React from 'react'
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import Slider from 'react-slick';
import StaticLanguage from '../../utils/StaticLanguage';

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
    const slideImages = [
        "https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-1.jpg",
        "https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-2.jpg",
        "https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-3.jpg",
        "https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-4.jpg",
        "https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-5.jpg",
        "https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-6.jpg",
        "https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-7.jpg",
        "https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-8.jpg",
        "https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-9.jpg",
        "https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/gallery-10.jpg",

    ]
    return (
        <>
            <section className='luxury-section container-fluid'>
                <div className="luxury-left-part" data-aos="zoom-in" data-aos-duration="2000">
                    <div className="luxury-left-text">
                        <h6>
                            <StaticLanguage en="Time Of Luxury" az="Zövq Dolu Anlar" />
                        </h6>
                        <h1>
                            <StaticLanguage en="Opening Time Hours" az="İş Saatlarımız" />
                        </h1>
                        <ul>
                            <li>
                                <StaticLanguage en="Monday - Friday : 7:00 am - 10:00 pm" az="Bazar ertəsi – Cümə: 07:00 – 22:00" />
                            </li>
                            <li>
                                <StaticLanguage en="Saturday: 8:00 am - 11:00 pm" az="Şənbə: 08:00 – 23:00" />
                            </li>
                            <li>
                                <StaticLanguage en="Sunday: 6:30 pm - 11:00 pm" az="Bazar: 18:30 – 23:00" />
                            </li>
                            <li>
                                <StaticLanguage en="Holidays: Closed" az="Bayram günləri: Bağlıdır" />
                            </li>
                        </ul>
                    </div>
                    <div className="luxury-image" data-aos="fade-up" data-aos-duration="2000">
                        <Slider {...settings}>
                            {slideImages.map((item, index) => (
                                <div className='luxury-image-slider' key={index}>
                                    <img src={item} alt="" />
                                </div>
                            ))}
                        </Slider>
                    </div>

                </div>
                <div className="luxury-right-part">
                    <div className="luxury-right-image" data-aos="fade-up" data-aos-duration="2000">
                        <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/h1-banner03.jpg" alt="" />
                    </div>
                    <div className="luxury-right-text" data-aos="zoom-in" data-aos-duration="2000">
                        <div className="breakfast">
                            <h5>
                                <StaticLanguage en="Breakfast" az="Səhər Yeməyi" />
                            </h5>
                            <ul>
                                <li>
                                    <StaticLanguage en="Monday - Friday : 7:00 am - 11:30 am" az="Bazar ertəsi – Cümə: 07:00 – 11:30" />
                                </li>
                                <li>
                                    <StaticLanguage en="Saturday: 8:00 am - 11:30 am" az="Şənbə: 08:00 – 11:30" />
                                </li>
                                <li>
                                    <StaticLanguage en="Sunday: 7:30 pm - 11:30 am" az="Bazar: 07:30 – 11:30" />
                                </li>
                                <li>
                                    <StaticLanguage en="Holidays: Closed" az="Bayram günləri: Bağlıdır" />
                                </li>
                            </ul>
                        </div>
                        <div className="lunch-dinner">
                            <h5>
                                <StaticLanguage en="Lunch and Dinner" az="Nahar və Şam" />

                            </h5>
                            <ul>
                                <li>
                                    <StaticLanguage en="Monday - Friday : 11:30 am - 10:00 pm" az="Bazar ertəsi – Cümə: 11:30 – 22:00" />
                                </li>
                                <li>
                                    <StaticLanguage en="Saturday: 10:30 am - 11:00 pm" az="Şənbə: 10:30 – 23:00"/>
                                </li>
                                <li>
                                    <StaticLanguage en="Sunday: 10:00 am - 11:00 pm" az="Bazar: 10:00 – 23:00"/>
                                </li>
                                <li>
                                    <StaticLanguage en="Holidays: Closed" az="Bayram günləri: Bağlıdır" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <button data-aos="fade-up" data-aos-duration="1500">Book a Table <HiOutlineArrowLongRight size={20} /></button> */}
                </div>
            </section>
        </>

    )
}

export default TimeOfLuxury;