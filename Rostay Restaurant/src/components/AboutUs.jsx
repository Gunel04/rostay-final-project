import { Link } from 'react-router-dom'
import WelcomeSection from './about/WelcomeSection'
import AboutEvent from './about/AboutEvent'
import TimeOfLuxury from './home/TimeOfLuxury';
import Aos from 'aos'
import StaticLanguage from '../utils/StaticLanguage';

const AboutUs = () => {
  Aos.init();
  return (
    <>
      {/* <main> */}
        <div className="hero-top-part">
          <h1 data-aos="zoom-in" data-aos-duration="2000">
            <StaticLanguage az="Haqqımızda" en="About Us" />
          </h1>
          <h6 data-aos="zoom-in" data-aos-duration="2000">
            <Link to='/'>
              <StaticLanguage az="Ana səhİfə" en="Home" />
            </Link> &gt; <span>
              <StaticLanguage az="Haqqımızda" en="About Us" />
            </span>
          </h6>
        </div>
        <WelcomeSection />
        <TimeOfLuxury />
        <AboutEvent />
      {/* </main> */}
    </>
  )
}

export default AboutUs