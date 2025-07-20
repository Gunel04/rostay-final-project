import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductDashboard = () => {
    const products = useSelector(p => p.product);
    console.log(products);
    
    const dispatch = useDispatch();
    return (
        <div className='container my-3 d-flex flex-column align-items-center justify-content-center'>
            <h1 className='text-center'>Category Dashboard</h1>
            <div className="col-7">
                <Table striped bordered hover className='my-4'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Category</th>

                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => (
                            <tr>
                                <td>{index+1}</td>
                                <td>
                                    <img src={item.image} alt={item.title} width={110} height={80} style={{objectFit:"cover"}} />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>${item.price}</td>
                                <td>{item.category}</td>
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