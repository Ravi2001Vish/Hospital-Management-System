import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const PaymentForm = ({ currentPayment, clearCurrentPayment, fetchPayments }) => {
  const [payment, setPayment] = useState({
    doctorname: '',
    Billno: '',
    Tax: '',
    date: '',
    Patientname: '',
    Fees: '',
    paymentimage: null
  });

  useEffect(() => {
    if (currentPayment) {
      setPayment({
        ...currentPayment,
        paymentimage: null,
      });
    } else {
      clearForm();
    }
  }, [currentPayment]);

  const clearForm = () => {
    setPayment({
      doctorname: '',
      Billno: '',
      Tax: '',
      date: '',
      Patientname: '',
      Fees: '',
      paymentimage: null,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayment({ ...payment, [name]: value });
  };

  // const handleFileChange = (e) => {
  //   setPayment({ ...payment, paymentimage: e.target.files[0] });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in payment) {
      formData.append(key, payment[key]);
    }

    try {
      if (currentPayment) {
        await axios.put(`http://localhost:9090/update-payment/${currentPayment._id}`, formData);
        clearCurrentPayment();
      } else {
        await axios.post('http://localhost:9090/add-payment', formData);
      }
    
      clearForm();
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };
// const getadmin  =useNavigate()
  return (
    <div className="payment-form-container" style={{width:"100%", marginTop:"-1px"}}>
      <h2 style={{fontFamily:"cursive"}} className="payment-form-heading">{currentPayment ? 'Edit Payment' : 'Add Payment'}</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        <span style={{color:"gray", fontFamily:"cursive"}}>Dr name</span>
        <input type="text" name="doctorname" value={payment.doctorname} onChange={handleChange} placeholder="Doctor Name" required className="form-input" />
        <span style={{color:"gray", fontFamily:"cursive"}}>Bill number</span>
        <input type="number" name="Billno" value={payment.Billno} onChange={handleChange} placeholder="Bill Number" required className="form-input" />
        <span style={{color:"gray", fontFamily:"cursive"}}>Tax</span>
        <input type="number" name="Tax" value={payment.Tax} onChange={handleChange} placeholder="Tax" required className="form-input" />
        <span style={{color:"gray", fontFamily:"cursive"}}>Date</span>
        <input type="date" name="date" value={payment.date} onChange={handleChange} placeholder="Date" required className="form-input"  style={{color:"grey"}}/>
        <span style={{color:"gray", fontFamily:"cursive"}}>Patient Name</span>
        <input type="text" name="Patientname" value={payment.Patientname} onChange={handleChange} placeholder="Patient Name" required className="form-input" />
        <span style={{color:"gray", fontFamily:"cursive" }}>Fees</span>
        <input type="number" name="Fees" value={payment.Fees} onChange={handleChange} placeholder="Fees" required className="form-input" />
      
       
  
      
        <button type="submit" className="submit-button" style={{margin:"10px"}} onClick={()=>alert("payment process initiated")}>{currentPayment ? 'Update Payment' : 'Add Payment'}</button>
        <div style={{display:"flex" ,alignItems:"center", justifyContent:"center", width:"100%"}}>
<button className='delete-button' onClick={()=>{window.location.href="Adminpanel"}} style={{width:"130px", borderRadius:"5px"}}>Back</button>

  </div>  

      </form>
   
    </div>
  );
};

export default PaymentForm;
