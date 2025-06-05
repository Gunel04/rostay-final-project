import React from 'react'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'

const OurCrew = () => {
    return (
        <section className="our-crew-section">
            <div className="our-crew-left">
                <img className='image-1' src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/team-image-02.jpg" alt="" />
                <img className='image-2' src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/team-image-03.jpg" alt="" />
                <h1>Restaurant</h1>
            </div>
            <div className="our-crew-center">
                <h5>Our Crew</h5>
                <h1>Chef dieter delicioz</h1>
                <p>Everyday Chef Delicioz sets himself the challenge to start from scratch – his tools: ingenuity, curiosity, enthusiasm, unparalleled talent and the highest craftsmanship.</p>
                <button>Our Team <HiOutlineArrowLongRight size={20} /></button>
            </div>
            <div className="our-crew-right">
                <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/image-team-1.jpg" alt="" />
            </div>
        </section>
    )
}

export default OurCrew