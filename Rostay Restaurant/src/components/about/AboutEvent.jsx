import React from 'react'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'

const AboutEvent = () => {
    return (
        <section className="about-event-section container-fluid">
            <div className="about-event" data-aos="fade-up" data-aos-duration="2500">
                <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/about-image-box-1.jpg" alt="" />
                <div className="about-text-part">
                    <h1>Special Event</h1>
                    <p>Perfect for all kinds of meetings including business sessions, strategy days and team bonding activities for up to 62. Available in combination with dining packages or on it's own with pastries, coffees and cold drinks to keep the team fueled.</p>
                    <button>Discover Now <HiOutlineArrowLongRight size={20} /></button>
                </div>

            </div>
            <div className="about-event" data-aos="fade-up" data-aos-duration="2500">
                <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/about-image-box-2.jpg" alt="" />
                <div className="about-text-part">
                    <h1>Group Booking</h1>
                    <p>With a capacity for 28 seated guests this option will suit larger gatherings. Smaller parties will benefit from the additional space if drinks reception area is required. Available in combination with dining packages or on its own with pastries, coffees and cold drinks to keep the team fueled.</p>
                    <button>Discover Now <HiOutlineArrowLongRight size={20} /></button>
                </div>

            </div>
        </section>
    )
}

export default AboutEvent