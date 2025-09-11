import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { addCategory } from '../../tools/actions/action';
import { Link, useNavigate } from 'react-router-dom';
import StaticLanguage from '../../utils/StaticLanguage';

const AddCategory = () => {
    const [categoryEn, setCategoryEn] = useState("");
    const [categoryAz, setCategoryAz] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addingCategoryEn = (e) => {
        e.preventDefault();
        if (!categoryEn || !categoryAz) {
            Swal.fire({
                icon: "warning",
                title: "Please add category name!"
            })
        }
        else {
            dispatch(addCategory({ categoryNameEn: categoryEn, categoryNameAz: categoryAz }));
            navigate('/dashboard/category');
        }
    }
    const addingCategoryAz = (e) => {
        e.preventDefault();
        if (!categoryEn || !categoryAz) {
            Swal.fire({
                icon: "warning",
                title: "Zəhmət olmasa kateqoriya adını daxil edin!"
            })
        }
        else {
            dispatch(addCategory({ categoryNameEn: categoryEn, categoryNameAz: categoryAz }));
            navigate('/dashboard/category');
        }
    }
    return (
        <div className='container d-flex align-items-center flex-column my-1' style={{ height: "100vh" }}>
            <h1>
                <StaticLanguage en="Add Category" az="Kateqoriya Əlavə Et" />
            </h1>
            <div className='col-5 my-4'>
                <StaticLanguage
                    en={
                        <Form onSubmit={addingCategoryEn}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Category Name (en)</Form.Label>
                                <Form.Control type="text" placeholder="Enter category..." onChange={e => setCategoryEn(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Category Name (az)</Form.Label>
                                <Form.Control type="text" placeholder="Enter category..." onChange={e => setCategoryAz(e.target.value)} />
                            </Form.Group>
                            <Button variant="outline-warning" type="submit">
                                Add Category
                            </Button>

                        </Form>
                    }

                    az={
                        <Form onSubmit={addingCategoryAz}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Kateqoriya adı (en)</Form.Label>
                                <Form.Control type="text" placeholder="Kateqoriyanı daxil edin..." onChange={e => setCategoryEn(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Kateqoriya adı (az)</Form.Label>
                                <Form.Control type="text" placeholder="Kateqoriyanı daxil edin..." onChange={e => setCategoryAz(e.target.value)} />
                            </Form.Group>
                            <Button variant="outline-warning" type="submit">
                                Kateqoriya Əlavə Et
                            </Button>

                        </Form>
                    }

                />
                {/* <Form onSubmit={addingCategory}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Category Name (en)</Form.Label>
                        <Form.Control type="text" placeholder="Enter category..." onChange={e => setCategoryEn(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Category Name (az)</Form.Label>
                        <Form.Control type="text" placeholder="Enter category..." onChange={e => setCategoryAz(e.target.value)} />
                    </Form.Group>
                    <Button variant="outline-warning" type="submit">
                        Add Category
                    </Button>

                </Form> */}
            </div>

        </div>
    )
}

export default AddCategory