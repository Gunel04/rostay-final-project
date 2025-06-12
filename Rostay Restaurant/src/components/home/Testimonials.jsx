import React from 'react'
import Slider from 'react-slick';

const Testimonials = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
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
        <div className="testimonial-section">
            <div className="testimonial-info">
                <h5>Our Happy Clients</h5>
                <h1>Customers Testimonials</h1>
            </div>
            <div className="testimonial-slider">
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className='slide-item'>
                            <h3>1</h3>
                        </div>
                        <div className='slide-item'>
                            <h3>2</h3>
                        </div>
                        <div className='slide-item'>
                            <h3>3</h3>
                        </div>
                        <div className='slide-item'>
                            <h3>4</h3>
                        </div>
                        <div className='slide-item'>
                            <h3>5</h3>
                        </div>
                        <div className='slide-item'>
                            <h3>6</h3>
                        </div>
                        <div className='slide-item'>
                            <h3>7</h3>
                        </div>
                        <div className='slide-item'>
                            <h3>8</h3>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>

    )
}

export default Testimonials