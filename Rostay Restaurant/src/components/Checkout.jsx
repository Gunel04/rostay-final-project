import { Button, Form, Table } from 'react-bootstrap'
import StaticLanguage from '../utils/StaticLanguage'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import slugify from 'slugify'
import { useContext, useRef, useState } from 'react'
import { CartTotalContext } from '../context/CartTotalContext'
import Swal from 'sweetalert2'

const Checkout = () => {
    const { items, cartTotal, emptyCart } = useCart();
    const [total, setTotal] = useContext(CartTotalContext);

    const [check, setCheck] = useState(false);

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const countryRef = useRef();
    const cityRef = useRef();
    const addressRef = useRef();
    const zipCodeRef = useRef();
    const cardNumberRef = useRef();
    const expDateRef = useRef();
    const cvvRef = useRef();

    const navigate = useNavigate();

    const checkoutHandleEn = (e) => {
        e.preventDefault();
        if (check) {
            if (!firstNameRef.current.value || !lastNameRef.current.value || !emailRef.current.value || !phoneRef.current.value || !countryRef.current.value || !cityRef.current.value || !addressRef.current.value || !zipCodeRef.current.value || !cardNumberRef.current.value || !expDateRef.current.value || !cvvRef.current.value) {
                Swal.fire({
                    icon: "warning",
                    title: "Please, enter all necessary information!"
                })
            }
            else {
                Swal.fire({
                    icon: "success",
                    title: "Checkout process is completed successfully!"
                })
                setTimeout(() => {
                    emptyCart();
                    navigate('/payment');
                }, 2000);
            }
        }
        else {
            Swal.fire({
                icon: "warning",
                title: "Please, accept all terms to complete checkout!"
            })
        }

    }

    const checkoutHandleAz = (e) => {
        e.preventDefault();
        if (check) {
            if (!firstNameRef.current.value || !lastNameRef.current.value || !emailRef.current.value || !phoneRef.current.value || !countryRef.current.value || !cityRef.current.value || !addressRef.current.value || !zipCodeRef.current.value || !cardNumberRef.current.value || !expDateRef.current.value || !cvvRef.current.value) {
                Swal.fire({
                    icon: "warning",
                    title: "Zəhmət olmasa, bütün lazım olan məlumatları daxil edin!"
                })
            }
            else {
                Swal.fire({
                    icon: "success",
                    title: "Ödəniş prosesi uğurla tamamlandı!"
                })
                setTimeout(() => {
                    emptyCart();
                    navigate('/payment');
                }, 2000);
            }
        }
        else {
            Swal.fire({
                icon: "warning",
                title: "Zəhmət olmasa, ödənişi tamamlamaq üçün bütün şərtləri qəbul edin!"
            })
        }

    }

    return (
        <main>
            <div className="cart-wishlist-checkout-top-part">
                <h1 data-aos="zoom-in" data-aos-duration="2000"><StaticLanguage en="Checkout" az="Sİfarİş" /></h1>
                <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'><StaticLanguage en="Home" az="Ana səhİfə" /></Link> &gt; <span><StaticLanguage en="Checkout" az="Sİfarİş" /></span> </h6>
            </div>
            <div className="checkout-section container-fluid">
                <div className="left-form-part" data-aos="fade-right" data-aos-duration="2000">
                    <StaticLanguage
                        en={
                            <Form onSubmit={checkoutHandleEn}>
                                <div className="contact-information">
                                    <h4>Contact Information</h4>
                                    <Form.Group className="name-field" controlId="formBasicEmail">
                                        <Form.Control className='form-input' type="text" placeholder="First name" ref={firstNameRef} />
                                        <Form.Control className='form-input' type="text" placeholder="Last name" ref={lastNameRef} />
                                    </Form.Group>
                                    <Form.Group className="email-phone-field" controlId="formBasicEmail">
                                        <Form.Control className='form-input' type="email" placeholder="Email address" ref={emailRef} />
                                        <Form.Control className='form-input' type="tel" placeholder="Phone" ref={phoneRef} />
                                    </Form.Group>
                                </div>
                                <div className="billing-address mt-5">
                                    <h4>Billing Address</h4>
                                    <Form.Group className="name-field" controlId="formBasicEmail">
                                        <Form.Control className='form-input' type="text" placeholder="Country" ref={countryRef} />
                                        <Form.Control className='form-input' type="text" placeholder="City" ref={cityRef} />
                                    </Form.Group>
                                    <Form.Group className="email-phone-field" controlId="formBasicEmail">
                                        <Form.Control className='form-input' type="text" placeholder="Address" ref={addressRef} />
                                        <Form.Control className='form-input' type="text" placeholder="ZIP code" ref={zipCodeRef} />
                                    </Form.Group>
                                </div>
                                <div className="card-information mt-5">
                                    <h4>Card Information</h4>

                                    <Form.Group className="email-phone-field" controlId="formBasicEmail">
                                        <Form.Control className='form-input' type="text" placeholder="Card number" ref={cardNumberRef} />

                                    </Form.Group>
                                    <Form.Group className="name-field" controlId="formBasicEmail">
                                        <Form.Control className='form-input' type="text" placeholder="Expiration Date" ref={expDateRef} />
                                        <Form.Control className='form-input' type="text" placeholder="CVV" ref={cvvRef} />
                                    </Form.Group>
                                </div>

                                <Form.Group className="my-4" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="I agree with the Terms and Privacy Policy" onChange={e => { setCheck(e.target.checked) }} />
                                </Form.Group>
                                <Button className='place-order' type="submit">
                                    Place Order
                                </Button>
                            </Form>
                        }
                        az={
                            <Form onSubmit={checkoutHandleAz}>
                                <div className="contact-information">
                                    <h4>Əlaqə Məlumatları</h4>
                                    <Form.Group className="name-field" controlId="formBasicEmail">
                                        <Form.Control className='form-input' type="text" placeholder="Ad" ref={firstNameRef} />
                                        <Form.Control className='form-input' type="text" placeholder="Soyad" ref={lastNameRef} />
                                    </Form.Group>
                                    <Form.Group className="email-phone-field" controlId="formBasicEmail">
                                        <Form.Control className='form-input' type="email" placeholder="Email ünvanı" ref={emailRef} />
                                        <Form.Control className='form-input' type="tel" placeholder="Telefon" ref={phoneRef} />
                                    </Form.Group>
                                </div>
                                <div className="billing-address mt-5">
                                    <h4>Faktura Ünvanı</h4>
                                    <Form.Group className="name-field" controlId="formBasicEmail">
                                        <Form.Control className='form-input' type="text" placeholder="Ölkə" ref={countryRef} />
                                        <Form.Control className='form-input' type="text" placeholder="Şəhər" ref={cityRef} />
                                    </Form.Group>
                                    <Form.Group className="email-phone-field" controlId="formBasicEmail">
                                        <Form.Control className='form-input' type="text" placeholder="Ünvan" ref={addressRef} />
                                        <Form.Control className='form-input' type="text" placeholder="Poçt indeksi" ref={zipCodeRef} />
                                    </Form.Group>
                                </div>
                                <div className="card-information mt-5">
                                    <h4>Kart Məlumatları</h4>

                                    <Form.Group className="email-phone-field" controlId="formBasicEmail">
                                        <Form.Control className='form-input' type="text" placeholder="Kart nömrəsi" ref={cardNumberRef} />

                                    </Form.Group>
                                    <Form.Group className="name-field" controlId="formBasicEmail">
                                        <Form.Control className='form-input' type="text" placeholder="Bitmə tarixi" ref={expDateRef} />
                                        <Form.Control className='form-input' type="text" placeholder="CVV" ref={cvvRef} />
                                    </Form.Group>
                                </div>

                                <Form.Group className="my-4" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Şərtlər və Məxfilik Siyasəti ilə razıyam" onChange={e => { setCheck(e.target.checked) }} />
                                </Form.Group>
                                <Button className='place-order' type="submit">
                                    Sifarişi Təsdiqlə
                                </Button>
                            </Form>
                        }

                    />
                    
                </div>
                <div className="right-order-summary-part" data-aos="fade-up" data-aos-duration="2000">
                    <h5>
                        <StaticLanguage en="Order summary" az="Sifariş Cədvəli"/>
                    </h5>
                    <Table className='checkout-table'>
                        <StaticLanguage
                            en={
                                <tbody>
                                    {items.map((item, index) => (
                                        <tr key={index}>
                                            <td>
                                                <img src={item.image} width={50} alt={item.titleEn} />
                                            </td>
                                            <td>
                                                <h5 className='cart-product-title'>
                                                    <Link to={`/shop/${slugify(item.titleEn, { lower: true })}`} style={{ textDecoration: "none" }}>{item.titleEn}</Link>
                                                </h5>
                                                <h6 className="cart-product-price">${item.price}</h6>
                                                <p className="cart-product-description">{item.descriptionEn.slice(0, 80)}...</p>
                                            </td>
                                            <td>
                                                <h5 className='subtotal-price'>${item.price * item.quantity}</h5>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            }
                            az={
                                <tbody>
                                    {items.map((item, index) => (
                                        <tr key={index}>
                                            <td>
                                                <img src={item.image} width={50} alt={item.titleAz} />
                                            </td>
                                            <td>
                                                <h5 className='cart-product-title'>
                                                    <Link to={`/shop/${slugify(item.titleEn, { lower: true })}`} style={{ textDecoration: "none" }}>{item.titleAz}</Link>
                                                </h5>
                                                <h6 className="cart-product-price">${item.price}</h6>
                                                <p className="cart-product-description">{item.descriptionAz.slice(0, 80)}...</p>
                                            </td>
                                            <td>
                                                <h5 className='subtotal-price'>${item.price * item.quantity}</h5>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            }
                        />
                    </Table>
                    <p className='total'><StaticLanguage en="Total amount: " az="Ümumi məbləğ: " /> <span>${cartTotal.toFixed(1)}</span></p>
                    <p className='total'><StaticLanguage en="Discount: " az="Endirim: " /> <span>${cartTotal === total ? 0 : (cartTotal * 0.2).toFixed(1)}</span></p>
                    <p className='total'><StaticLanguage en="Total Payable: " az="Ödəniləcək məbləğ: " /> <span>${total.toFixed(1)}</span></p>
                </div>
            </div>


        </main>
    )
}

export default Checkout
