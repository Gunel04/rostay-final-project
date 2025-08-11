import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <main>
            <div className="cart-top-part">
                <h1 data-aos="zoom-in" data-aos-duration="2000">Cart</h1>
                <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'>Home</Link> &gt; <span>Cart</span> </h6>
            </div>
            <div className="container-fluid cart-section-part d-flex justify-content-between">
                <div className="left-cart-table">
                    <Table >
                        <thead>
                            <tr>
                                <th >#</th>
                                <th>Product</th>
                                <th></th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            
                        </tbody>
                    </Table>
                </div>
                <div className="right-cart-totals">
                    <h3>Cart Totals</h3>
                    <p>Add a coupon</p>
                    <form action="">
                        <input type="text" placeholder='Enter code'/>
                        <button>Apply</button>
                    </form>
                    <p>Total: $0</p>
                    <button>Proceed to checkout</button>
                </div>
            </div>
        </main>
    )
}

export default Cart
