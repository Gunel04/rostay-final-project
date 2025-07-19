import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addCategory, editCategory } from '../../tools/actions/action';
import { Button, Form } from 'react-bootstrap';
import slugify from 'slugify';

const EditCategory = () => {
  const data = useSelector(p => p);
  const { slug } = useParams();
  const filteredCategory = data.find(item => slugify(item.categoryName, { lower: true }) === slug);
  console.log(filteredCategory);
  const [category, setCategory] = useState(filteredCategory.categoryName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editingForm = (fetchData) => {
    dispatch(editCategory({ id: filteredCategory.id, editData: fetchData }))
  }


  const editingCategory = (e) => {
    e.preventDefault();
    if (!category) {
      Swal.fire({
        icon: "warning",
        title: "Please add category name"
      })
    }
    else {
      // dispatch(editCategory({id:filteredCategory.id, categoryName: category }));
      editingForm({ categoryName: category })
      navigate('/dashboard/category');
    }
  }


  return (
    <div className='container d-flex align-items-center justify-content-center flex-column my-4'>
      <h1>Edit Category</h1>
      <div className='col-5 my-4'>
        <Form onSubmit={editingCategory}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Category Name</Form.Label>
            <Form.Control type="text" defaultValue={category} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Edit
          </Button>

        </Form>
      </div>

    </div>
  )
}

export default EditCategory