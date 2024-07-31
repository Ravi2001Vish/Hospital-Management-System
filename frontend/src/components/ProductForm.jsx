import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
// import { useNavigate } from 'react-router-dom';

const ProductForm = ({ currentProduct, clearCurrentProduct }) => {
  const [product, setProduct] = useState({
    name: '',
    email: '',
    phone: '',
    nic: '',
    dob: '',
    gender: '',
    doctorDepartment: '',
    thumbnail: null,
    images: [],
  });

  useEffect(() => {
    if (currentProduct) {
      setProduct({
        ...currentProduct,
        thumbnail: null,
        images: [],
      });
    } else {
      clearForm();
    }
  }, [currentProduct]);

  const clearForm = () => {
    setProduct({
      name: '',
      email: '',
      phone: '',
      nic: '',
      dob: '',
      gender: '',
      doctorDepartment: '',
      thumbnail: null,
      images: [],
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setProduct({ ...product, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in product) {
      if (key === 'images') {
        for (let i = 0; i < product.images.length; i++) {
          formData.append('images', product.images[i]);
        }
      } else {
        formData.append(key, product[key]);
      }
    }

    try {
      if (currentProduct) {
        await axios.put(`http://localhost:9090/update-doctor/${currentProduct._id}`, formData);
        clearCurrentProduct();
      } else {
        await axios.post('http://localhost:9090/add-doctor', formData);
      }
      clearForm();
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  // const navigate = useNavigate();
  
  return (
    <div className="product-form-container" style={{width:"100%", backgroundColor:"#CADEE6"}}>
      <h2 className="product-form-heading">{currentProduct ? 'Edit Product' : 'Add Doctor'}</h2>
      <form className="product-form" onSubmit={handleSubmit}>
        <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Name" required className="form-input"/>
        <input type="email" name="email" value={product.email} onChange={handleChange} placeholder="Email" required className="form-input"/>
        <input type="text" name="phone" value={product.phone} onChange={handleChange} placeholder="Phone" required className="form-input"/>
        <input type="text" name="nic" value={product.nic} onChange={handleChange} placeholder="NIC" required className="form-input" />
        <input type="date" name="dob" value={product.dob} onChange={handleChange} placeholder="DOB" required className="form-input" style={{color:"grey"}}/>
        <select name="gender" value={product.gender} onChange={handleChange} required className="form-input" style={{color:"grey"}}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <select name="doctorDepartment" value={product.doctorDepartment} onChange={handleChange} placeholder="Doctor Department" required className="form-input" style={{color:"grey"}}>
        <option value="">DOCTOR DEPARTMENT</option>
          <option value="dental">DENTAL</option>
          <option value="neurologist">NEUROLOGIST</option>
          <option value="psychologist">PSYCHOLOGIST</option>
          <option value="cardiology">CARDIOLOGY</option>
          <option value="pediatric">PEDIATRIC</option>
          <option value="pulmonary">PULMONARY</option>
          <option value="traumatology">TRAUMATOLOGY</option>
          <option value="xray">X-RAY</option>
        </select>
        <input type="file" name="thumbnail" onChange={handleFileChange} className="form-input" style={{color:"grey"}}/>
     
        <button type="submit" className="submit-button" onClick={()=>alert("New doctor added")}>{currentProduct ? 'Update' : 'Add '} Doctor</button>
        <div style={{display:"flex" ,alignItems:"center", justifyContent:"end", width:"100%"}}>
<button className='delete-button' onClick={()=>{window.location.href="Adminpanel"}} style={{width:"125px", borderRadius:"5px"}}>Back</button>

  </div>  
      </form>
    </div>
  );
};

export default ProductForm;
