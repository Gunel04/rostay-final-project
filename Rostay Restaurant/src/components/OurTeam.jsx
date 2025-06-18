import React from 'react'
import { Link } from 'react-router-dom'

const OurTeam = () => {
    return (
        <main>
            <div className="our-team-top-part">
                <h1 data-aos="zoom-in" data-aos-duration="2000">Our Team</h1>
                <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'>Home</Link> &gt; <span>Our Team</span> </h6>
            </div>
            <div className="team-member-container">

            </div>
        </main>
    )
}

export default OurTeam