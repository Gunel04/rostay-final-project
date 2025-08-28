import Aos from 'aos';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import Slider from 'react-slick'
import StaticLanguage from '../../utils/StaticLanguage';

const FirstSliderSection = () => {
    Aos.init();
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
            <section className='slider-section' >
                <Slider {...settings}>
                    <div className='slider-part' data-aos="zoom-in" data-aos-duration="1500">
                        <div className="slider-text">
                            <h1>
                                <StaticLanguage en="The Gourmet Garden" az="Qurman Bağı" />
                            </h1>
                            <p>
                                <StaticLanguage en="Creative space for food and recipes where you will find healthy culinary inspiration." az="Yeməklər və reseptlər üçün yaradıcı bir məkan – sağlam kulinariya ilhamını burada tapacaqsınız." />
                            </p>
                            <button><StaticLanguage en="Discover Menu" az="Menyunu kəşf et" /><HiOutlineArrowLongRight size={20} /></button>
                        </div>
                        <div className="slider-images-1">
                            <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/h1-slider1-2.jpg" alt="" />
                        </div>
                    </div>
                    <div className='slider-part' data-aos="zoom-in" data-aos-duration="1500">
                        <div className="slider-text">
                            <h1>
                                <StaticLanguage en="The Art of Dining" az="Yemək Sənətİ" />
                            </h1>
                            <p>
                                <StaticLanguage en="Inspired flavors, fresh ingredients, and unforgettable experiences." az="İlham verən dadlar, təzə inqrediyentlər və unudulmaz təcrübələr." />
                            </p>
                            <button><StaticLanguage en="Discover Menu" az="Menyunu kəşf et" /> <HiOutlineArrowLongRight size={20} /></button>
                        </div>
                        <div className="slider-images-2">
                            <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/h1-slider2-2.jpg" alt="" />
                        </div>
                    </div>
                    <div className='slider-part' data-aos="zoom-in" data-aos-duration="1500">
                        <div className="slider-text">
                            <h1>
                                <StaticLanguage en="Savor & Delight" az="Ləzzət və Zövq" />
                            </h1>
                            <p>
                                <StaticLanguage en="A place to indulge in creativity, taste and togetherness" az="Yaradıcı ləzzətləri, dadı və birlik anlarını yaşamaq üçün məkan." />
                            </p>
                            <button><StaticLanguage en="Discover Menu" az="Menyunu kəşf et" /> <HiOutlineArrowLongRight size={20} /></button>
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