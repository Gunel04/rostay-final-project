import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteCategory } from '../../tools/actions/action'
import slugify from 'slugify'
import Swal from 'sweetalert2'
import StaticLanguage from '../../utils/StaticLanguage'

const CategoryDashboard = () => {

    const categories = useSelector(p => p.category);
    console.log(categories);

    const dispatch = useDispatch();
    return (
        <div className='container d-flex flex-column align-items-center justify-content-start' style={{ height: "100vh" }}>
            <h1 className='text-center'>
                <StaticLanguage en="Category Dashboard" az="Kateqoriya İdarə Paneli" />
            </h1>
            <div className="col-7">

                <Table bordered className='my-4'>
                    <thead style={{ backgroundColor: "#072b31" }}>
                        <tr>
                            <th>#</th>
                            <th>
                                <StaticLanguage en="Category Name" az="Kateqoriya adı" />
                            </th>
                            <th>#</th>
                        </tr>
                    </thead>
                    <StaticLanguage
                        en={
                            <tbody style={{ backgroundColor: "#072b31" }}>
                                {categories.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.categoryNameEn}</td>
                                        <td><Link to={`/dashboard/category/edit/${slugify(item.categoryNameEn, { lower: true })}`} className='btn btn-warning'>Edit</Link><Button variant='danger' className='mx-4' onClick={() => {
                                            {
                                                Swal.fire({
                                                    title: "Are you sure you want to delete this category??",
                                                    icon: "warning",
                                                    showCancelButton: true,
                                                    confirmButtonColor: "#072b31",
                                                    cancelButtonColor: "#072b31",
                                                    confirmButtonText: "Yes, delete it!"
                                                }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        dispatch(deleteCategory(item.id))
                                                        Swal.fire({
                                                            title: "Deleted!",
                                                            icon: "success"
                                                        });
                                                    }
                                                });
                                            }
                                        }}>X</Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        }

                        az={
                            <tbody style={{ backgroundColor: "#072b31" }}>
                                {categories.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.categoryNameAz}</td>
                                        <td><Link to={`/dashboard/category/edit/${slugify(item.categoryNameEn, { lower: true })}`} className='btn btn-warning'>Düzəliş</Link><Button variant='danger' className='mx-4' onClick={() => {
                                            {
                                                Swal.fire({
                                                    title: "Kateqoriyanı silmək istədiyinizə əminsiniz?",
                                                    icon: "warning",
                                                    showCancelButton: true,
                                                    confirmButtonColor: "#072b31",
                                                    cancelButtonColor: "#072b31",
                                                    confirmButtonText: "Bəli, silin!",
                                                    cancelButtonText: "İmtina"
                                                }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        dispatch(deleteCategory(item.id))
                                                        Swal.fire({
                                                            title: "Silindi!",
                                                            icon: "success"
                                                        });
                                                    }
                                                });
                                            }
                                        }}>X</Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        }

                    />
                    {/* <tbody style={{ backgroundColor: "#072b31" }}>
                        {categories.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.categoryNameEn}</td>
                                <td><Link to={`/dashboard/category/edit/${slugify(item.categoryNameEn, { lower: true })}`} className='btn btn-warning'>Edit</Link><Button variant='danger' className='mx-4' onClick={() => {
                                    {
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
                                                dispatch(deleteCategory(item.id))
                                                Swal.fire({
                                                    title: "Deleted!",
                                                    text: "Your file has been deleted.",
                                                    icon: "success"
                                                });
                                            }
                                        });
                                    }
                                }}>X</Button></td>
                            </tr>
                        ))}
                    </tbody> */}
                </Table>
                <Link to='/dashboard/category/add' className='btn btn-warning'>
                <StaticLanguage en="Add Category" az="Kateqoriya Əlavə Et"/>
                </Link>
            </div>

        </div>
    )
}

export default CategoryDashboard