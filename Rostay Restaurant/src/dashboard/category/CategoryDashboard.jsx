import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteCategory } from '../../tools/actions/action'
import slugify from 'slugify'

const CategoryDashboard = () => {

    const categories = useSelector(p => p);
    const dispatch = useDispatch();
    return (
        <div className='container my-3 d-flex flex-column align-items-center justify-content-center'>
            <h1 className='text-center'>Category Dashboard</h1>
            <div className="col-7">

                <Table striped bordered hover className='my-4'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Category Name</th>
                            {/* <th>Edit Category</th>
                        <th>Delete Category</th> */}
                        <th>#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.categoryName}</td>
                                <td><Link to={`/dashboard/category/edit/${slugify(item.categoryName, {lower:true})}`} className='btn btn-warning'>Edit</Link><Button variant='danger' className='mx-4' onClick={()=>{dispatch(deleteCategory(item.id))}}>X</Button></td>
                                {/* <td></td> */}
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Link to='/dashboard/category/add' className='btn btn-warning'>Add Category</Link>
                <Link to='/shop' className='btn btn-warning'>Shop</Link>
            </div>

        </div>
    )
}

export default CategoryDashboard