import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editCategory } from '../../tools/actions/action';
import { Button, Form } from 'react-bootstrap';
import slugify from 'slugify';
import Swal from 'sweetalert2';
import StaticLanguage from '../../utils/StaticLanguage';

const EditCategory = () => {
  const categories = useSelector(p => p.category);

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

  const editingCategoryEn = (e) => {
    e.preventDefault();
    if (!categoryEn || !categoryAz) {
      Swal.fire({
        icon: "warning",
        title: "Please add category name!"
      })
    }
    else {
      dispatch(editCategory(filteredCategory.id, { categoryNameEn: categoryEn, categoryNameAz: categoryAz }));
      navigate('/dashboard/category');
    }
  }

  const editingCategoryAz = (e) => {
    e.preventDefault();
    if (!categoryEn || !categoryAz) {
      Swal.fire({
        icon: "warning",
        title: "Zəhmət olmasa kateqoriya adını daxil edin!"
      })
    }
    else {
      dispatch(editCategory(filteredCategory.id, { categoryNameEn: categoryEn, categoryNameAz: categoryAz }));
      navigate('/dashboard/category');
    }
  }


  return (
    <div className='container d-flex align-items-center flex-column my-4' style={{ height: "100vh" }}>
      <h1>
        <StaticLanguage en="Edit Category" az="Kateqoriyada Düzəliş Et" />
      </h1>
      <div className='col-5 my-4'>
        <StaticLanguage
          en={
            <Form onSubmit={editingCategoryEn}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Category Name (en)</Form.Label>
                <Form.Control type="text" placeholder="Enter category..." value={categoryEn} onChange={e => setCategoryEn(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Category Name (az)</Form.Label>
                <Form.Control type="text" placeholder="Enter category..." value={categoryAz} onChange={e => setCategoryAz(e.target.value)} />
              </Form.Group>
              <Button variant="warning" type="submit">
                Edit
              </Button>
            </Form>
          }

          az={
            <Form onSubmit={editingCategoryAz}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Kateqoriya adı (en)</Form.Label>
                <Form.Control type="text" placeholder="Kateqoriyanı daxil edin..." value={categoryEn} onChange={e => setCategoryEn(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Kateqoriya adı (az)</Form.Label>
                <Form.Control type="text" placeholder="Kateqoriyanı daxil edin..." value={categoryAz} onChange={e => setCategoryAz(e.target.value)} />
              </Form.Group>
              <Button variant="warning" type="submit">
                <StaticLanguage en="Edit" az="Düzəliş Et"/>
              </Button>
            </Form>
          }

        />
        
      </div>
    </div>
  )
}

export default EditCategory