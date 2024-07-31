import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RazorpayButton = ({ onSuccess, paymentId }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Load the Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const options = {
        key: 'rzp_test_GkPt4QTyG6IJZr', // Replace with your test key id
        amount: Math.round(5000 * 100), // Amount in currency subunits. Default currency is INR.
        currency: 'INR',
        name: 'Ravi PVT LTD', // Your business name
        description: 'Doctor Doctor',
        image: 'https://example.com/your_logo', // Optional - replace with your logo URL
        prefill: { // We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
          name: 'Ravi vishwakarma', // Your customer's name
          email: 'ravivish@gmail.com',
          contact: '1236547896' // Provide the customer's phone number for better conversion rates
        },
        notes: {
          address: 'Razorpay Corporate Office'
        },
        theme: {
          color: 'black'
        },
        handler: (response) => {
          onPaymentSuccess(response.razorpay_payment_id);
        },
        modal: {
          ondismiss: () => {
            onPaymentError();
          }
        }
      };

      const rzp1 = new window.Razorpay(options);

      document.getElementById('rzp-button1').onclick = function(e) {
        rzp1.open();
        e.preventDefault();
      };

      rzp1.on('payment.failed', (response) => {
        onPaymentError(response.error.code, response.error.description);
      });
    };
  });

  const onPaymentSuccess = (paymentTransactionId) => {
    console.log('Payment successful', paymentTransactionId);
    alert('Payment successful');
    onSuccess(paymentId);
  };

  const onPaymentError = (code, description) => {
    console.error(`Payment error: ${code} ---------- ${description}`);
    alert('Payment error');
    navigate('/products'); // Adjust the path as necessary
  };

  return <button id="rzp-button1" style={{ backgroundColor: "#17a2b8" }}>Pay here</button>;
};

export default RazorpayButton;
