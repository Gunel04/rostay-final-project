import Aos from 'aos';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import StaticLanguage from '../../utils/StaticLanguage';
import { Link } from 'react-router-dom';

const WelcomeToRostay = () => {
  Aos.init();
  return (
    <section className='welcome-section container-fluid'>
      <div className="welcome-image" data-aos="zoom-in-up" data-aos-duration="1500">
        <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/h1-banner01.jpg" alt="" />
      </div>
      <div className="welcome-texts" data-aos="fade-down-right" data-aos-duration="1500">
        <h6>
          <StaticLanguage en="Welcome to Rostay" az="Rostay'a xoş gəlmisiniz" />
        </h6>
        <h1>
          <StaticLanguage en="Seasonal & delicious food menus" az="Mövsümi və dadlı yemək menyuları" />
        </h1>
        <p>
          <StaticLanguage en="Welcome to our sophisticated restaurant in the heart of Baku. Enjoy stunning views of the beautiful city’s historic architecture with a glass of fine coffee and delicate salami prepared by the world’s best chef" az="Bakının mərkəzində yerləşən zərif restoranımıza xoş gəlmisiniz. 
          Tarixi memarlığın füsunkar mənzərəsini seyr edərək incə salami və dünyanın ən yaxşı aşpazının hazırladığı seçilmiş kofenin dadını çıxarın."/>
        </p>
        <Link to='/reservation'>
          <button className='welcome-btn'>
            <StaticLanguage en="Make a reservation" az="Rezervasiya et" />
            <HiOutlineArrowLongRight size={20} />
          </button>
        </Link>
      </div>
    </section>
  )
}

export default WelcomeToRostay;