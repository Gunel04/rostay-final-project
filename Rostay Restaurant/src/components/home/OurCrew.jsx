import Aos from 'aos'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom';
import StaticLanguage from '../../utils/StaticLanguage';

const OurCrew = () => {
    Aos.init();
    return (
        <section className="our-crew-section">
            <div className="our-crew-left" data-aos="zoom-in-left" data-aos-duration="1500">
                <img className='image-1' src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/team-image-02.jpg" alt="" />
                <img className='image-2' src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/team-image-03.jpg" alt="" />
                <h1>
                    <StaticLanguage en="Restaurant" az="Restoran" />
                </h1>
            </div>
            <div className="our-crew-center" >
                <h5 data-aos="zoom-in-left" data-aos-duration="1500">
                    <StaticLanguage en="Our Crew" az="Komandamız" />
                </h5>
                <h1 data-aos="zoom-in-left" data-aos-duration="1500">
                    <StaticLanguage en="Chef dieter delicioz" az="Şef Dieter Delicioz" />
                </h1>
                <p data-aos="zoom-in-left" data-aos-duration="1500">
                    <StaticLanguage en="Everyday Chef Delicioz sets himself the challenge to start from scratch – his tools: ingenuity, curiosity, enthusiasm, unparalleled talent and the highest craftsmanship." az=" Hər gün Şef Delicioz sıfırdan başlamağı özünə məqsəd qoyur – onun alətləri isə yaradıcılıq, maraq, həvəs, bənzərsiz istedad və ən yüksək ustalıqdır." />
                </p>
                <Link to='/ourteam'>
                    <button className='our-team-btn'  data-aos="zoom-in-left" data-aos-duration="1500">
                        <StaticLanguage en="Our Team" az="Komandamız" /> <HiOutlineArrowLongRight size={20} />
                    </button>
                </Link>
            </div>
            <div className="our-crew-right" data-aos="zoom-in-left" data-aos-duration="1500">
                <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/image-team-1.jpg" alt="" />
            </div>
        </section>
    )
}

export default OurCrew