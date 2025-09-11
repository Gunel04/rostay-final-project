import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProduct } from '../../tools/actions/action'
import slugify from 'slugify'
import Swal from 'sweetalert2'
import StaticLanguage from '../../utils/StaticLanguage'

const ProductDashboard = () => {
    const products = useSelector(p => p.product);
    console.log(products);

    const dispatch = useDispatch();
    return (
        <div className='container my-1 d-flex flex-column align-items-center justify-content-center'>
            <h1 className='text-center'>
                <StaticLanguage en="Product Dashboard" az="Məhsul İdarə Paneli" />
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
                                <StaticLanguage en="Price" az="Qiymət" />
                            </th>
                            <th>
                                <StaticLanguage en="Category" az="Kateqoriya" />
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
                                {products.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <img src={item.image} alt={item.titleEn} width={110} height={80} style={{ objectFit: "cover" }} />
                                        </td>
                                        <td>{item.titleEn}</td>
                                        <td>{item.descriptionEn}</td>
                                        <td>${item.price}</td>
                                        <td>{item.categoryEn}</td>
                                        <td><Link to={`/dashboard/products/edit/${slugify(item.titleEn, { lower: true })}`} className='btn btn-warning'>Edit</Link></td>
                                        <td><Button variant='danger' className='mx-auto' onClick={() => {
                                            Swal.fire({
                                                title: "c",
                                                icon: "warning",
                                                showCancelButton: true,
                                                confirmButtonColor: "#072b31",
                                                cancelButtonColor: "#072b31",
                                                confirmButtonText: "Yes, delete it!"
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    dispatch(deleteProduct(item.id))
                                                    Swal.fire({
                                                        title: "Deleted!",
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
                                {products.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <img src={item.image} alt={item.titleAz} width={110} height={80} style={{ objectFit: "cover" }} />
                                        </td>
                                        <td>{item.titleAz}</td>
                                        <td>{item.descriptionAz}</td>
                                        <td>${item.price}</td>
                                        <td>{item.categoryAz}</td>
                                        <td><Link to={`/dashboard/products/edit/${slugify(item.titleEn, { lower: true })}`} className='btn btn-warning'>Düzəliş</Link></td>
                                        <td><Button variant='danger' className='mx-auto' onClick={() => {
                                            Swal.fire({
                                                title: "Məhsulu silmək istədiyinizə əminsiniz?",
                                                icon: "warning",
                                                showCancelButton: true,
                                                confirmButtonColor: "#072b31",
                                                cancelButtonColor: "#072b31",
                                                confirmButtonText: "Bəli, silin!",
                                                cancelButtonText: "İmtina"
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    dispatch(deleteProduct(item.id))
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
                    
                </Table>
                <Link to='/dashboard/products/add' className='btn btn-warning'>
                <StaticLanguage en="Add Product" az="Məhsul Əlavə Et"/>
                </Link>
            </div>

        </div>
    )
}

export default ProductDashboard