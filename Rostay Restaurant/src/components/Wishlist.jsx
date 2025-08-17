import React from 'react'
import { Table } from 'react-bootstrap'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { useWishlist } from 'react-use-wishlist'
import Swal from 'sweetalert2'

const Wishlist = () => {
    const { items, removeWishlistItem, isWishlistEmpty, emptyWishlist } = useWishlist();
    const { addItem, inCart } = useCart();
    return (
        <main>
            <div className="cart-wishlist-top-part">
                <h1 data-aos="zoom-in" data-aos-duration="2000">Wishlist</h1>
                <h6 data-aos="zoom-in" data-aos-duration="2000"><Link to='/'>Home</Link> &gt; <span>Wishlist</span> </h6>
            </div>
            {isWishlistEmpty ? <div className='empty-cart'><h1>Your wishlist is currently empty!</h1><Link to='/shop'><button>Back to Shop</button></Link></div> : <div className="wishlist-section container-fluid">
                <Table className='wishlist-table'>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <img src={item.image} width={100} alt="" />
                                </td>
                                <td>
                                    <h6>{item.title}</h6>
                                    <p>${item.price}</p>
                                </td>
                                <td>
                                    <button className="add-to-cart-btn" onClick={() => {
                                        if (!inCart(item.id)) {
                                            Swal.fire({
                                                icon: "success",
                                                title: "Product is added to the cart!"
                                            });
                                            addItem(item);
                                        }
                                        else {
                                            Swal.fire({
                                                icon: "warning",
                                                title: "Product is already in the cart!"
                                            })
                                        }

                                    }} >
                                        Add to Cart <HiOutlineArrowLongRight size={20} />
                                    </button>
                                </td>
                                <td>
                                    <button className='delete-wishlist-btn' onClick={() => removeWishlistItem(item.id)}>X</button>
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </Table>
                <button className='clear-wishlist-btn' onClick={() => {
                    Swal.fire({
                        title: "Are you sure you want to delete the product?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#072b31",
                        cancelButtonColor: "#072b31",
                        confirmButtonText: "Yes, delete it!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            emptyWishlist();
                            Swal.fire({
                                title: "Successfully deleted!",
                                text: "Your product has been deleted.",
                                icon: "success"
                            });
                        }
                    });
                }}>Clear Wishlist</button>
            </div>}

        </main>
    )
}

export default Wishlist
