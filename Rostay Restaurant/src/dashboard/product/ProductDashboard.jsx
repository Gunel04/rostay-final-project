import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProduct } from '../../tools/actions/action'
import slugify from 'slugify'

const ProductDashboard = () => {
    const products = useSelector(p => p.product);
    console.log(products);

    const dispatch = useDispatch();
    return (
        <div className='container my-3 d-flex flex-column align-items-center justify-content-center'>
            <h1 className='text-center'>Category Dashboard</h1>
            <div className="col-12">
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
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <img src={item.image} alt={item.title} width={110} height={80} style={{ objectFit: "cover" }} />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>${item.price}</td>
                                <td>{item.category}</td>
                                <td><Link to={`/dashboard/products/edit/${slugify(item.title, { lower: true })}`} className='btn btn-warning'>Edit</Link><Button variant='danger' className='ms-3' onClick={() => { dispatch(deleteProduct(item.id)) }}>X</Button></td>
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