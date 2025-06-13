import React from 'react'
import { Link } from 'react-router-dom'
import WelcomeSection from './about/WelcomeSection'
import AboutEvent from './about/AboutEvent'

const AboutUs = () => {
  return (
    <>
      <main>
        <div className="hero-top-part">
          <h1>About Us</h1>
          <h6><Link to='/'>Home</Link> &gt; <span>About us</span> </h6>
        </div>
        <WelcomeSection />
        <AboutEvent />
      </main>

    </>
  )
}

export default AboutUs