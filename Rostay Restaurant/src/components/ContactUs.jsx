import React from 'react'
import { CiClock1 } from 'react-icons/ci'
import { FaRegAddressBook } from 'react-icons/fa6'
import { MdSmartphone } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ContactUs = () => {
    return (
        <main>
            <div className="contact-top-part">
                <h1 data-aos="zoom-in" data-aos-duration="2000">Contact Us</h1>
                <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'>Home</Link> &gt; <span>Contact Us</span> </h6>
            </div>
            <section className="contact-us-section container-fluid d-flex">
                <div className="col-5">
                    <h1>Get In Touch With Us</h1>
                    <p>Get in touch to discuss your employee wellbeing needs today. Please give us a call, drop us an email or fill out the contact form and we’ll get back to you.</p>
                    <div className="contact-icon-container">
                        <div className="contact-icons"><FaRegAddressBook size={45}/></div>
                        <div className="contact-icon-info">
                            <h3>Address</h3>
                            <p>Head Office: 785 15h Street,</p>
                            <p>Office 478 Berlin, De 81566</p>
                            <p>Check Location</p>
                        </div>
                    </div>
                    <div className="contact-icon-container">
                        <div className="contact-icons"><MdSmartphone size={45}/></div>
                        <div className="contact-icon-info">
                            <h3>Get in touch</h3>
                            <p>Mobile: 084 3456 19 89</p>
                            <p>Hotline: 1900 26886</p>
                            <p>E-mail: hello@hNICE.com</p>
                        </div>
                    </div>
                    <div className="contact-icon-container">
                        <div className="contact-icons"><CiClock1 size={45}/></div>
                        <div className="contact-icon-info">
                            <h3>Hour of operation</h3>
                            <p>Monday-Friday: 8am-5pm</p>
                            <p>Saturday: 9am-Midday</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d189.70878198820404!2d49.82576828627253!3d40.46773127840195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1saz!2saz!4v1751379006515!5m2!1saz!2saz" width={700} height={850} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                    

                </div>
            </section>
        </main>
    )
}

export default ContactUs