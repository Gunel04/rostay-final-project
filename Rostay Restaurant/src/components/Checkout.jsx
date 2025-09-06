import { Button, Form, Table } from 'react-bootstrap'
import StaticLanguage from '../utils/StaticLanguage'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import slugify from 'slugify'
import { useContext } from 'react'
import { CartTotalContext } from '../context/CartTotalContext'

const Checkout = () => {
    const { items } = useCart();
    const [total, setTotal] = useContext(CartTotalContext);
    return (
        <main>
            <div className="cart-wishlist-checkout-top-part">
                <h1 data-aos="zoom-in" data-aos-duration="2000"><StaticLanguage en="Checkout" az="Sİfarİş" /></h1>
                <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'><StaticLanguage en="Home" az="Ana səhİfə" /></Link> &gt; <span><StaticLanguage en="Checkout" az="Sİfarİş" /></span> </h6>
            </div>
            <div className="checkout-section container-fluid">
                <div className="left-form-part">
                    <Form>
                        <div className="contact-information">
                            <h4>Contact Information</h4>
                            <Form.Group className="name-field" controlId="formBasicEmail">
                                <Form.Control className='form-input' type="text" placeholder="First name" />
                                <Form.Control className='form-input' type="text" placeholder="Last name" />
                            </Form.Group>
                            <Form.Group className="email-phone-field" controlId="formBasicEmail">
                                <Form.Control className='form-input' type="email" placeholder="Email address" />
                                <Form.Control className='form-input' type="tel" placeholder="Phone" />
                            </Form.Group>
                        </div>
                        <div className="billing-address mt-5">
                            <h4>Billing Address</h4>
                            <Form.Group className="name-field" controlId="formBasicEmail">
                                <Form.Control className='form-input' type="text" placeholder="Country" />
                                <Form.Control className='form-input' type="text" placeholder="City" />
                            </Form.Group>
                            <Form.Group className="email-phone-field" controlId="formBasicEmail">
                                <Form.Control className='form-input' type="text" placeholder="Address" />
                                <Form.Control className='form-input' type="text" placeholder="ZIP code" />
                            </Form.Group>
                        </div>
                        <div className="card-information mt-5">
                            <h4>Card Information</h4>

                            <Form.Group className="email-phone-field" controlId="formBasicEmail">
                                <Form.Control className='form-input' type="text" placeholder="Card number" />
                                {/* <Form.Control className='form-input' type="text" placeholder="ZIP code" /> */}
                            </Form.Group>
                            <Form.Group className="name-field" controlId="formBasicEmail">
                                <Form.Control className='form-input' type="text" placeholder="Expiration Date" />
                                <Form.Control className='form-input' type="text" placeholder="CVV" />
                            </Form.Group>
                        </div>

                        <Form.Group className="my-4" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I agree with the Terms and Privacy Policy" />
                        </Form.Group>
                        <Button className='place-order' type="submit">
                            Place Order
                        </Button>
                    </Form>
                </div>
                <div className="right-order-summary-part">
                    <h5>Order summary</h5>
                    <Table className='checkout-table'>
                        {/* <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead> */}
                        <tbody>
                            {items.map((item, index) => (
                                <tr>
                                    <td>
                                        <img src={item.image} width={50} alt="" />
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
                    </Table>
                    <p className='total'><StaticLanguage en="Total: " az="Ümumi: " /> <span>${total.toFixed(1)}</span></p>
                </div>
            </div>


        </main>
    )
}

export default Checkout
