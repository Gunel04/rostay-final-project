import { useState } from 'react';
import { Col } from 'react-bootstrap'
import { PiEyeClosedThin, PiEyeThin } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import supabase from '../../utils/supabase';

const Register = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // const a = "Gunel_04!"
    // console.log(a.includes('_' && '?'));

    const visibility = () => {
        setIsVisible(p => !p);
    }

    const confirmVisibility = () => {
        setConfirmVisible(p => !p)
    }

    const handleRegisterForm = async (e) => {
        e.preventDefault();
        if (!name || !surname || !username || !phone || !email || !password || !confirmPassword) {
            Swal.fire({
                icon: "warning",
                title: "Please, fill all the fields!"
            })
        }
        else if (password.length < 8) {
            Swal.fire({
                icon: "warning",
                title: "Password must contain at least 8 characters!"
            })
        }
        else if (!password.includes('_' || '!' || '@' || '#' || '$' || '%' || '^' || '&' || '*' || '(' || ')' || '=' || '+' || '-' || '{' || "}" || '[' || ']' || ':' || ';' || '?' || '/' || '<' || '>')) {
            Swal.fire({
                icon: "warning",
                title: "Password must contain at least one special character!"
            })

        }
        else if (password !== confirmPassword) {
            Swal.fire({
                icon: "warning",
                title: "Please, confirm password again!"
            })
        }
        else {
            const createUser = async () => {
                const { error } = await supabase
                    .from('rostay-users')
                    .insert([{ name, surname, username, email, phone, password, token: crypto.randomUUID() }])

                if (error) {
                    console.log("Error:", error);
                }
                else {
                    Swal.fire({
                        icon: "success",
                        title: "New account has been created successfully!"
                    })
                    setTimeout(() => {
                        window.location.assign('/login');
                    }, 1500);
                }
            }
            // createUser();
            const { data } = await supabase
                .from('rostay-users')
                .select();
            // data.length === 0 ? createUser() : 
            if (data.length === 0) {
                createUser();
            }
            else {
                data.find(p => p.email === email) ?
                    Swal.fire({
                        icon: "warning",
                        title: "Impossible to register with the same email address!"
                    }) : createUser();
            }

        }

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
                    <form data-aos="fade-up" data-aos-duration="2000" onSubmit={handleRegisterForm}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" placeholder='Enter your name' onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Surname</label>
                            <input type="text" className="form-control" placeholder='Enter your surname' onChange={e => setSurname(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" placeholder='Enter your username' onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder='Enter your email address' onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone number</label>
                            <input type="text" className="form-control" placeholder='Enter your phone number' onChange={e => setPhone(e.target.value)} />
                        </div>
                        <div className="mt-4">
                            <label className="form-label">Password</label>
                            <div className="password-input">
                                <input type={isVisible ? "text" : "password"} className="form-control" placeholder='Enter your password' onChange={e => setPassword(e.target.value)} />
                                <a type='submit' className='eye-button' onClick={visibility}>{isVisible ? <PiEyeThin size={22} /> : <PiEyeClosedThin size={22} />}</a>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="form-label">Confirm Password</label>
                            <div className="password-input">
                                <input type={confirmVisible ? "text" : "password"} className="form-control" placeholder='Confirm your password' onChange={e => setConfirmPassword(e.target.value)} />
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