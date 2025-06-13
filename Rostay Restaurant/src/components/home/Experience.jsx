import Aos from 'aos'
import React from 'react'

const Experience = () => {
    Aos.init();
    return (
        <section className="experience-section container-fluid">
            <div className="experience-text" data-aos="fade-up" data-aos-duration="1500">
                <h5>Experience</h5>
                <h1>Exclusive Rostay Experiences</h1>
            </div>
            <div className="row">
                <div className="col-md-4 col-lg-4  col-xl-4">
                    <div className="experience-cards" data-aos="zoom-in-up" data-aos-duration="1500">
                        <div className="experience-card-img">
                            <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/H3-exclusive-1.jpg" alt="" />
                        </div>
                        <div className="experience-card-info">
                            <h1>Ambience</h1>
                            <h3>Unique Atmosphere</h3>
                            <p>Rostay Restaurant offers the perfect combination of sublime food, seamless service and an atmosphere of casual elegance</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4  col-xl-4">
                    <div className="experience-cards" data-aos="zoom-in-up" data-aos-duration="1500">
                        <div className="experience-card-img">
                            <img className='center-img' src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/H3-exclusive-2.jpg" alt="" />
                        </div>
                        <div className="experience-card-info">
                            <h1>Food & Wines</h1>
                            <h3>Selected Quality</h3>
                            <p>We offer a carefully prepared selection of culinary delights in favor of exquisite freshness and the highest standards.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4  col-xl-4">
                    <div className="experience-cards" data-aos="zoom-in-up" data-aos-duration="1500">
                        <div className="experience-card-img">
                            <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/H3-exclusive-3.jpg" alt="" />
                        </div>
                        <div className="experience-card-info">
                            <h1>The Cooking</h1>
                            <h3>The Chef Secrets</h3>
                            <p>Rostay Restaurant offers the perfect combination of sublime food, seamless service and an atmosphere of casual elegance</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience