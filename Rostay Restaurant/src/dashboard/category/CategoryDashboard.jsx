import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CategoryDashboard = () => {

    const categories = useSelector(p => p);
    return (
        <div className='container my-3'>
            <h1 className='text-center'>Category Dashboard</h1>
            <Table striped bordered hover className='my-4'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category Name</th>
                        <th>Edit Category</th>
                        <th>Delete Category</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((item,index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.categoryName}</td>
                            <td><Link to='/' className='btn btn-warning'>Edit</Link></td>
                            <td><Button variant='danger'>X</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Link to='/dashboard/category/add' className='btn btn-warning'>Add Category</Link>
            <Link to='/shop' className='btn btn-warning'>Shop</Link>

        </div>
    )
}

export default CategoryDashboard