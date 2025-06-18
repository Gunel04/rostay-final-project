import Aos from 'aos'
import React from 'react'
import { GiCheckMark } from 'react-icons/gi'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const WhyChooseUs = () => {
    Aos.init();
    return (
        <section className='container-fluid choose-us-section'>
            <div className="choose-us-image" data-aos="fade-right" data-aos-duration="1500">
                <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/h1-banner04.jpg" alt="" />
            </div>
            <div className="choose-us-info" data-aos="fade-up" data-aos-duration="1500">
                <h5>Why Choose Us</h5>
                <h1>Enjoying the beautiful things</h1>
                <p className='p-1'>We are the perfect place to come for a special occasion dinner or a casual meal with friends.</p>
                <p className='p-2'>Whether you're hosting a corporate event, cocktail party, luncheon, dinner, meeting, shower, wedding reception, bat/bar mitzvah or rehearsal dinner, we know we can offer you and your guests a truly memorable event. We have a variety of private event spaces that can accommodate up to 180 guests.</p>
                <ul>
                    <li><GiCheckMark color='#f2b612' /> Carefully checked</li>
                    <li><GiCheckMark color='#f2b612' /> Expertly tested for safety</li>
                    <li><GiCheckMark color='#f2b612' /> Refund if found dirty food</li>
                    <li><GiCheckMark color='#f2b612' /> Meat & vegetables are always fresh</li>
                </ul>
                <Link to='/about'>
                    <button>Get Started <HiOutlineArrowLongRight size={20} /></button>
                </Link>
            </div>
        </section>
    )
}

export default WhyChooseUs