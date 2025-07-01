import { useState } from 'react';
import { Col } from 'react-bootstrap'
import { PiEyeClosedThin, PiEyeThin } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const Register = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);

    const visibility = () => {
        setIsVisible(p => !p);
    }

    const confirmVisibility = () => {
        setConfirmVisible(p=>!p)
    }
    // console.log(isVisible);
    return (
        <main>
            <div className="login-top-part">
                <h1 data-aos="zoom-in" data-aos-duration="2000">My Account</h1>
                <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'>Home</Link> &gt; <span>My Account</span> </h6>
            </div>
            <section className="login-section container-fluid d-flex justify-content-center flex-column align-items-center">
                <h1 data-aos="fade-up" data-aos-duration="2000">Register</h1>
                <Col lg={6} md={6} sm={7}>
                    <form data-aos="fade-up" data-aos-duration="2000">
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" placeholder='Enter your name' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Surname</label>
                            <input type="text" className="form-control" placeholder='Enter your surname' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" placeholder='Enter your username' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder='Enter your email address' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone number</label>
                            <input type="text" className="form-control" placeholder='Enter your phone number' />
                        </div>
                        <div className="mt-4">
                            <label className="form-label">Password</label>
                            <div className="password-input">
                                <input type={isVisible ? "text" : "password"} className="form-control" placeholder='Enter your password' />
                                <a type='submit' className='eye-button' onClick={visibility}>{isVisible ? <PiEyeThin size={22} /> : <PiEyeClosedThin size={22} />}</a>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="form-label">Confirm Password</label>
                            <div className="password-input">
                                <input type={confirmVisible ? "text" : "password"} className="form-control" placeholder='Confirm your password' />
                                <a type='submit' className='eye-button' onClick={confirmVisibility}>{confirmVisible ? <PiEyeThin size={22} /> : <PiEyeClosedThin size={22} />}</a>
                            </div>
                        </div>

                        <button type="submit">Register</button>
                    </form>

                </Col>
            </section>
        </main>
    )
}

export default Register