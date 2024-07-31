// src/App.js
import React, { useState } from 'react';


const CardForm =()=> {
  const [vehiclePrice, setVehiclePrice] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [totalInterest, setTotalInterest] = useState('');
  const [totalAmount, setTotalAmount] = useState('');

  const handleCalculate = () => {
    const principal = vehiclePrice - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const x = Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const monthly = (principal * x * monthlyInterestRate) / (x - 1);
    const totalPayable = monthly * numberOfPayments;
    const interestPayable = totalPayable - principal;

    setMonthlyPayment(monthly.toFixed(2));
    setTotalInterest(interestPayable.toFixed(2));
    setTotalAmount(totalPayable.toFixed(2));
  };

  return (
    <div className="App">
  
      <div className="calculator">
        <div>
          <label>
            <h6>Vehicle Price:</h6>
            <input
              type="number"
              value={vehiclePrice}
              onChange={(e) => setVehiclePrice(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
           <h6> Interest Rate (%):</h6>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
    <h6>        Loan Term (years):</h6>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
   <h6>         Down Payment:</h6>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
            />
          </label>
        </div>
        <button onClick={handleCalculate}>Calculate</button>
      </div>
      <br />
      <div className="resultscalculator">
      <h6>Monthly Payment: $</h6><p>{monthlyPayment}</p>
    <h6>  Total Interest Payment: $</h6><p>{totalInterest}</p>
     <h6> Total Amount to Pay: $</h6><p>{totalAmount}</p>
      </div>
    </div>
  );
}

export default CardForm;
