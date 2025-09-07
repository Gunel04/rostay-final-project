import { useState } from 'react'
import { GiShoppingCart } from 'react-icons/gi';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import { PiEyeThin } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist';
import slugify from 'slugify';
import Swal from 'sweetalert2';
import StaticLanguage from '../utils/StaticLanguage';

const SingleProduct = ({ item }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const { addItem, inCart, emptyCart } = useCart();
    const { addWishlistItem, inWishlist, removeWishlistItem } = useWishlist();
    return (
        <>
            <StaticLanguage
                en={
                    <div className="card" >
                        <div className="product-image-con">
                            <img src={item.image} height={370} className="card-img-top" alt={item.titleEn} />
                            <div className="hover-icons">
                                <button onClick={() => {
                                    if (user) {
                                        if (!inCart(item.id)) {
                                            Swal.fire({
                                                icon: "success",
                                                title: "Product is added to cart!"
                                            });
                                            addItem(item)
                                        }
                                        else {
                                            Swal.fire({
                                                icon: "warning",
                                                title: "Already in cart!"
                                            })
                                        }
                                    }
                                    else {
                                        emptyCart();
                                        Swal.fire({
                                            icon: "warning",
                                            title: "Please sign in to your account!"
                                        })
                                    }

                                }}><GiShoppingCart size={25} /></button>
                                <button onClick={() => {
                                    if (user) {
                                        if (!inWishlist(item.id)) {
                                            addWishlistItem(item);
                                        }
                                        else {
                                            removeWishlistItem(item.id);
                                        }
                                    }
                                    else {
                                        Swal.fire({
                                            icon: "warning",
                                            title: "Please sign in to your account!"
                                        })
                                    }

                                }}>{inWishlist(item.id) ? <IoIosHeart size={25} /> : <IoIosHeartEmpty size={25} />}</button>
                                <Link className='eye-btn' to={`/shop/${slugify(item.titleEn, { lower: true })}`}><PiEyeThin size={25} /></Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <h6 className="card-category">{item.categoryEn}</h6>
                            <h5 className="card-title">{item.titleEn}</h5>
                            <p className="card-text">{item.descriptionEn.slice(0, 50)}...</p>
                            <p className="card-price">${item.price}</p>
                        </div>
                    </div>
                }

                az={
                    <div className="card" >
                        <div className="product-image-con">
                            <img src={item.image} height={370} className="card-img-top" alt={item.titleAz} />
                            <div className="hover-icons">
                                <button onClick={() => {
                                    if (user) {
                                        if (!inCart(item.id)) {
                                            Swal.fire({
                                                icon: "success",
                                                title: "Məhsul səbətə əlavə edildi!"
                                            });
                                            addItem(item)
                                        }
                                        else {
                                            Swal.fire({
                                                icon: "warning",
                                                title: "Məhsul artıq səbətdədir!"
                                            })
                                        }
                                    }
                                    else {
                                        emptyCart();
                                        Swal.fire({
                                            icon: "warning",
                                            title: "Zəhmət olmasa hesabınıza daxil olun!"
                                        })
                                    }

                                }}><GiShoppingCart size={25} /></button>
                                <button onClick={() => {
                                    if (user) {
                                        if (!inWishlist(item.id)) {
                                            addWishlistItem(item);
                                        }
                                        else {
                                            removeWishlistItem(item.id);
                                        }
                                    }
                                    else {
                                        Swal.fire({
                                            icon: "warning",
                                            title: "Zəhmət olmasa hesabınıza daxil olun!"
                                        })
                                    }

                                }}>{inWishlist(item.id) ? <IoIosHeart size={25} /> : <IoIosHeartEmpty size={25} />}</button>
                                <Link className='eye-btn' to={`/shop/${slugify(item.titleEn, { lower: true })}`}><PiEyeThin size={25} /></Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <h6 className="card-category">{item.categoryAz}</h6>
                            <h5 className="card-title">{item.titleAz}</h5>
                            <p className="card-text">{item.descriptionAz.slice(0, 50)}...</p>
                            <p className="card-price">${item.price}</p>
                        </div>
                    </div>
                }
            />
        </>
    )
}

export default SingleProduct
