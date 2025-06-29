import React, { useState } from 'react'
import { Col, Form } from 'react-bootstrap'
import { PiEyeClosedThin, PiEyeSlashThin, PiEyeThin } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const Login = () => {
    const [isVisible, setIsVisible] = useState(false);

    const visibility = (p) => {
        setIsVisible(p => !p);
    }
    // console.log(isVisible);

    return (
        <>
            <main>
                <div className="login-top-part">
                    <h1 data-aos="zoom-in" data-aos-duration="2000">My Account</h1>
                    <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'>Home</Link> &gt; <span>My Account</span> </h6>
                </div>
                <section className="login-section container-fluid d-flex justify-content-center flex-column align-items-center">
                    <h1>Login</h1>
                    <Col lg={6} md={6} sm={7}>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" placeholder='Enter your email address' />
                            </div>
                            <div className="mt-4">
                                <label className="form-label">Password</label>
                                <div className="password-input">
                                    <input type={isVisible ? "text" : "password"} className="form-control" placeholder='Enter your password' />
                                    <a type='submit' className='eye-button' onClick={visibility}>{isVisible?<PiEyeThin size={22} />: <PiEyeClosedThin size={22} />}</a>

                                </div>
                            </div>
                            
                            <button type="submit">Log In</button>
                            <p>Don't have an account yet? Please <Link to='/register'>Sign up</Link></p>
                        </form>

                    </Col>
                </section>
            </main>
        </>
    )
}

export default Login