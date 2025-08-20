import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { addCategory } from '../../tools/actions/action';
import { Link, useNavigate } from 'react-router-dom';

const AddCategory = () => {
    const [category, setCategory] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addingCategory = (e) => {
        e.preventDefault();
        if (!category) {
            Swal.fire({
                icon: "warning",
                title: "Please add category name"
            })
        }
        else {
            dispatch(addCategory({ categoryName: category }));
            navigate('/dashboard/category');
        }
    }
    return (
        <div className='container d-flex align-items-center justify-content-center flex-column my-4'>
            <h1>Add Category</h1>
            <div className='col-5 my-4'>
                <Form onSubmit={addingCategory}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter category..." onChange={e => setCategory(e.target.value)} />
                    </Form.Group>
                    <Button variant="outline-warning" type="submit">
                        Add
                    </Button>

                </Form>
            </div>

        </div>
    )
}

export default AddCategory