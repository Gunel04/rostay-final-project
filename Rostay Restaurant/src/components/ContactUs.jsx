import { CiClock1 } from 'react-icons/ci'
import { FaRegAddressBook } from 'react-icons/fa6'
import { MdSmartphone } from 'react-icons/md'
import { Link } from 'react-router-dom'
import StaticLanguage from '../utils/StaticLanguage'

const ContactUs = () => {
    return (
        <>
            <div className="contact-top-part">
                <h1 data-aos="zoom-in" data-aos-duration="2000">
                    <StaticLanguage en="Contact Us" az="Bizimlə Əlaqə" />
                </h1>
                <h6 data-aos="zoom-in" data-aos-duration="2000">
                    <Link to='/'>
                        <StaticLanguage en="Home" az="Ana səhifə" />
                    </Link> &gt; <span><StaticLanguage en="Contact Us" az="Bizimlə Əlaqə" /></span>
                </h6>
            </div>
            <section className="contact-us-section container-fluid">
                <div className="contact-left-part">
                    <h1>
                        <StaticLanguage en="Get In Touch With Us" az="Bİzİmlə Əlaqə Saxlayın" />
                    </h1>
                    <p>
                        <StaticLanguage en="Get in touch to discuss your employee wellbeing needs today. Please give us a call, drop us an email or fill out the contact form and we’ll get back to you." az="Təklif və suallarınız üçün bizimlə əlaqə saxlayın. Zəng edin, e-mail göndərin və ya əlaqə formasını doldurun – sizə ən qısa zamanda cavab verəcəyik." />
                    </p>
                    <div className="contact-icon-container">
                        <div className="contact-icons"><FaRegAddressBook size={45} /></div>
                        <div className="contact-icon-info">
                            <h3>
                                <StaticLanguage en="Address" az="Ünvan"/>
                            </h3>
                            <p>
                                <StaticLanguage en="Head Office: 785 15h Street," az="Baş ofis: 785 15-ci küçə,"/>
                            </p>
                            <p>
                                <StaticLanguage en="Office 478 Baku, De 81566" az="Ofis 478, Bakı, DE 81566"/>
                            </p>
                            <p>
                                <StaticLanguage en="Check Location" az="Yerləşməni yoxla"/>
                            </p>
                        </div>
                    </div>
                    <div className="contact-icon-container">
                        <div className="contact-icons"><MdSmartphone size={45} /></div>
                        <div className="contact-icon-info">
                            <h3>
                                <StaticLanguage en="Get in touch" az="Əlaqə vasİtələrİ"/>
                            </h3>
                            <p>
                                <StaticLanguage en="Mobile: 084 3456 19 89" az="Mobil: 084 3456 19 89"/>
                            </p>
                            <p>
                                <StaticLanguage en="Hotline: 1900 26886" az="Qaynar xətt: 1900 26886"/>
                            </p>
                            <p>E-mail: hello@hNICE.com</p>
                        </div>
                    </div>
                    <div className="contact-icon-container">
                        <div className="contact-icons"><CiClock1 size={45} /></div>
                        <div className="contact-icon-info">
                            <h3>
                                <StaticLanguage en="Hour of operation" az="İş saatları"/>
                            </h3>
                            <p>
                                <StaticLanguage en="Monday-Friday: 8:00 AM - 5:00 PM" az="Bazar ertəsi – Cümə: 08:00 – 17:00"/>
                            </p>
                            <p>
                                <StaticLanguage en="Saturday: 9am-Midday" az="Şənbə: 09:00 – 12:00"/>
                            </p>
                            <p>
                                <StaticLanguage en="Sunday: Closed" az="Bazar: Bağlıdır"/>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1976.4823504563785!2d49.841933915026864!3d40.37776221198146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6343917fff%3A0xae9045d8425faf97!2sMatrix%20academy!5e0!3m2!1saz!2saz!4v1751398777594!5m2!1saz!2saz" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </section>

        </>
    )
} 

export default ContactUs