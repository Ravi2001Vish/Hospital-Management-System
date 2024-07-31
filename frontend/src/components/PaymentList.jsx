// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import PaymentForm from './PaymentFrom';
// // import { useNavigate } from 'react-router-dom';

// const PaymentList = ({ setCurrentPayment }) => {
//   const [payments, setPayments] = useState([]);
//   // const navigate = useNavigate();

//   useEffect(() => {
//     fetchPayments();
//   }, []);

//   const fetchPayments = async () => {
//     const response = await axios.get('http://localhost:9090/get-payments');
//     setPayments(response.data.data);
//   };

//   const deletePayment = async (id) => {
//     await axios.delete(`http://localhost:9090/delete-payment/${id}`);
//     fetchPayments();
//   };

//   // const editPayment = (payment) => {
//   //   setCurrentPayment(payment);
//   //   navigate("/edit-payment");
//   // };

//   return (
//     <div className="payment-list-container" style={{ width: "100%" }}>
//       <h2 className="payment-list-heading">Payments Listing</h2>
//       <table className="payment-table">
//         <thead>
//           <tr>
//             <th>Doctor Name</th>
//             <th>Bill No</th>
//             <th>Tax</th>
//             <th>Patient Name</th>
//             <th>Fees</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {payments.map((payment) => (
//             <tr key={payment._id} className="payment-item">
//               <td>{payment.doctorname}</td>
//               <td>{payment.Billno}</td>
//               <td>{payment.Tax}</td>
//               <td>{payment.Patientname}</td>
//               <td>{payment.Fees}</td>
//               <td>
//                 {/* <button onClick={() => editPayment(payment)}>Edit</button> */}
//                 <button className="delete-button" onClick={() => deletePayment(payment._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <br />
//       <button className='edit-button' onClick={()=>{window.location.href="Adminpanel"}}>Back</button>
//       <button className='edit-button'>Add Payment + </button>
//       <div className='adminpayment1'><PaymentForm/></div>

//     </div>
//   );
// };

// export default PaymentList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PaymentForm from './PaymentFrom';
// import { useNavigate } from 'react-router-dom';

const PaymentList = ({ setCurrentPayment }) => {
  const [payments, setPayments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    const response = await axios.get('http://localhost:9090/get-payments');
    setPayments(response.data.data);
  };

  const deletePayment = async (id) => {
    await axios.delete(`http://localhost:9090/delete-payment/${id}`);
    fetchPayments();
  };

  // const editPayment = (payment) => {
  //   setCurrentPayment(payment);
  //   navigate("/edit-payment");
  // };

  const openModal = () => {
    setIsModalOpen(true);
   
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="payment-list-container" style={{ width: "100%" }}>
      <h2 className="payment-list-heading">Payments Listing</h2>
      <table className="payment-table">
        <thead>
          <tr>
            <th>Doctor Name</th>
            <th>Bill No</th>
            <th>Tax</th>
            <th>Patient Name</th>
            <th>Fees</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment._id} className="payment-item">
              <td>{payment.doctorname}</td>
              <td>{payment.Billno}</td>
              <td>{payment.Tax}</td>
              <td>{payment.Patientname}</td>
              <td>{payment.Fees}</td>
              <td>
                {/* <button onClick={() => editPayment(payment)}>Edit</button> */}
                <button className="delete-button" onClick={() => deletePayment(payment._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <button className='edit-button' onClick={() => { window.location.href = "Adminpanel" }}>Back</button>
      <button className='edit-button' onClick={openModal}>Add Payment + </button>

      {isModalOpen && (
        <div className='adminpayment12'>
          <div className='modal-content1'>
            <span className='close-button' onClick={closeModal}>&times;</span>
            <PaymentForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentList;
