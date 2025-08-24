import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import slugify from 'slugify';
import Swal from 'sweetalert2';
import { editProduct } from '../../tools/actions/action';

const EditProduct = () => {
  const categories = useSelector(p => p.category);
  const products = useSelector(p => p.product);

  const { slug } = useParams();

  const filteredProduct = products.find(item => slugify(item.title, { lower: true }) === slug);
  console.log(filteredProduct);

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (filteredProduct) {
      setImage(filteredProduct.image);
      setTitle(filteredProduct.title);
      setDescription(filteredProduct.description);
      setPrice(filteredProduct.price);
      setCategory(filteredProduct.category);
    }
  }, [filteredProduct]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editingProduct = (e) => {
    e.preventDefault();
    if (!image || !title || !description || !price || !category) {
      Swal.fire({
        icon: "warning",
        title: "Please enter information about product!"
      })
    }
    else if (category === "Select Category") {
      Swal.fire({
        icon: "warning",
        title: "Please enter category name!"
      })
    }
    else if (price <= 0) {
      Swal.fire({
        icon: "warning",
        title: "Impossible negative price!"
      })
    }
    else {
      dispatch(editProduct(filteredProduct.id, { image, title, description, price, category }));
      navigate('/dashboard/products')
    }
  }
  return (
    <div className='container d-flex align-items-center justify-content-center flex-column my-4'>
      <h1>Edit Product</h1>
      <div className='col-6 my-4'>
        <Form onSubmit={editingProduct}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image Url</Form.Label>
            <Form.Control type="text" value={image} placeholder="Enter product image..." onChange={e => setImage(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" value={title} placeholder="Enter product name..." onChange={e => setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Description</Form.Label>
            <Form.Control type="text" value={description} placeholder="Enter product description..." onChange={e => setDescription(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Price</Form.Label>
            <Form.Control type="number" value={price} placeholder="Enter product price..." onChange={e => setPrice(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Category</Form.Label>
            <Form.Select className='mb-3' aria-label="Default select example" value={category} onChange={e => setCategory(e.target.value)}>
              <option value="Select Category">Select Category</option>
              {categories.map((item, index) => (
                <option key={index} value={item.categoryName}>{item.categoryName}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Button variant="outline-warning" type="submit">
            Edit Product
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default EditProduct