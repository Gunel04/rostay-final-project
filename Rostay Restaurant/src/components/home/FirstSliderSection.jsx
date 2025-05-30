import React from 'react'
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import Slider from 'react-slick'

const FirstSliderSection = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
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
            <section className='slider-section'>
                <Slider {...settings}>
                    <div className='slider-part'>
                        <div className="slider-text">
                            <h1>The Gourmet Garden</h1>
                            <p>Creative space for food and recipes where you will find healthy culinary inspiration.</p>
                            <button>Discover Menu <HiOutlineArrowLongRight size={20} /></button>
                        </div>
                        <div className="slider-images-1">
                            <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/h1-slider1-2.jpg" alt="" />
                        </div>
                    </div>
                    <div className='slider-part'>
                        <div className="slider-text">
                            <h1>The Art of Dining</h1>
                            <p>Inspired flavors, fresh ingredients, and unforgettable experiences.</p>
                            <button>Discover Menu <HiOutlineArrowLongRight size={20} /></button>
                        </div>
                        <div className="slider-images-2">
                            <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/h1-slider2-2.jpg" alt="" />
                        </div>
                    </div>
                    <div className='slider-part'>
                        <div className="slider-text">
                            <h1>Savor & Delight</h1>
                            <p>A place to indulge in creativity, taste and togetherness</p>
                            <button>Discover Menu <HiOutlineArrowLongRight size={20} /></button>
                        </div>
                        <div className="slider-images-3">
                            <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/h1-slider3-3.jpg" alt="" />
                        </div>
                    </div>

                </Slider>
            </section>
        </>
    )
}

export default FirstSliderSection;