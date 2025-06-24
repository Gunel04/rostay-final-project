import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const OurTeam = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <main>
            <div className="our-team-top-part">
                <h1 data-aos="zoom-in" data-aos-duration="2000">Our Team</h1>
                <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'>Home</Link> &gt; <span>Our Team</span> </h6>
            </div>
            <div className="team-member-container container-fluid">
                <div className="team-member-heading">
                    <h5>Amazing Team</h5>
                    <h1>Meet Our Chef</h1>
                </div>
                <div className="team-members">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-xl-4">
                            <div className="team-member-cards">
                                <div className="team-member-image">
                                    <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/team-1.jpg" className="card-img-top" alt="..." />
                                </div>


                                <div className="card-body">
                                    <h3 className='chef-name'>Alfred Mason</h3>
                                    <h5 className="card-title">Ceo & Founder</h5>
                                    <p className="card-text">Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis</p>
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-xl-4">
                            <div className="team-member-cards">
                                <div className="team-member-image">
                                    <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/team-2.jpg" className="card-img-top" alt="..." />
                                </div>

                                <div className="card-body">
                                    <h3 className='chef-name'>Jordan Harper</h3>
                                    <h5 className="card-title">Master Chef</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-xl-4">
                            <div className="team-member-cards">
                                <div className="team-member-image">
                                    <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/team-3.jpg" className="card-img-top" alt="..." />
                                </div>

                                <div className="card-body">
                                    <h3 className='chef-name'>Addie McKinney</h3>
                                    <h5 className="card-title">Pastry Chef</h5>
                                    <p className="card-text">Donec pede justo, fringilla vel, aliquet nec, vulputate eget. In enim justo, rhoncus ut, imperdiet a, venenatis vitae</p>
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-xl-4">
                            <div className="team-member-cards">
                                <div className="team-member-image">
                                    <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/team-4.jpg" className="card-img-top" alt="..." />
                                </div>

                                <div className="card-body">
                                    <h3 className='chef-name'>Jordan Tom</h3>
                                    <h5 className="card-title">Master Chef</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-xl-4">
                            <div className="team-member-cards">
                                <div className="team-member-image">
                                    <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/team-5.jpg" className="card-img-top" alt="..." />
                                </div>

                                <div className="card-body">
                                    <h3 className='chef-name'></h3>
                                    <h3 className='chef-name'>Alfred Mason</h3>
                                    <h5 className="card-title">Ceo & Founder</h5>
                                    <p className="card-text">Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis</p>
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-xl-4">
                            <div className="team-member-cards">
                                <div className="team-member-image">
                                    <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/03/team-6.jpg" className="card-img-top" alt="..." />
                                </div>

                                <div className="card-body">
                                    <h3 className='chef-name'>Harper Jordan</h3>
                                    <h5 className="card-title">Master Chef</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default OurTeam