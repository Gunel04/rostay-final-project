import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addBlog } from '../../tools/actions/action';

const AddBlog = () => {
    const [image, setImage] = useState("");
    const [titleEn, setTitleEn] = useState("");
    const [titleAz, setTitleAz] = useState("");
    const [descriptionEn, setDescriptionEn] = useState("");
    const [descriptionAz, setDescriptionAz] = useState("");
    const [dateEn, setDateEn] = useState("");
    const [dateAz, setDateAz] = useState("");


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addingBlog = (e) => {
        e.preventDefault();
        if(!image || !titleEn || !titleAz || !descriptionEn || !descriptionAz || !dateEn || !dateAz) {
            Swal.fire({
                icon:"warning",
                title:"Please enter all blog information!"
            })
        }
        else {
            dispatch(addBlog({image, titleEn, titleAz, descriptionEn, descriptionAz, dateEn, dateAz}));
            navigate('/dashboard/blog');
        }
    }
    return (
        <div className='container d-flex flex-column align-items-center justify-content-center'>
            <h1>Add Blog</h1>
            <div className='col-6 my-4'>
                <Form onSubmit={addingBlog}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image Url</Form.Label>
                        <Form.Control type="text" placeholder="Enter image url..." onChange={e => setImage(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Blog Title(en)</Form.Label>
                        <Form.Control type="text" placeholder="Enter blog title..." onChange={e => setTitleEn(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Blog Title(az)</Form.Label>
                        <Form.Control type="text" placeholder="Enter blog title..." onChange={e => setTitleAz(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Blog Description(en)</Form.Label>
                        <Form.Control type="text" placeholder="Enter blog description..." onChange={e => setDescriptionEn(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Blog Description(az)</Form.Label>
                        <Form.Control type="text" placeholder="Enter blog description..." onChange={e => setDescriptionAz(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Blog Date(en)</Form.Label>
                        <Form.Control type="text" placeholder="Enter blog date..." onChange={e => setDateEn(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Blog Date(az)</Form.Label>
                        <Form.Control type="text" placeholder="Enter blog date..." onChange={e => setDateAz(e.target.value)} />
                    </Form.Group>

                    <Button variant="warning" type="submit">
                        Add Blog
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default AddBlog
