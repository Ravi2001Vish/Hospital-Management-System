import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import RazorpayButton from './RazorpayButton';

const Userpaymentlist = () => {
  const [payments, setPayments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    const response = await axios.get('http://localhost:9090/get-payments');
    setPayments(response.data.data);
  };

  const handlePaymentSuccess = (id) => {
    setPayments(payments.filter(payment => payment._id !== id));
    navigate("/userpaymentList");
  };

  return (
    <div className="payment-list-container" style={{ marginTop: "80px" }}>
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
                <RazorpayButton
                  onSuccess={handlePaymentSuccess}
                  paymentId={payment._id}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </div>
  );
};

export default Userpaymentlist;
