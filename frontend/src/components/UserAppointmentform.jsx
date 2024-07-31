import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';


const  AppointmentForm1 = ({ currentProduct, clearCurrentProduct }) => {
  const [product, setProduct] = useState({
    name: '',
    email: '',
    phone: '',
    nic: '',
    dob: '',
    gender: '',
    appointment_date: '',
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
      appointment_date: '',
      doctorDepartment: '',
      thumbnail: null,
      images: [],
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in product) {
      formData.append(key, product[key]);
    }

    try {
      if (currentProduct ) {
        await axios.put(`http://localhost:9090/update-category/${currentProduct._id}`, formData);
        clearCurrentProduct();
      } else {
        await axios.post('http://localhost:9090/add-category', formData);
      }
      clearForm();
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <>
 <div className="product-form-container" style={{width:"100%",backgroundColor:"#abdeed"}}>
      <h1 className="product-form-heading">{currentProduct ? 'Edit Appointment' : 'Get Appointment'}</h1>
      <form className="product-form" onSubmit={handleSubmit}>
        <span style={{ fontSize:"15px", color:"grey", fontFamily:"cursive" }}  htmlFor="">Name</span>
        <input style={{ width:"500px", margin:"0 auto", height:"35px" , color:"gray", fontSize:"12px"}} type="text" name="name" value={product.name} onChange={handleChange} placeholder="Name" required className="form-input"/>
        <span style={{ fontSize:"15px", fontFamily:"cursive", color:"grey" }} htmlFor="">Email</span>
        <input style={{ width:"500px", margin:"0 auto", height:"35px" , color:"gray", fontSize:"12px"}} type="email" name="email" value={product.email} onChange={handleChange} placeholder="Email" required className="form-input"/>
        <span style={{ fontSize:"15px", fontFamily:"cursive", color:"grey"}} htmlFor="">Phone No.</span>
        <input style={{ width:"500px", margin:"0 auto", height:"35px" , color:"gray", fontSize:"12px"}} type="text" name="phone" value={product.phone} onChange={handleChange} placeholder="Phone" required className="form-input"/>
        <span style={{ fontSize:"15px", fontFamily:"cursive", color:"grey"}} htmlFor="">NIC No</span>
        <input style={{ width:"500px", margin:"0 auto", height:"35px" , color:"gray", fontSize:"12px"}} type="text" name="nic" value={product.nic} onChange={handleChange} placeholder="NIC" required className="form-input"/>
        <span style={{ fontSize:"15px", fontFamily:"cursive", color:"grey"}} htmlFor="">DOB</span>
        <input style={{ width:"500px", margin:"0 auto", height:"35px" , color:"gray", fontSize:"12px"}} type="date" name="dob" value={product.dob} onChange={handleChange} placeholder="DOB" required className="form-input" />
        <span style={{ fontSize:"15px", fontFamily:"cursive", color:"grey"}} htmlFor="">Gender</span>
        <select style={{ width:"500px", margin:"0 auto", height:"35px" , color:"gray", fontSize:"12px"}} name="gender" value={product.gender} onChange={handleChange} required className="form-input">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <span style={{ fontSize:"15px", fontFamily:"cursive", color:"grey"}} htmlFor="">Appointment Date</span>
        <input  style={{ width:"500px", margin:"0 auto", height:"35px", fontSize:"12px", color:"grey"}}type="date"  name="appointment_date" value={product.appointment_date} onChange={handleChange} placeholder="Appointment Date" required className="form-input"/>
        <span style={{ fontSize:"15px", fontFamily:"cursive", color:"grey"}} htmlFor="">Department</span>
        <select style={{ width:"500px", margin:"0 auto", height:"35px", color:"gray", fontSize:"12px"}} type="text" name="doctorDepartment" value={product.doctorDepartment} onChange={handleChange} placeholder="Doctor Department" required className="form-input" >
        <option value="">Doctor Department</option>
        <option value="dental">DENTAL</option>
          <option value="nrurologist">NEUROLOGIST</option>
          <option value="phycologist">PHYCOLOGIST</option>
          <option value="cardiology">CARDIOLOGY</option>
          <option value="padiatric">PADIATRIC</option>
          <option value="pulmonary">PULMONARY</option>
          <option value="traumatology">TRAUMATOLOGY</option>
          <option value="xray">X-RAY</option>
        </select>
    
        <button type="submit" className="submit-button"  onClick={()=>alert("your appointment has been fixed")}>{currentProduct ? 'Update' : 'GET APPOINTMENT'}</button>
     
   </form>
    </div>
    <br />
    </>

  );
};

export default AppointmentForm1;
