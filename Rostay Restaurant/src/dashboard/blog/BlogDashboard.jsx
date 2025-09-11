import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { deleteBlog } from '../../tools/actions/action';
import slugify from 'slugify';
import StaticLanguage from '../../utils/StaticLanguage';

const BlogDashboard = () => {
    const blogs = useSelector(p => p.blog);
    console.log(blogs);

    const dispatch = useDispatch();
    return (
        <div className='container my-1 d-flex flex-column align-items-center justify-content-center'>
            <h1 className='text-center'>
                <StaticLanguage en="Blog Dashboard" az="Bloq İdarə Paneli" />
            </h1>
            <div className="col-12">
                <Table bordered className='my-4'>
                    <thead>
                        <tr>
                            <th>
                                <StaticLanguage en="Id" az="Id" />

                            </th>
                            <th>
                                <StaticLanguage en="Image" az="Şəkil" />
                            </th>
                            <th>
                                <StaticLanguage en="Title" az="Başlıq" />
                            </th>
                            <th>
                                <StaticLanguage en="Description" az="Təsvir" />
                            </th>
                            <th>
                                <StaticLanguage en="Date" az="Tarix" />
                            </th>

                            <th>
                                <StaticLanguage en="Edit" az="Düzəliş" />
                            </th>
                            <th>
                                <StaticLanguage en="Delete" az="Sil" />
                            </th>
                        </tr>
                    </thead>
                    <StaticLanguage
                        en={
                            <tbody>
                                {blogs.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <img src={item.image} alt={item.titleEn} width={110} height={80} style={{ objectFit: "cover" }} />
                                        </td>
                                        <td>{item.titleEn}</td>
                                        <td>{item.descriptionEn.slice(0, 500)}...</td>
                                        <td>{item.dateEn}</td>
                                        <td><Link to={`/dashboard/blog/edit/${slugify(item.titleEn, { lower: true })}`} className='btn btn-warning'>Edit</Link></td>
                                        <td><Button variant='danger' className='mx-auto' onClick={() => {
                                            Swal.fire({
                                                title: "Are you sure you want to delete this blog??",
                                                icon: "warning",
                                                showCancelButton: true,
                                                confirmButtonColor: "#072b31",
                                                cancelButtonColor: "#072b31",
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
                        }

                        az={
                            <tbody>
                                {blogs.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <img src={item.image} alt={item.titleAz} width={110} height={80} style={{ objectFit: "cover" }} />
                                        </td>
                                        <td>{item.titleAz}</td>
                                        <td>{item.descriptionAz.slice(0, 500)}...</td>
                                        <td>{item.dateAz}</td>
                                        <td><Link to={`/dashboard/blog/edit/${slugify(item.titleEn, { lower: true })}`} className='btn btn-warning'>Düzəliş</Link></td>
                                        <td><Button variant='danger' className='mx-auto' onClick={() => {
                                            Swal.fire({
                                                title: "Bloqu silmək istədiyinizə əminsiniz?",
                                                icon: "warning",
                                                showCancelButton: true,
                                                confirmButtonColor: "#072b31",
                                                cancelButtonColor: "#072b31",
                                                confirmButtonText: "Bəli, silin!",
                                                cancelButtonText: "İmtina"
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    dispatch(deleteBlog(item.id))
                                                    Swal.fire({
                                                        title: "Silindi!",
                                                        icon: "success"
                                                    });
                                                }
                                            });
                                        }}>X</Button></td>
                                    </tr>
                                ))}


                            </tbody>
                        }
                    />
                    {/* <tbody>
                        {blogs.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <img src={item.image} alt={item.titleEn} width={110} height={80} style={{ objectFit: "cover" }} />
                                </td>
                                <td>{item.titleEn}</td>
                                <td>{item.descriptionEn.slice(0, 500)}...</td>
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


                    </tbody> */}
                </Table>
                <Link to='/dashboard/blog/add' className='btn btn-warning'>
                    <StaticLanguage en="Add Blog" az="Bloq Əlavə Et" />
                </Link>
            </div>

        </div>
    )
}

export default BlogDashboard
