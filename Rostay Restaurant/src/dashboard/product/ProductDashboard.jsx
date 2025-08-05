import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProduct } from '../../tools/actions/action'
import slugify from 'slugify'
import Swal from 'sweetalert2'

const ProductDashboard = () => {
    const products = useSelector(p => p.product);
    console.log(products);

    const dispatch = useDispatch();
    return (
        <div className='container my-1 d-flex flex-column align-items-center justify-content-center'>
            <h1 className='text-center'>Product Dashboard</h1>
            <div className="col-12">
                <Table bordered className='my-4'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Edit</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <img src={item.image} alt={item.title} width={110} height={80} style={{ objectFit: "cover" }} />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>${item.price}</td>
                                <td>{item.category}</td>
                                <td><Link to={`/dashboard/products/edit/${slugify(item.title, { lower: true })}`} className='btn btn-warning'>Edit</Link></td>
                                <td><Button variant='danger' className='ms-3' onClick={() => {
                                    Swal.fire({
                                        title: "Are you sure?",
                                        text: "You won't be able to revert this!",
                                        icon: "warning",
                                        showCancelButton: true,
                                        confirmButtonColor: "#3085d6",
                                        cancelButtonColor: "#d33",
                                        confirmButtonText: "Yes, delete it!"
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            dispatch(deleteProduct(item.id))
                                            Swal.fire({
                                                title: "Deleted!",
                                                text: "Your file has been deleted.",
                                                icon: "success"
                                            });
                                        }
                                    });
                                }}>X</Button></td>
                            </tr>
                        ))}


                    </tbody>
                </Table>
                <Link to='/dashboard/products/add' className='btn btn-warning'>Add Product</Link>
                <Link to='/shop' className='btn btn-warning'>Shop</Link>
            </div>

        </div>
    )
}

export default ProductDashboard