import Aos from 'aos'
import React from 'react'

const Experience = () => {
    Aos.init();
    const experience = [
        {
            headingOne: "Ambience",
            headingTwo: "Unique Atmosphere",
            text: "Rostay Restaurant offers the perfect combination of sublime food, seamless service and an atmosphere of casual elegance"
        },
        {
            headingOne: "Food & Wines",
            headingTwo: "Selected Quality",
            text: "We offer a carefully prepared selection of culinary delights in favor of exquisite freshness and the highest standards."
        },
        {
            headingOne: "The Cooking",
            headingTwo: "The Chef Secrets",
            text: "Rostay Restaurant offers the perfect combination of sublime food, seamless service and an atmosphere of casual elegance"
        },
    ]
    return (
        <section className="experience-section container-fluid">
            <div className="experience-text" data-aos="fade-up" data-aos-duration="1500">
                <h5>Experience</h5>
                <h1>Exclusive Rostay Experiences</h1>
            </div>
            <div className="row">
                {experience.map((item, index) => (
                    <div className="col-md-4 col-lg-4 col-xl-4" key={index}>
                        <div className="experience-cards" data-aos="zoom-in-up" data-aos-duration="1500">
                            <div className="experience-card-img">
                                <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/H3-exclusive-1.jpg" alt="" />
                            </div>
                            <div className="experience-card-info">
                                <h1>{item.headingOne}</h1>
                                <h3>{item.headingTwo}</h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience