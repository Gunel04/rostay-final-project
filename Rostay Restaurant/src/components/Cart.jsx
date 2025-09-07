import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import slugify from 'slugify'
import Swal from 'sweetalert2'
import StaticLanguage from '../utils/StaticLanguage'
import { useContext, useRef, useState } from 'react'
import { CartTotalContext } from '../context/CartTotalContext'

const Cart = () => {
    const { items, updateItemQuantity, removeItem, isEmpty, cartTotal, emptyCart } = useCart();
    console.log(items);
    const [total, setTotal] = useContext(CartTotalContext);
    const [couponAlert, setCouponAlert] = useState("");
    const couponRef = useRef();

    const applyCoupon = (e) => {
        e.preventDefault();
        if (couponRef.current.value === "rostay20") {
            setTotal(cartTotal * 0.8);
            setCouponAlert("");
        }
        else {
            // setTotal(cartTotal);
            setCouponAlert("This code doesn't appear!");
        }
    }

    return (
        <main>
            <div className="cart-wishlist-checkout-top-part">
                <h1 data-aos="zoom-in" data-aos-duration="2000"><StaticLanguage en="Cart" az="Səbət" /></h1>
                <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'><StaticLanguage en="Home" az="Ana səhİfə" /></Link> &gt; <span><StaticLanguage en="Cart" az="Səbət" /></span> </h6>
            </div>
            {isEmpty ?
                <div className='empty-cart' data-aos="fade-up" data-aos-duration='2000'>
                    <h1>
                        <StaticLanguage en="Your cart is currently empty!" az="Səbətiniz hal-hazırda boşdur!" />
                    </h1>
                    <Link to='/shop'>
                        <button className='back-to-shop-btn'>
                            <StaticLanguage en="Back to Shop" az="Mağazaya qayıt" />
                        </button>
                    </Link>
                </div> :
                <div className="container-fluid cart-section-part">
                    <div className="left-cart-table" data-aos="fade-right" data-aos-duration="2000">
                        <StaticLanguage
                            en={
                                <Table className='cart-table'>
                                    <thead>
                                        <tr>
                                            <th >#</th>
                                            <th>Product</th>
                                            <th></th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <img src={item.image} width={180} height={220} alt="" style={{ objectFit: "cover" }} />
                                                </td>
                                                <td>
                                                    <h4 className='cart-product-title'>
                                                        <Link to={`/shop/${slugify(item.titleEn, { lower: true })}`} style={{ textDecoration: "none" }}>{item.titleEn}</Link>
                                                    </h4>
                                                    <h5 className="cart-product-price">${item.price}</h5>
                                                    <p className="cart-product-description">{item.descriptionEn.slice(0, 80)}...</p>
                                                    <div className="counter-con">
                                                        <button onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}>-</button>
                                                        <span className='mx-4'>{item.quantity}</span>
                                                        <button onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}>+</button>
                                                    </div>
                                                    <button className='remove-btn mt-2' onClick={() => {
                                                        Swal.fire({
                                                            title: "Are you sure you want to delete the product?",
                                                            icon: "warning",
                                                            showCancelButton: true,
                                                            confirmButtonColor: "#072b31",
                                                            cancelButtonColor: "#072b31",
                                                            confirmButtonText: "Yes, delete it!"
                                                        }).then((result) => {
                                                            if (result.isConfirmed) {
                                                                removeItem(item.id);
                                                                Swal.fire({
                                                                    title: "Successfully deleted!",
                                                                    text: "Your product has been deleted.",
                                                                    icon: "success"
                                                                });
                                                            }
                                                        });
                                                    }}>Remove Item</button>
                                                </td>
                                                <td className='table-total-price'>${item.quantity * item.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            }

                            az={
                                <Table className='cart-table'>
                                    <thead>
                                        <tr>
                                            <th >#</th>
                                            <th>Məhsul</th>
                                            <th></th>
                                            <th>Ümumi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <img src={item.image} width={180} height={220} alt="" style={{ objectFit: "cover" }} />
                                                </td>
                                                <td>
                                                    <h4 className='cart-product-title'>
                                                        <Link to={`/shop/${slugify(item.titleEn, { lower: true })}`} style={{ textDecoration: "none" }}>{item.titleAz}</Link>
                                                    </h4>
                                                    <h5 className="cart-product-price">${item.price}</h5>
                                                    <p className="cart-product-description">{item.descriptionAz.slice(0, 80)}...</p>
                                                    <div className="counter-con">
                                                        <button onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}>-</button>
                                                        <span className='mx-4'>{item.quantity}</span>
                                                        <button onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}>+</button>
                                                    </div>
                                                    <button className='remove-btn mt-2' onClick={() => {
                                                        Swal.fire({
                                                            title: "Məhsulu silmək istədiyinizə əminsiniz?",
                                                            icon: "warning",
                                                            showCancelButton: true,
                                                            confirmButtonColor: "#072b31",
                                                            cancelButtonColor: "#072b31",
                                                            confirmButtonText: "Bəli, silinsin!",
                                                            cancelButtonText: "İmtina!"
                                                        }).then((result) => {
                                                            if (result.isConfirmed) {
                                                                removeItem(item.id);
                                                                Swal.fire({
                                                                    title: "Uğurla silindi!",
                                                                    text: "Məhsulunuz silindi.",
                                                                    icon: "success"
                                                                });
                                                            }
                                                        });
                                                    }}>Məhsulu sil</button>
                                                </td>
                                                <td className='table-total-price'>${item.quantity * item.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            }

                        />

                        <button className='clear-all-btn' onClick={() => {
                            Swal.fire({
                                title: "Məhsulu silmək istədiyinizə əminsiniz?",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#072b31",
                                cancelButtonColor: "#072b31",
                                confirmButtonText: "Bəli, silinsin!",
                                cancelButtonText: "İmtina!"
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    emptyCart();
                                    Swal.fire({
                                        title: "Uğurla silindi!",
                                        text: "Məhsulunuz silindi.",
                                        icon: "success"
                                    });
                                }
                            });
                        }}><StaticLanguage en="Clear Cart" az="Səbətİ Təmİzlə" /></button>
                    </div>
                    <div className="right-cart-totals" data-aos="fade-up" data-aos-duration="2000">
                        <h3>
                            <StaticLanguage en="Cart Totals" az="Ümumi Məbləğ" />
                        </h3>
                        <hr />
                        <p className='add-coupon'>
                            <StaticLanguage en="Add a coupon" az="Kupon əlavə et" />
                        </p>
                        <form action="">
                            <StaticLanguage en={<input type="text" placeholder='Enter code' ref={couponRef} />} az={<input type="text" placeholder='Kodu daxil edin' ref={couponRef} />} />

                            <button onClick={applyCoupon}>
                                <StaticLanguage en="Apply" az="Tətbİq et" />
                            </button>
                        </form>
                        {couponAlert}
                        <p className='total'><StaticLanguage en="Total: " az="Ümumi: " /> <span>${total.toFixed(1)}</span></p>
                        <Link to='/checkout'>
                            <button className='checkout-btn' >
                                <StaticLanguage en="Proceed to checkout" az="Ödənİşə keç" />
                            </button>
                        </Link>
                    </div>
                </div>}

        </main>
    )
}

export default Cart
