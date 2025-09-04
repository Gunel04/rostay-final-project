import Aos from 'aos'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import StaticLanguage from '../../utils/StaticLanguage';

const WelcomeSection = () => {
    Aos.init();
    return (
        <div className="welcome-to-rostay container-fluid">
            <div className="welcome-left-image" data-aos="fade-up" data-aos-duration="2000">
                <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/H3-image-2.jpg" alt="" />
            </div>
            <div className="welcome-center-text" data-aos="zoom-in" data-aos-duration="2000">
                <h6>
                    <StaticLanguage en="Welcome To Rostay" az="Rostaya Xoş Gəlmisiniz" />
                </h6>
                <h1>
                    <StaticLanguage en="Serving Amazing Meals Since 2008" az="2008-dən Bərİ Mükəmməl Yeməklər Xİdmətİnİzdə" />
                </h1>
                <p>
                    <StaticLanguage en="Welcome to our sophisticated restaurant in the heart of Baku Enjoy stunning views of the beautiful city's historic architecture with a glass of fine wine and delicate salami prepared by the world's best chef" az="Bakının mərkəzində yerləşən zərif restoranımıza xoş gəlmisiniz. Tarixi memarlığın möhtəşəm mənzərəsini seyr edərək incə salamilər və dünyanın ən yaxşı aşpazlarının hazırladığı zərif yeməkləri dadın, seçilmiş şərabların ləzzətindən zövq alın." />
                </p>
                <button className='make-reservation-btn'>
                    <StaticLanguage en="Make a Reservation " az="Rezervasiya Et " />
                    <HiOutlineArrowLongRight size={20} />
                </button>
            </div>
            <div className="welcome-right-image" data-aos="fade-down" data-aos-duration="2000">
                <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/about-image-1.jpg" alt="" />
            </div>
        </div>
    )
}

export default WelcomeSection