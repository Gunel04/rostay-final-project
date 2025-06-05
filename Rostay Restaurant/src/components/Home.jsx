import React from 'react'
import FirstSliderSection from './home/FirstSliderSection'
import WelcomeToRostay from './home/WelcomeToRostay'
import TimeOfLuxury from './home/TimeOfLuxury'
import SpecialMenu from './home/SpecialMenu'
import WhyChooseUs from './home/WhyChooseUs'
import OurCrew from './home/OurCrew'

const Home = () => {
  return (
    <div>
      <FirstSliderSection />
      <WelcomeToRostay />
      <TimeOfLuxury />
      <SpecialMenu />
      <WhyChooseUs />
      <OurCrew />
    </div>
  )
}

export default Home