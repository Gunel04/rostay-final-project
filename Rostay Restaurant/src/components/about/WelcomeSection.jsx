import React from 'react'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'

const WelcomeSection = () => {
    return (
        <div className="welcome-to-rostay container-fluid">
            <div className="welcome-left-image">
                <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/H3-image-2.jpg" alt="" />
            </div>
            <div className="welcome-center-text">
                <h6>Welcome To Rostay</h6>
                <h1>Serving Amazing Meals Since 2008</h1>
                <p>Welcome to our sophisticated restaurant in the heart of Venice Enjoy stunning views of the beautiful city's historic architecture with a glass of fine wine and delicate salami prepared by the world's best chef</p>
                <button>Make a Reservation <HiOutlineArrowLongRight size={20} /></button>
            </div>
            <div className="welcome-right-image">
                <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/about-image-1.jpg" alt="" />
            </div>
        </div>
    )
}

export default WelcomeSection