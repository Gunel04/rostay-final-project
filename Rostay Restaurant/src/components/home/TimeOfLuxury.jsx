import React from 'react'
import Slider from 'react-slick';

const TimeOfLuxury = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
        <section className='luxury-section container-fluid'>
            <div className="luxury-left-part">
                <div className="luxury-left-text">
                    <h6>Time Of Luxury</h6>
                    <h1>Opening Time Hours</h1>
                    <ul>
                        <li>Monday – Friday : 7:00 am – 22:00 pm</li>
                        <li>Saturday: 8:00 am – 23:00 pm</li>
                        <li>Sunday: 6:30 pm – 23:00 pm</li>
                        <li>Holidays: Closed</li>
                    </ul>
                </div>
                <div className="luxury-image">
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
        </section>
    )
}

export default TimeOfLuxury