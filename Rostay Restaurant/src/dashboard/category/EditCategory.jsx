import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editCategory } from '../../tools/actions/action';
import { Button, Form } from 'react-bootstrap';
import slugify from 'slugify';
import Swal from 'sweetalert2';

const EditCategory = () => {
  const categories = useSelector(p => p.category);
  // console.log(data);

  const { slug } = useParams();
  const filteredCategory = categories.find(item => slugify(item.categoryNameEn, { lower: true }) === slug);
  const [categoryEn, setCategoryEn] = useState('');
  const [categoryAz, setCategoryAz] = useState('');

  useEffect(() => {
    if (filteredCategory) {
      setCategoryEn(filteredCategory.categoryNameEn);
      setCategoryAz(filteredCategory.categoryNameAz);
    }
  }, [filteredCategory]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editingCategory = (e) => {
    e.preventDefault();
    if (!categoryEn || !categoryAz) {
      Swal.fire({
        icon: "warning",
        title: "Please add category name"
      })
    }
    else {
      dispatch(editCategory(filteredCategory.id, { categoryNameEn: categoryEn, categoryNameAz:categoryAz }));
      navigate('/dashboard/category');
    }
  }


  return (
    <div className='container d-flex align-items-center justify-content-center flex-column my-4'>
      <h1>Edit Category</h1>
      <div className='col-5 my-4'>
        <Form onSubmit={editingCategory}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Category Name (en)</Form.Label>
            <Form.Control type="text" value={categoryEn} onChange={e => setCategoryEn(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Category Name (az)</Form.Label>
            <Form.Control type="text" value={categoryAz} onChange={e => setCategoryAz(e.target.value)} />
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