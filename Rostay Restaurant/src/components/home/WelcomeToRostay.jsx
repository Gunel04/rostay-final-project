import React from 'react'
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

const WelcomeToRostay = () => {
  return (
    <section className='welcome-section container-fluid'>
        <div className="welcome-image">
            <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/h1-banner01.jpg" alt="" />
        </div>
        <div className="welcome-texts">
            <h6>Welcome to Rostay</h6>
            <h1>Seasonal & delicious food menus</h1>
            <p>Welcome to our sophisticated restaurant in the heart of Venice. Enjoy stunning views of the beautiful city’s historic architecture with a glass of fine wine and delicate salami prepared by the world’s best chef</p>
            <button>Make a reservation <HiOutlineArrowLongRight size={20} /></button>
        </div>
    </section>
  )
}

export default WelcomeToRostay;