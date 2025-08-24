import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import slugify from 'slugify';
import Swal from 'sweetalert2';
import { editBlog } from '../../tools/actions/action';

const EditBlog = () => {
  const [image, setImage] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [titleAz, setTitleAz] = useState("");
  const [descriptionEn, setDescriptionEn] = useState("");
  const [descriptionAz, setDescriptionAz] = useState("");
  const [dateEn, setDateEn] = useState("");
  const [dateAz, setDateAz] = useState("");

  const blogs = useSelector(p => p.blog);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { slug } = useParams();
  const filteredBlog = blogs.find(p => slugify(p.titleEn, { lower: true }) === slug);
  console.log(filteredBlog);

  useEffect(() => {
    if (filteredBlog) {
      setImage(filteredBlog.image);
      setTitleEn(filteredBlog.titleEn);
      setTitleAz(filteredBlog.titleAz);
      setDescriptionEn(filteredBlog.descriptionEn);
      setDescriptionAz(filteredBlog.descriptionAz);
      setDateEn(filteredBlog.dateEn);
      setDateAz(filteredBlog.dateAz);
    }
  }, [filteredBlog])

  const editingBlog = (e) => {
    e.preventDefault();
    if (!image || !titleEn || !titleAz || !descriptionEn || !descriptionAz || !dateEn || !dateAz) {
      Swal.fire({
        icon: "warning",
        title: "Please, enter blog information!"
      })

    }
    else {
      dispatch(editBlog(filteredBlog.id, { image, titleEn, titleAz, descriptionEn, descriptionAz, dateEn, dateAz }))
      navigate('/dashboard/blog');
    }
  }

  return (
    <div className='container d-flex flex-column align-items-center justify-content-center'>
      <h1>Edit Blog</h1>
      <div className='col-6 my-4'>
        <Form onSubmit={editingBlog}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image Url</Form.Label>
            <Form.Control type="text" placeholder="Enter image url..." onChange={e => setImage(e.target.value)} value={image} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Blog Title(en)</Form.Label>
            <Form.Control type="text" placeholder="Enter blog title..." onChange={e => setTitleEn(e.target.value)} value={titleEn} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Blog Title(az)</Form.Label>
            <Form.Control type="text" placeholder="Enter blog title..." onChange={e => setTitleAz(e.target.value)} value={titleAz} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Blog Description(en)</Form.Label>
            <Form.Control type="text" placeholder="Enter blog description..." onChange={e => setDescriptionEn(e.target.value)} value={descriptionEn} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Blog Description(az)</Form.Label>
            <Form.Control type="text" placeholder="Enter blog description..." onChange={e => setDescriptionAz(e.target.value)} value={descriptionAz} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Blog Date(en)</Form.Label>
            <Form.Control type="text" placeholder="Enter blog date..." onChange={e => setDateEn(e.target.value)} value={dateEn} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Blog Date(az)</Form.Label>
            <Form.Control type="text" placeholder="Enter blog date..." onChange={e => setDateAz(e.target.value)} value={dateAz} />
          </Form.Group>

          <Button variant="outline-warning" type="submit">
            Edit Blog
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default EditBlog
