import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { addProduct } from '../../tools/actions/action'

const AddProduct = () => {
    const categories = useSelector(p => p.category)

    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(category);

    const addingProduct = (e) => {
        e.preventDefault();
        if (!image || !title || !description || !price || !category) {
            Swal.fire({
                icon: "warning",
                title: "Please enter products information comprehensively!"
            })
        }
        else if (category === "Select Category") {
            Swal.fire({
                icon: "warning",
                title: "Please select category!"
            })
        }
        else if(price <= 0){
            Swal.fire({
                icon:"warning",
                title:"Impossible negative price!"
            })
        }
        else {
            dispatch(addProduct({ image, title, description, price, category }));
            navigate('/dashboard/products');
        }
    }

    return (
        <div className='container d-flex flex-column align-items-center my-2'>
            <h1>Add Product</h1>
            <div className="col-6 my-4">
                <Form onSubmit={addingProduct}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image Url</Form.Label>
                        <Form.Control type="text" placeholder="Enter product image..." onChange={e => setImage(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter product name..." onChange={e => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter product description..." onChange={e => setDescription(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control type="number" placeholder="Enter product price..." onChange={e => setPrice(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Category</Form.Label>
                        <Form.Select className='mb-3' aria-label="Default select example" onChange={e => setCategory(e.target.value)}>
                            <option value="Select Category">Select Category</option>
                            {categories.map((item, index) => (
                                <option key={index} value={item.categoryName}>{item.categoryName}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Button variant="outline-warning" type="submit">
                        Add Product
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default AddProduct