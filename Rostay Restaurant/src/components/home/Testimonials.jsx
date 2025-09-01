import Aos from 'aos';
import { FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import StaticLanguage from '../../utils/StaticLanguage';

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
            testimonialTextEn: '“With a capacity for 28 seated guests this option will suit larger gatherings. Smaller parties will benefit from the additional space area is required, available in combination with coffees and cold drinks to keep the team fueled.”',
            testimonialTextAz: '“28 nəfərlik oturma imkanına malik bu məkan daha böyük görüşlər üçün idealdır. Kiçik qruplar isə əlavə sahədən faydalana bilər; qəhvə və soyuq içkilərlə birlikdə komandanızı enerjili saxlaya bilərsiniz.”',
            testimonialName: "Addie McKinney",
            majorEn: "Pastry Chef",
            majorAz: "Şirniyyat Şefi"
        },
        {
            testimonialTextEn: '“We carry Wellsford Cabinetry among several others for our kitchen design and remodel services. Wellsford has the best quality I have seen, excellent customer service. They are my “go to” line. ”',
            testimonialTextAz: '“Biz mətbəx dizaynı və təmir xidmətlərimiz üçün Wellsford Cabinetry və bir neçə digər markalardan istifadə edirik. Wellsford gördüyüm ən yüksək keyfiyyətə malikdir və mükəmməl müştəri xidməti təqdim edir. Mənim “ilk seçim”imdir.”',
            testimonialName: "Alfred Mason",
            majorEn: "Ceo & Founder",
            majorAz: "Ceo & Təsisçi"
        },
        {
            testimonialTextEn: '“I ate a taco from there and it came with pineapples and that was the first time I ever had pineapples with my el pastor tacos and it works really well and was delicious and made very rapidly per my request”',
            testimonialTextAz: '“Oradan taco sifariş etdim və içində ananas vardı; bu, el pastor taco-larımda ananasla ilk təcrübəm idi. Nəticə mükəmməl oldu, çox dadlı idi və istəklərimə uyğun sürətlə hazırlandı.”',
            testimonialName: "Sharon Gunther",
            majorEn: "Fresh Design",
            majorAz: "Fresh Design"
        },
        {
            testimonialTextEn: '““Perfect for all kinds of meetings including business sessions, strategy days and team bonding activities for up to 62. Available in with or with pastries, coffees and cold drinks to keep the team fueled.”',
            testimonialTextAz: '“Bütün növ görüşlər üçün idealdır – biznes sessiyaları, strateji günlər və komanda birləşmə tədbirləri üçün 62 nəfərə qədər uyğun. Şirniyyat, qəhvə və soyuq içkilərlə birlikdə komandayı enerjili saxlamaq mümkündür.”',
            testimonialName: "Jordan Harper",
            majorEn: "Master Chef",
            majorAz: "Baş Şef"
        },
    ]
    return (
        <div className="testimonial-section container-fluid">
            <div className="testimonial-info" data-aos="zoom-in-up" data-aos-duration="1500">
                <h6>
                    <StaticLanguage en="ur Happy Clients" az="Xoşbəxt Müştərilərimiz" />
                </h6>
                <h1>
                    <StaticLanguage en="Customers Testimonials" az="Müştəri Rəyləri" />
                </h1>
            </div>
            <div className="testimonial-slider">
                <div className="slider-container" data-aos="zoom-in" data-aos-duration="1500">
                    <StaticLanguage
                        en={<Slider {...settings}>
                            {testimonials.map((item, index) => (
                                <div className='slide-item' key={index}>
                                    <FaStar color='#f2b612' />
                                    <FaStar color='#f2b612' />
                                    <FaStar color='#f2b612' />
                                    <FaStar color='#f2b612' />
                                    <FaStar color='#f2b612' />
                                    <p>{item.testimonialTextEn}</p>
                                    <h5>{item.testimonialName}</h5>
                                    <h6>{item.majorEn}</h6>
                                </div>
                            ))}
                        </Slider>}
                        az={<Slider {...settings}>
                            {testimonials.map((item, index) => (
                                <div className='slide-item' key={index}>
                                    <FaStar color='#f2b612' />
                                    <FaStar color='#f2b612' />
                                    <FaStar color='#f2b612' />
                                    <FaStar color='#f2b612' />
                                    <FaStar color='#f2b612' />
                                    <p>{item.testimonialTextAz}</p>
                                    <h5>{item.testimonialName}</h5>
                                    <h6>{item.majorAz}</h6>
                                </div>
                            ))}
                        </Slider>}
                    />
                </div>
            </div>
        </div>
    )
}

export default Testimonials