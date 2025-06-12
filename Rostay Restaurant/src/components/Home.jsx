import React from 'react'
import FirstSliderSection from './home/FirstSliderSection'
import WelcomeToRostay from './home/WelcomeToRostay'
import TimeOfLuxury from './home/TimeOfLuxury'
import SpecialMenu from './home/SpecialMenu'
import WhyChooseUs from './home/WhyChooseUs'
import OurCrew from './home/OurCrew'
import Experience from './home/Experience'
import Testimonials from './home/Testimonials'

const Home = () => {
  return (
    <div>
      <FirstSliderSection />
      <WelcomeToRostay />
      <TimeOfLuxury />
      <SpecialMenu />
      <WhyChooseUs />
      <OurCrew />
      <Experience />
      <Testimonials />
    </div>
  )
}

export default Home