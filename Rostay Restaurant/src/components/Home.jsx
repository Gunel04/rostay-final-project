import FirstSliderSection from './home/FirstSliderSection'
import WelcomeToRostay from './home/WelcomeToRostay'
import SpecialMenu from './home/SpecialMenu'
import WhyChooseUs from './home/WhyChooseUs'
import OurCrew from './home/OurCrew'
import Experience from './home/Experience'
import Testimonials from './home/Testimonials'
import Faq from './home/Faq'
import Gallery from './home/Gallery'
import Recommendations from './home/Recommendations'

const Home = () => {
  return (
    <div>
      <FirstSliderSection />
      <WelcomeToRostay />
      <SpecialMenu />
      <WhyChooseUs />
      <Recommendations />
      <OurCrew />
      <Experience />
      <Testimonials />
      <Faq />
      <Gallery />
    </div>
  )
}

export default Home