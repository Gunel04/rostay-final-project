import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import slugify from 'slugify';
import Swal from 'sweetalert2';
import { editProduct } from '../../tools/actions/action';
import StaticLanguage from '../../utils/StaticLanguage';

const EditProduct = () => {
  const categories = useSelector(p => p.category);
  const products = useSelector(p => p.product);

  const { slug } = useParams();

  const filteredProduct = products.find(item => slugify(item.titleEn, { lower: true }) === slug);
  console.log(filteredProduct);

  const [image, setImage] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [titleAz, setTitleAz] = useState("");
  const [descriptionEn, setDescriptionEn] = useState("");
  const [descriptionAz, setDescriptionAz] = useState("");
  const [price, setPrice] = useState("");
  const [categoryEn, setCategoryEn] = useState("");
  const [categoryAz, setCategoryAz] = useState("");

  useEffect(() => {
    if (filteredProduct) {
      setImage(filteredProduct.image);
      setTitleEn(filteredProduct.titleEn);
      setTitleAz(filteredProduct.titleAz);
      setDescriptionEn(filteredProduct.descriptionEn);
      setDescriptionAz(filteredProduct.descriptionAz);
      setPrice(filteredProduct.price);
      setCategoryEn(filteredProduct.categoryEn);
      setCategoryAz(filteredProduct.categoryAz);
    }
  }, [filteredProduct]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editingProductEn = (e) => {
    e.preventDefault();
    if (!image || !titleEn || !titleAz || !descriptionEn || !descriptionAz || !price || !categoryEn || !categoryAz) {
      Swal.fire({
        icon: "warning",
        title: "Please enter information about product!"
      })
    }
    else if (categoryEn === "Select Category" || categoryAz === "Select Category") {
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
      dispatch(editProduct(filteredProduct.id, { image, titleEn, titleAz, descriptionEn, descriptionAz, price, categoryEn, categoryAz }));
      navigate('/dashboard/products')
    }
  }

  const editingProductAz = (e) => {
    e.preventDefault();
    if (!image || !titleEn || !titleAz || !descriptionEn || !descriptionAz || !price || !categoryEn || !categoryAz) {
      Swal.fire({
        icon: "warning",
        title: "Zəhmət olmasa məhsul haqqında məlumatı daxil edin!"
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
      dispatch(editProduct(filteredProduct.id, { image, titleEn, titleAz, descriptionEn, descriptionAz, price, categoryEn, categoryAz }));
      navigate('/dashboard/products')
    }
  }
  return (
    <div className='container d-flex align-items-center justify-content-center flex-column my-4'>
      <h1>
        <StaticLanguage en="Edit Product" az="Məhsulda Düzəliş Et"/>
      </h1>
      <div className='col-6 my-4'>
        <StaticLanguage
          en={
            <Form onSubmit={editingProductEn}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Image Url</Form.Label>
                <Form.Control type="text" value={image} placeholder="Enter product image..." onChange={e => setImage(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Name (en)</Form.Label>
                <Form.Control type="text" value={titleEn} placeholder="Enter product name..." onChange={e => setTitleEn(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Name (az)</Form.Label>
                <Form.Control type="text" value={titleAz} placeholder="Enter product name..." onChange={e => setTitleAz(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Description (en)</Form.Label>
                <Form.Control type="text" value={descriptionEn} placeholder="Enter product description..." onChange={e => setDescriptionEn(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Description (az)</Form.Label>
                <Form.Control type="text" value={descriptionAz} placeholder="Enter product description..." onChange={e => setDescriptionAz(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Price</Form.Label>
                <Form.Control type="number" value={price} placeholder="Enter product price..." onChange={e => setPrice(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Category (en)</Form.Label>
                <Form.Select className='mb-3' aria-label="Default select example" value={categoryEn} onChange={e => setCategoryEn(e.target.value)}>
                  <option value="Select Category">Select Category</option>
                  {categories.map((item, index) => (
                    <option key={index} value={item.categoryNameEn}>{item.categoryNameEn}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Category (az)</Form.Label>
                <Form.Select className='mb-3' aria-label="Default select example" value={categoryAz} onChange={e => setCategoryAz(e.target.value)}>
                  <option value="Select Category">Select Category</option>
                  {categories.map((item, index) => (
                    <option key={index} value={item.categoryNameAz}>{item.categoryNameAz}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Button variant="outline-warning" type="submit">
                Edit Product
              </Button>
            </Form>
          }

          az={
            <Form onSubmit={editingProductAz}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Şəkil URL</Form.Label>
                <Form.Control type="text" value={image} placeholder="Məhsulun şəklini daxil edin..." onChange={e => setImage(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Məhsulun Adı (en)</Form.Label>
                <Form.Control type="text" value={titleEn} placeholder="Məhsulun adını daxil edin..." onChange={e => setTitleEn(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Məhsulun Adı (az)</Form.Label>
                <Form.Control type="text" value={titleAz} placeholder="Məhsulun adını daxil edin..." onChange={e => setTitleAz(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Məhsulun Təsviri (en)</Form.Label>
                <Form.Control type="text" value={descriptionEn} placeholder="Məhsulun təsvirini daxil edin..." onChange={e => setDescriptionEn(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Məhsulun Təsviri (az)</Form.Label>
                <Form.Control type="text" value={descriptionAz} placeholder="Məhsulun təsvirini daxil edin..." onChange={e => setDescriptionAz(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Məhsulun Qiyməti</Form.Label>
                <Form.Control type="number" value={price} placeholder="Məhsulun qiymətini daxil edin..." onChange={e => setPrice(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Məhsul Kateqoriyası (en)</Form.Label>
                <Form.Select className='mb-3' value={categoryEn} aria-label="Default select example" onChange={e => setCategoryEn(e.target.value)}>
                  <option value="Kateqoriya seçin">Kateqoriya seçin</option>
                  {categories.map((item, index) => (
                    <option key={index} value={item.categoryNameEn}>{item.categoryNameEn}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Məhsul Kateqoriyası (az)</Form.Label>
                <Form.Select className='mb-3' value={categoryAz} aria-label="Default select example" onChange={e => setCategoryAz(e.target.value)}>
                  <option value="Kateqoriya seçin">Kateqoriya seçin</option>
                  {categories.map((item, index) => (
                    <option key={index} value={item.categoryNameAz}>{item.categoryNameAz}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Button variant="outline-warning" type="submit">
                Məhsulda Düzəliş Et
              </Button>
            </Form>
          }
        />
        {/* <Form onSubmit={editingProduct}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image Url</Form.Label>
            <Form.Control type="text" value={image} placeholder="Enter product image..." onChange={e => setImage(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name (en)</Form.Label>
            <Form.Control type="text" value={titleEn} placeholder="Enter product name..." onChange={e => setTitleEn(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name (az)</Form.Label>
            <Form.Control type="text" value={titleAz} placeholder="Enter product name..." onChange={e => setTitleAz(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Description (en)</Form.Label>
            <Form.Control type="text" value={descriptionEn} placeholder="Enter product description..." onChange={e => setDescriptionEn(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Description (az)</Form.Label>
            <Form.Control type="text" value={descriptionAz} placeholder="Enter product description..." onChange={e => setDescriptionAz(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Price</Form.Label>
            <Form.Control type="number" value={price} placeholder="Enter product price..." onChange={e => setPrice(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Category (en)</Form.Label>
            <Form.Select className='mb-3' aria-label="Default select example" value={categoryEn} onChange={e => setCategoryEn(e.target.value)}>
              <option value="Select Category">Select Category</option>
              {categories.map((item, index) => (
                <option key={index} value={item.categoryNameEn}>{item.categoryNameEn}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Category (az)</Form.Label>
            <Form.Select className='mb-3' aria-label="Default select example" value={categoryAz} onChange={e => setCategoryAz(e.target.value)}>
              <option value="Select Category">Select Category</option>
              {categories.map((item, index) => (
                <option key={index} value={item.categoryNameAz}>{item.categoryNameAz}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Button variant="outline-warning" type="submit">
            Edit Product
          </Button>
        </Form> */}
      </div>
    </div>
  )
}

export default EditProduct