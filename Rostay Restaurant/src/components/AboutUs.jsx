import React from 'react'
import { Link } from 'react-router-dom'
import WelcomeSection from './about/WelcomeSection'
import AboutEvent from './about/AboutEvent'
import Aos from 'aos'

const AboutUs = () => {
  Aos.init();
  return (
    <>
      <main>
        <div className="hero-top-part">
          <h1 data-aos="zoom-in" data-aos-duration="2000">About Us</h1>
          <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'>Home</Link> &gt; <span>About us</span> </h6>
        </div>
        <WelcomeSection />
        <AboutEvent />
      </main>

    </>
  )
}

export default AboutUs