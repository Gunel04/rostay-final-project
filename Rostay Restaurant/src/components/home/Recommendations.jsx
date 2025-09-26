import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import StaticLanguage from '../../utils/StaticLanguage';
import SingleProduct from '../SingleProduct';

const Recommendations = () => {
  const products = useSelector(p => p.product);


  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    <section className="recommendations-section container-fluid">
      <div className="recommendations-heading" data-aos='fade-up' data-aos-duration='2000'>
        <h5>
          <StaticLanguage en="Recommendations" az="Tövsİyələr" />
        </h5>
        <h1>
          <StaticLanguage en="Best Speacialties" az="Seçİlmİş təamlar" />
        </h1>
      </div>
      <div className="recommend-products">
        <Slider {...settings}>
          {products.slice(0, 6).map((item, index) => (
            <div className='col-12 col-sm-6 col-md-6 col-lg-4' key={index} data-aos="fade-up" data-aos-duration="2000">
              <SingleProduct item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Recommendations;