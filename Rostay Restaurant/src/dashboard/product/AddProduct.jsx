import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { addProduct } from '../../tools/actions/action'
import StaticLanguage from '../../utils/StaticLanguage'

const AddProduct = () => {
    const categories = useSelector(p => p.category)

    const [image, setImage] = useState("");
    const [titleEn, setTitleEn] = useState("");
    const [titleAz, setTitleAz] = useState("");
    const [descriptionEn, setDescriptionEn] = useState("");
    const [descriptionAz, setDescriptionAz] = useState("");
    const [price, setPrice] = useState("");
    const [categoryEn, setCategoryEn] = useState("");
    const [categoryAz, setCategoryAz] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // console.log(category);

    const addingProductEn = (e) => {
        e.preventDefault();
        if (!image || !titleEn || !titleAz || !descriptionEn || !descriptionAz || !price || !categoryEn || !categoryAz) {
            Swal.fire({
                icon: "warning",
                title: "Please enter products information comprehensively!"
            })
        }
        else if (categoryEn === "Select Category" || categoryAz === "Select Category") {
            Swal.fire({
                icon: "warning",
                title: "Please select category!"
            })
        }
        else if (price <= 0) {
            Swal.fire({
                icon: "warning",
                title: "Impossible negative price!"
            })
        }
        else {
            dispatch(addProduct({ image, titleEn, titleAz, descriptionEn, descriptionAz, price, categoryEn, categoryAz }));
            navigate('/dashboard/products');
        }
    }

    const addingProductAz = (e) => {
        e.preventDefault();
        if (!image || !titleEn || !titleAz || !descriptionEn || !descriptionAz || !price || !categoryEn || !categoryAz) {
            Swal.fire({
                icon: "warning",
                title: "Zəhmət olmasa məhsul məlumatlarını tam şəkildə daxil edin!"
            })
        }
        else if (categoryEn === "Kateqoriya seçin" || categoryAz === "Kateqoriya seçin") {
            Swal.fire({
                icon: "warning",
                title: "Zəhmət olmasa kateqoriya seçin!"
            })
        }
        else if (price <= 0) {
            Swal.fire({
                icon: "warning",
                title: "Mənfi qiymət qeyri-mümkündür!"
            })
        }
        else {
            dispatch(addProduct({ image, titleEn, titleAz, descriptionEn, descriptionAz, price, categoryEn, categoryAz }));
            navigate('/dashboard/products');
        }
    }

    return (
        <div className='container d-flex flex-column align-items-center my-2'>
            <h1>
                <StaticLanguage en="Add Product" az="Məhsul Əlavə Et" />

            </h1>
            <div className="col-6 my-4">

                <StaticLanguage
                    en={
                        <Form onSubmit={addingProductEn}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control type="text" placeholder="Enter product image..." onChange={e => setImage(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Product Name (en)</Form.Label>
                                <Form.Control type="text" placeholder="Enter product name..." onChange={e => setTitleEn(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Product Name (az)</Form.Label>
                                <Form.Control type="text" placeholder="Enter product name..." onChange={e => setTitleAz(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Product Description (en)</Form.Label>
                                <Form.Control type="text" placeholder="Enter product description..." onChange={e => setDescriptionEn(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Product Description (az)</Form.Label>
                                <Form.Control type="text" placeholder="Enter product description..." onChange={e => setDescriptionAz(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Product Price</Form.Label>
                                <Form.Control type="number" placeholder="Enter product price..." onChange={e => setPrice(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Product Category (en)</Form.Label>
                                <Form.Select className='mb-3' aria-label="Default select example" onChange={e => setCategoryEn(e.target.value)}>
                                    <option value="Select Category">Select Category</option>
                                    {categories.map((item, index) => (
                                        <option key={index} value={item.categoryNameEn}>{item.categoryNameEn}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Product Category (az)</Form.Label>
                                <Form.Select className='mb-3' aria-label="Default select example" onChange={e => setCategoryAz(e.target.value)}>
                                    <option value="Select Category">Select Category</option>
                                    {categories.map((item, index) => (
                                        <option key={index} value={item.categoryNameAz}>{item.categoryNameAz}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>

                            <Button variant="outline-warning" type="submit">
                                Add Product
                            </Button>
                        </Form>
                    }

                    az={
                        <Form onSubmit={addingProductAz}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Şəkil URL</Form.Label>
                                <Form.Control type="text" placeholder="Məhsulun şəklini daxil edin..." onChange={e => setImage(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Məhsulun Adı (en)</Form.Label>
                                <Form.Control type="text" placeholder="Məhsulun adını daxil edin..." onChange={e => setTitleEn(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Məhsulun Adı (az)</Form.Label>
                                <Form.Control type="text" placeholder="Məhsulun adını daxil edin..." onChange={e => setTitleAz(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Məhsulun Təsviri (en)</Form.Label>
                                <Form.Control type="text" placeholder="Məhsulun təsvirini daxil edin..." onChange={e => setDescriptionEn(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Məhsulun Təsviri (az)</Form.Label>
                                <Form.Control type="text" placeholder="Məhsulun təsvirini daxil edin..." onChange={e => setDescriptionAz(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Məhsulun Qiyməti</Form.Label>
                                <Form.Control type="number" placeholder="Məhsulun qiymətini daxil edin..." onChange={e => setPrice(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Məhsul Kateqoriyası (en)</Form.Label>
                                <Form.Select className='mb-3' aria-label="Default select example" onChange={e => setCategoryEn(e.target.value)}>
                                    <option value="Kateqoriya seçin">Kateqoriya seçin</option>
                                    {categories.map((item, index) => (
                                        <option key={index} value={item.categoryNameEn}>{item.categoryNameEn}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Məhsul Kateqoriyası (az)</Form.Label>
                                <Form.Select className='mb-3' aria-label="Default select example" onChange={e => setCategoryAz(e.target.value)}>
                                    <option value="Kateqoriya seçin">Kateqoriya seçin</option>
                                    {categories.map((item, index) => (
                                        <option key={index} value={item.categoryNameAz}>{item.categoryNameAz}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>

                            <Button variant="outline-warning" type="submit">
                                Məhsul Əlavə Et
                            </Button>
                        </Form>
                    }
                />
                {/* <Form onSubmit={addingProduct}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image Url</Form.Label>
                        <Form.Control type="text" placeholder="Enter product image..." onChange={e => setImage(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Name (en)</Form.Label>
                        <Form.Control type="text" placeholder="Enter product name..." onChange={e => setTitleEn(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Name (az)</Form.Label>
                        <Form.Control type="text" placeholder="Enter product name..." onChange={e => setTitleAz(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Description (en)</Form.Label>
                        <Form.Control type="text" placeholder="Enter product description..." onChange={e => setDescriptionEn(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Description (az)</Form.Label>
                        <Form.Control type="text" placeholder="Enter product description..." onChange={e => setDescriptionAz(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control type="number" placeholder="Enter product price..." onChange={e => setPrice(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Category (en)</Form.Label>
                        <Form.Select className='mb-3' aria-label="Default select example" onChange={e => setCategoryEn(e.target.value)}>
                            <option value="Select Category">Select Category</option>
                            {categories.map((item, index) => (
                                <option key={index} value={item.categoryNameEn}>{item.categoryNameEn}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Category (az)</Form.Label>
                        <Form.Select className='mb-3' aria-label="Default select example" onChange={e => setCategoryAz(e.target.value)}>
                            <option value="Select Category">Select Category</option>
                            {categories.map((item, index) => (
                                <option key={index} value={item.categoryNameAz}>{item.categoryNameAz}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Button variant="outline-warning" type="submit">
                        Add Product
                    </Button>
                </Form> */}
            </div>
        </div>
    )
}

export default AddProduct