import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { deleteBlog } from '../../tools/actions/action';
import slugify from 'slugify';

const BlogDashboard = () => {
    const blogs = useSelector(p=>p.blog);
    console.log(blogs);
    
    const dispatch = useDispatch();
    return (
        <div className='container my-1 d-flex flex-column align-items-center justify-content-center'>
            <h1 className='text-center'>Blog Dashboard</h1>
            <div className="col-12">
                <Table bordered className='my-4'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Edit</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <img src={item.image} alt={item.titleEn} width={110} height={80} style={{ objectFit: "cover" }} />
                                </td>
                                <td>{item.titleEn}</td>
                                <td>{item.descriptionEn.slice(0,500)}...</td>
                                <td>{item.dateEn}</td>
                                <td><Link to={`/dashboard/blog/edit/${slugify(item.titleEn, { lower: true })}`} className='btn btn-warning'>Edit</Link></td>
                                <td><Button variant='danger' className='mx-auto' onClick={() => {
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
                                            dispatch(deleteBlog(item.id))
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
                <Link to='/dashboard/blog/add' className='btn btn-warning'>Add Blog</Link>
            </div>

        </div>
    )
}

export default BlogDashboard
