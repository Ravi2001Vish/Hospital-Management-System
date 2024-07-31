import React, { useState, useEffect, useRef } from 'react';
import { FaLock } from 'react-icons/fa';
import './Chechout.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [cardHolder, setCardHolder] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [ccv, setCcv] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const cardNumberRef = useRef(null);
const navigate = useNavigate()
  useEffect(() => {
    if (cardNumberRef.current) {
      cardNumberRef.current.focus();
    }
  }, []);

  const handleCardNumberChange = (e, index) => {
    const newCardNumber = [...cardNumber];
    newCardNumber[index] = e.target.value;
    setCardNumber(newCardNumber);

    // Focus on next input field
    if (e.target.value.length === 4 && index < 3) {
      const nextInput = document.getElementById(`card-number-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleCardHolderChange = (e) => {
    setCardHolder(e.target.value);
  };

  const handleExpirationMonthChange = (e) => {
    setExpirationMonth(e.target.value);
  };

  const handleExpirationYearChange = (e) => {
    setExpirationYear(e.target.value);
  };

  const handleCcvChange = (e) => {
    setCcv(e.target.value);
  };

  const handleCcvFocus = () => {
    setIsHovered(true);
  };

  const handleCcvBlur = () => {
    setIsHovered(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  const paymentdone =()=>{
    alert("PAYMENT SUCCEFULL")
navigate("/products")
  }

  return (
    <>
    <div className='paymentpage'><h1>CHECKOUT</h1></div>
    <div className="checkout">
      <div className={`credit-card-box ${isHovered ? 'hover' : ''}`}>
        <div className="flip">
          <div className="front">
            <div className="chip"></div>
            <div className="logo">visa</div>
            <div className="number">{cardNumber.join(' ')}</div>
            <div className="card-holder">
              <label>Card holder</label>
              <div>{cardHolder}</div>
            </div>
            <div className="card-expiration-date">
              <label>Expires</label>
              <div>{`${expirationMonth}/${expirationYear.slice(-2)}`}</div>
            </div>
          </div>
          <div className="back">
            <div className="strip"></div>
            <div className="logo">visa</div>
            <div className="ccv">
              <label>CCV</label>
              <div>{ccv}</div>
            </div>
          </div>
        </div>
      </div>

      <form className="form" autoComplete="off" noValidate onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="card-number">Card Number</label>
          {cardNumber.map((num, index) => (
            <input
              key={index}
              type="text"
              id={`card-number-${index}`}
              className="input-cart-number"
              maxLength="4"
              value={num}
              onChange={(e) => handleCardNumberChange(e, index)}
              ref={index === 0 ? cardNumberRef : null}
            />
          ))}
        </fieldset>
        <fieldset>
          <label htmlFor="card-holder">Card holder</label>
          <input
            type="text"
            id="card-holder"
            value={cardHolder}
            onChange={handleCardHolderChange}
          />
        </fieldset>
        <fieldset className="fieldset-expiration">
          <label htmlFor="card-expiration-month">Expiration date</label>
          <div className="select">
            <select id="card-expiration-month" value={expirationMonth} onChange={handleExpirationMonthChange}>
              <option value=""></option>
              {[...Array(12)].map((_, i) => (
                <option key={i} value={String(i + 1).padStart(2, '0')}>{String(i + 1).padStart(2, '0')}</option>
              ))}
            </select>
          </div>
          <div className="select">
            <select id="card-expiration-year" value={expirationYear} onChange={handleExpirationYearChange}>
              <option value=""></option>
              {Array.from({ length: 10 }, (_, i) => 2016 + i).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </fieldset>
        <fieldset className="fieldset-ccv">
          <label htmlFor="card-ccv">CCV</label>
          <input
            type="text"
            id="card-ccv"
            maxLength="3"
            value={ccv}
            onFocus={handleCcvFocus}
            onBlur={handleCcvBlur}
            onChange={handleCcvChange}
          />
        </fieldset>
        <button className="paybtn" type="submit" onClick={paymentdone}>
          <FaLock /> submit
        </button>
      </form>
    </div>
    
    </>
  );
};

export default PaymentPage;
