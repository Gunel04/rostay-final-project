import React, { useEffect, useState } from 'react'
import { Col, Form } from 'react-bootstrap'
import { PiEyeClosedThin, PiEyeSlashThin, PiEyeThin } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import supabase from '../../utils/supabase'
import Swal from 'sweetalert2'
import StaticLanguage from '../../utils/StaticLanguage'


const Login = () => {
    const [isVisible, setIsVisible] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    // useEffect(()=>{


    //     const passwordd = "mySecret123";
    //     const hashedPassword = await bcrypt.hash(passwordd, 10);
    //     console.log("Hash:", hashedPassword);

    //     // Şifrəni yoxlamaq (login zamanı)
    //     const isMatch = await bcrypt.compare(passwordd, hashedPassword);
    //     console.log("Doğrudur?", isMatch);
    // },[])


    const visibility = (p) => {
        setIsVisible(p => !p);
    }
    // console.log(isVisible);

    const handleLoginFormEn = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            Swal.fire({
                icon: "warning",
                title: "Please enter correct credentials!"
            })
        }
        else {
            const { data: user, error } = await supabase
                .from('rostay-users')
                .select("*")
                .eq('email', email)
                .single();
            if (error || !user) {
                console.log("Email is not found!", error);
                return;
            }
            if (password !== user.password) {
                Swal.fire({
                    icon: "error",
                    title: "Password is incorrect!"
                })
                return;
            }
            Swal.fire({
                icon: "success",
                title: "Login is completed successfully!"
            })

            localStorage.setItem('user', JSON.stringify({ id: user.id, email: user.email, password: user.password, username: user.username }))

            setTimeout(() => {
                window.location.assign('/');
            }, 2000);
        }

    }
    const handleLoginFormAz = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            Swal.fire({
                icon: "warning",
                title: "Zəhmət olmasa düzgün məlumatları daxil edin!"
            })
        }
        else {
            const { data: user, error } = await supabase
                .from('rostay-users')
                .select("*")
                .eq('email', email)
                .single();
            if (error || !user) {
                console.log("Email is not found!", error);
                return;
            }
            if (password !== user.password) {
                Swal.fire({
                    icon: "error",
                    title: "Şifrə yanlışdır!"
                })
                return;
            }
            Swal.fire({
                icon: "success",
                title: "Uğurla daxil oldunuz!"
            })

            localStorage.setItem('user', JSON.stringify({ id: user.id, email: user.email, password: user.password, username: user.username }))

            setTimeout(() => {
                window.location.assign('/');
            }, 2000);
        }

    }

    return (
        <>
            <StaticLanguage
                en={
                    <main>
                        <div className="login-top-part">
                            <h1 data-aos="zoom-in" data-aos-duration="2000">My Account</h1>
                            <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'>Home</Link> &gt; <span>My Account</span> </h6>
                        </div>
                        <section className="login-section container-fluid d-flex justify-content-center flex-column align-items-center" >
                            <h1 data-aos="fade-up" data-aos-duration="2000">Login</h1>
                            <Col lg={6} md={6} sm={7}>
                                <form data-aos="fade-up" data-aos-duration="2000" onSubmit={handleLoginFormEn}>
                                    <div className="mb-3">
                                        <label className="form-label">Email address</label>
                                        <input type="email" className="form-control" placeholder='Enter your email address' onChange={e => setEmail(e.target.value)} />
                                    </div>
                                    <div className="mt-4">
                                        <label className="form-label">Password</label>
                                        <div className="password-input">
                                            <input type={isVisible ? "text" : "password"} className="form-control" placeholder='Enter your password' onChange={e => setPassword(e.target.value)} />
                                            <a type='submit' className='eye-button' onClick={visibility}>{isVisible ? <PiEyeThin size={22} /> : <PiEyeClosedThin size={22} />}</a>
                                        </div>
                                    </div>
                                    <button type="submit">Log In</button>
                                    <p>Don't have an account yet? Please <Link to='/register'>Sign up</Link></p>
                                </form>
                            </Col>
                        </section>
                    </main>
                }

                az={
                    <main>
                        <div className="login-top-part">
                            <h1 data-aos="zoom-in" data-aos-duration="2000">Hesabım</h1>
                            <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'>Ana Səhifə</Link> &gt; <span>Hesabım</span> </h6>
                        </div>
                        <section className="login-section container-fluid d-flex justify-content-center flex-column align-items-center" >
                            <h1 data-aos="fade-up" data-aos-duration="2000">Daxİl ol</h1>
                            <Col lg={6} md={6} sm={7}>
                                <form data-aos="fade-up" data-aos-duration="2000" onSubmit={handleLoginFormAz}>
                                    <div className="mb-3">
                                        <label className="form-label">Email ünvanı</label>
                                        <input type="email" className="form-control" placeholder='Email ünvanınızı daxil edin' onChange={e => setEmail(e.target.value)} />
                                    </div>
                                    <div className="mt-4">
                                        <label className="form-label">Şifrə</label>
                                        <div className="password-input">
                                            <input type={isVisible ? "text" : "password"} className="form-control" placeholder='Şifrənizi daxil edin' onChange={e => setPassword(e.target.value)} />
                                            <a type='submit' className='eye-button' onClick={visibility}>{isVisible ? <PiEyeThin size={22} /> : <PiEyeClosedThin size={22} />}</a>
                                        </div>
                                    </div>
                                    <button type="submit">Daxil ol</button>
                                    <p>Hesabınız yoxdur? Zəhmət olmasa <Link to='/register'>Qeydiyyatdan keçin</Link></p>
                                </form>
                            </Col>
                        </section>
                    </main>
                }

            />
            {/* <main>
                <div className="login-top-part">
                    <h1 data-aos="zoom-in" data-aos-duration="2000">My Account</h1>
                    <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'>Home</Link> &gt; <span>My Account</span> </h6>
                </div>
                <section className="login-section container-fluid d-flex justify-content-center flex-column align-items-center" >
                    <h1 data-aos="fade-up" data-aos-duration="2000">Login</h1>
                    <Col lg={6} md={6} sm={7}>
                        <form data-aos="fade-up" data-aos-duration="2000" onSubmit={handleLoginForm}>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" placeholder='Enter your email address' onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="mt-4">
                                <label className="form-label">Password</label>
                                <div className="password-input">
                                    <input type={isVisible ? "text" : "password"} className="form-control" placeholder='Enter your password' onChange={e => setPassword(e.target.value)} />
                                    <a type='submit' className='eye-button' onClick={visibility}>{isVisible ? <PiEyeThin size={22} /> : <PiEyeClosedThin size={22} />}</a>
                                </div>
                            </div>
                            <button type="submit">Log In</button>
                            <p>Don't have an account yet? Please <Link to='/register'>Sign up</Link></p>
                        </form>
                    </Col>
                </section>
            </main> */}
        </>
    )
}

export default Login